import db from "../database/dbConnection.js";

const updateTotalChapter = async (values) => {
  const id = values.id;
  const totalChapter = values.newTotalChapter;
  const sql = `UPDATE mangalist
  SET totalChapter = ${totalChapter}
  WHERE id = ${id};
  `;

  db.query(sql, (err, result) => {
    if (result) {
      const message = `${id}:${totalChapter}`;

      return message;
    } else {
      console.log(err);
      const message = "error";
      return message;
    }
  });
};

export default updateTotalChapter;
