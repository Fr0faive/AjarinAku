import { Link, useNavigate } from "react-router-dom";
import InputField from "../component/InputField";
import { Button, ButtonP } from "../component/Button";
import { useState } from "react";
import AuthService from "../services/auth.service";
import { useAuth } from "../services/auth.context";

const SigninPage = () => {
  const [message, setMsg] = useState(null);
  // const { loginP } = useAuth();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const loginResult = await AuthService.loginUser(loginData);
      console.log("Login berhasil:", loginResult);
      localStorage.setItem("Authorization", loginResult.data.token);
      localStorage.setItem("Roles", loginResult.data.roles);
      alert("Login Berhasil");
      // Redirect to the home page or the previous protected route
      navigate("/");
    } catch (error) {
      console.log(loginData);
      console.error("Login gagal:", error);
      setMsg(error.errors);
    }
  };
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  return (
    <>
      <div className="w-full flex flex-wrap h-screen">
        <div className="w-1/3 bg-white flex justify-center items-center h-full">
          <div className="mx-10">
            <h2 className="text-gray-900 text-[62px] text-start font-semibold">
              <span className="text-biruTua">Sign</span>{" "}
              <span className="text-biruMuda">In</span>
            </h2>
            <p className="mt-2 mb-3 text-xl font-normal text-biruTua mr-14 leading-8">
              Welcome to AjarinAku E-Learning Website. Enter your credentials to
              access your account
            </p>
            {message && (
              <div role="alert" className="alert alert-error my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{message}</span>
              </div>
            )}
            <form className="form-control" onSubmit={handleLogin}>
              <InputField
                type="text"
                placeholder="Username"
                margin="mb-3"
                name="username"
                onChange={handleChange}
              />
              <InputField
                type="password"
                placeholder="Password"
                margin="mb-3"
                name="password"
                onChange={handleChange}
              />
              <div className="flex flex-row justify-between items-center gap-4 mb-5">
                <div className="flex flex-row items-center gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-biruTua border-biruTua"
                  />
                  <label className="text-md text-gray-900">Remember me</label>
                </div>
                <Link to="#" className="text-biruTua hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <Button value="Log In" color="primary" type="submit" />
            </form>
            <div className="inline-flex items-center justify-center w-full gap-4">
              <hr className="w-20 2xl:w-36 my-5 bg-gray-200 border-1 dark:bg-gray-700" />
              <span className="text-slate-500">or continue with</span>
              <hr className="w-20 2xl:w-36 my-5 bg-gray-200 border-1 dark:bg-gray-700" />
            </div>
            <div className="flex flex-row gap-4 ml-14">
              <ButtonP value="Google" color="google" />
              <ButtonP value="Facebook" color="facebook" />
            </div>
            <p className="mt-3 text-slate-500">
              Don&apos;t have an account?{" "}
              <Link to={"/register"} className="text-biruTua hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <div className="w-8/12 h-full bg-signInImg bg-cover flex justify-end">
          <div className="mt-12 bg-white h-20 flex items-center max-w-[230px] rounded-l-xl">
            <Link to={"/"}>
              <img src="assets/ajarinaku.svg" alt="" className="pl-7 mr-3" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninPage;
