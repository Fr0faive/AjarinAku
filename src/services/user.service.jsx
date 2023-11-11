import axios from "axios";

const getUsers = async () => {
  axios
    .get("http://localhost:5000/users")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
