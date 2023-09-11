import axios from "axios";

const incrementView = (values) => {
  console.log(values);

  axios
    .post(`${import.meta.env.VITE_BASE_URL}/incrementViews`, values)

    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export default incrementView;
