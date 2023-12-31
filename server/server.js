import express from "express";
import cors from "cors";
import { scraper, updateChapter } from "./scrapper.js";
import mangaWeb from "./controlers/mangaWeb.js";
import getAllManga from "./controlers/getAllManga.js";
import incrementViews from "./controlers/incrementViews.js";
import updateTotalChapter from "./controlers/updateTotalChapter.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cron from "node-cron";
dotenv.config();

import db from "./database/dbConnection.js";

const app = express();
app.use(express.json());
const salt = 10;
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(cookieParser());

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "user not authorized", token });
  } else {
    jwt.verify(token, process.env.KEY_BRANCE_JT, (err, decoded) => {
      if (err) {
        return res.json({ Error: "Token is not verified" });
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};

app.get("/uploadManga", verifyUser, (req, res) => {
  return res.json({ Status: "success", name: req.name });
});

app.post("/chapter", async (req, res) => {
  const url = `${req.body.url}`;
  const chapClass = `${req.body.chapClass}`;

  const chapter = await scraper(url, chapClass);
  res.json(chapter);
});

app.post("/createManga", async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res.status(400).json({ error: "Invalid request data." });
    }
    console.log(data);
    await mangaWeb(data);

    return res.status(200).json({ message: "Manga creation successful." });
  } catch (error) {
    console.error("An error occurred:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating the manga." });
  }
});

app.get("/allManga", async (req, res) => {
  try {
    const data = await getAllManga();

    if (!data || data.length === 0) {
      console.log("entered empty data");
      return res.status(400).json({ error: "Invalid request data." });
    }

    res.status(200).json({ result: data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred." });
  }
});

app.post("/incrementViews", async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res.status(400).json({ error: "Invalid request data." });
    }
    console.log(data);
    await incrementViews(data);

    return res.status(200).json({ message: "Manga view incremented." });
  } catch (error) {
    console.error("An error occurred:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating the manga." });
  }
});

app.post("/login", (req, res) => {
  console.log(req.body.email.toString());
  const sql = `SELECT * FROM admins WHERE email = ?`;

  db.query(sql, req.body.email.toString(), (err, data) => {
    if (err) return res.json({ Error: "Login error in server" });

    if (data.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        data[0].password,
        (err, response) => {
          if (err) return res.json({ Error: "password compare error" });
          if (response) {
            const name = data[0].name;
            const token = jwt.sign({ name }, process.env.KEY_BRANCE_JT, {
              expiresIn: "1d",
            });
            res.cookie("token", token);
            return res.json({ Status: "success" });
          } else {
            return res.json({ Error: "password not matched" });
          }
        }
      );
    } else {
      return res.json({ Error: "email does not exist" });
    }
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "success" });
});

const chapterUpdate = async () => {
  try {
    const data = await getAllManga();

    if (!data || data.length === 0) {
      console.log("entered empty data");
      return res.status(400).json({ error: "Invalid request data." });
    }
    data.forEach(async (element) => {
      const { mangaClass, totalChapter, mangaLink, id } = element;
      let newTotalChapter = await updateChapter(
        mangaLink,
        mangaClass,
        totalChapter
      );
      let result = await updateTotalChapter({
        id,
        newTotalChapter,
        totalChapter,
      });
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred." });
  }
};

cron.schedule("0 2 * * *", () => {
  console.log("Running API request...");
  chapterUpdate();
});

app.listen(8061, () => {
  console.log("listening on port 8061");
});
