import axios from "axios";

const API_URL = "http://localhost:3000";

const createCategory = async (categoryData, token) => {
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

const getAllCategory = async (token) => {
  try {
    // Panggil API untuk login menggunakan Axios
    const response = await axios.get(`${API_URL}/api/categories/all`, {
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
