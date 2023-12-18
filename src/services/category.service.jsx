import axios from "axios";

const API_URL = "http://localhost:3000";
const token = localStorage.getItem("Authorization");

const createCategory = async (categoryData) => {
  try {
    // Panggil API untuk login menggunakan Axios
    const response = await axios.post(
      `${API_URL}/api/categories`,
      categoryData,
      {
        headers: {
          Authorization: `${token}`, // Sertakan token otorisasi di sini
          "Content-Type": "application/json",
        },
      }
    );

    // Mengembalikan respons dari server (misalnya, token atau informasi lainnya)
    return response.data;
  } catch (error) {
    // Menghandle kesalahan selama proses login
    throw error.response ? error.response.data : error.message;
  }
};

const getAllCategory = async (callback) => {
  axios
    .get(`${API_URL}/api/categories/all`, {
      headers: {
        Authorization: `${token}`, // Sertakan token otorisasi di sini
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

const getCategory = async (id, token) => {
  try {
    // Panggil API untuk login menggunakan Axios
    const response = await axios.get(`${API_URL}/api/categories/all/${id}`, {
      headers: {
        Authorization: `${token}`, // Sertakan token otorisasi di sini
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    // Menghandle kesalahan selama proses login
    throw error.response ? error.response.data : error.message;
  }
};

export default { createCategory, getAllCategory, getCategory };
