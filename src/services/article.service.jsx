import axios from "axios";

const API_URL = "http://localhost:3000";
const token = localStorage.getItem("Authorization");

const getArticles = async (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res.data);
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDetailsArticles = async (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      console.log(res.data);
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addArticle = async (data) => {
  axios
    .post(`${API_URL}/api/articles`, data, {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default {
  getArticles,
  getDetailsArticles,
  addArticle,
};
