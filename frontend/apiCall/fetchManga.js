import axios from "axios";

const fetchManga = () => {
  return axios
    .get(`${import.meta.env.VITE_BASE_URL}/allManga`)

    .then((res) => res)
    .catch((err) => console.log(err.err));
};

export default fetchManga;
