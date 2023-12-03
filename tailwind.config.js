/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        biruTua: "#00419E",
        biruMuda: "#20E6E5",
      },
      backgroundImage: {
        signUpImg: "url('/assets/SignupImg.png')",
        signInImg: "url('/assets/SigninImg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
