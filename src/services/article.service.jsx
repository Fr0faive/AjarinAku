import axios from "axios";

export const getArticles = async (callback) => {
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

export const getDetailsArticles = async (id, callback) => {
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
