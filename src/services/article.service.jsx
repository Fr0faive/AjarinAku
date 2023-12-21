import axios from "axios";

const API_URL = "http://localhost:3000";
const token = localStorage.getItem("Authorization");

const getArticles = async (callback) => {
  axios
    .get(`${API_URL}/api/articles`)
    .then((res) => {
      callback(res.data.data);
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDetailsArticles = async (id, callback) => {
  axios
    .get(`${API_URL}/api/articles/${id}`)
    .then((res) => {
      callback(res.data.data);
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
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    });
};

const delArticle = async (id) => {
  axios
    .delete(`${API_URL}/api/articles/${id}`, {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const editArticles = async (id, data) => {
  axios
    .put(`${API_URL}/api/articles/${id}`, data, {
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
  delArticle,
  editArticles,
};
