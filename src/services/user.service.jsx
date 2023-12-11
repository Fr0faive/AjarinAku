import axios from "axios";

const API_URL = "http://localhost:3000";
const token = localStorage.getItem("Authorization");
const getUsers = async (callback) => {
  axios
    .get(`${API_URL}/api/users/current`, {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res.data.data);
      callback(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getUserById = async (id, callback) => {
  axios
    .get(`${API_URL}/api/users/find/${id}`, {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res.data.data);
      callback(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default { getUsers, getUserById };
