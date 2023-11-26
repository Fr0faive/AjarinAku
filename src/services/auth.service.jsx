import axios from "axios";

const API_URL = "https://fakestoreapi.com"; // Gantilah dengan URL API sesuai kebutuhan

const loginUser = async (loginData) => {
  try {
    // Panggil API untuk login menggunakan Axios
    const response = await axios.post(`${API_URL}/auth/login`, loginData);

    // Mengembalikan respons dari server (misalnya, token atau informasi lainnya)
    return response.data;
  } catch (error) {
    // Menghandle kesalahan selama proses login
    throw error.response ? error.response.data : error.message;
  }
};

const logoutUser = async () => {
  // Panggil API untuk logout menggunakan Axios
  const response = await axios.delete(`${API_URL}/auth/logout`);
};

export default { loginUser };
