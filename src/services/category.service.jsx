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

export default { createCategory };
