import { Link } from "react-router-dom";
import InputField from "../component/InputField";
import { Button } from "../component/Button";
import authService from "../services/auth.service";
import { useState } from "react";

const SignupPage = () => {
  const [message, setMsg] = useState(null);
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    setMsg("");
    e.preventDefault();
    try {
      const signupResult = await authService.registerUser(signupData);
      console.log("Signup berhasil:", signupResult);
      alert("Signup berhasil");
      setMsg("Registrasi berhasil");
    } catch (error) {
      console.error("Signup gagal:", error.errors);
      setMsg(error.errors);
    }
  };
  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="w-full flex flex-wrap h-screen">
        <div className="w-8/12 h-full bg-signUpImg bg-cover">
          <div className="mt-12 bg-white h-20 flex items-center max-w-[230px] rounded-r-xl">
            <Link to={"/"}>
              <img src="assets/ajarinaku.svg" alt="" className="pr-7 ml-4" />
            </Link>
          </div>
        </div>

        <div className="bg-white w-1/3 flex justify-center items-center h-full">
          <div className="mx-10">
            <h2 className="text-gray-900 text-[62px] text-start font-semibold pt-5">
              <span className="text-biruTua">Sign</span>{" "}
              <span className="text-biruMuda">Up</span>
            </h2>
            <p className="my-3 text-lg font-normal text-biruTua mr-14">
              Welcome to AjarinAku E-Learning Website. Register as a member to
              experience
            </p>
            {message && (
              <div role="alert" className="alert alert-error">
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
            <form className="form-control" onSubmit={handleSubmit}>
              <div className="flex flex-row gap-3 mt-5 my-5">
                <InputField
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  onChange={handleChange}
                />
                <InputField
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  onChange={handleChange}
                />
              </div>
              <InputField
                name="username"
                type="text"
                placeholder="Username"
                margin="mb-5"
                onChange={handleChange}
              />
              <InputField
                name="email"
                type="email"
                placeholder="Email"
                margin="mb-5"
                onChange={handleChange}
              />
              <InputField
                name="password"
                type="password"
                placeholder="Password"
                margin="mb-5"
                onChange={handleChange}
              />
              <div className="flex flex-row items-center gap-4 mb-5">
                <input
                  type="checkbox"
                  className="checkbox checkbox-biruTua border-biruTua"
                  required
                />
                <label className="text-md text-gray-900">
                  I agree to the{" "}
                  <Link to={"#"} className="text-biruTua">
                    Terms of Service
                  </Link>
                </label>
              </div>
              <Button
                value="Sign Up"
                color="primary"
                margin="-mb-5"
                type="submit"
              />
            </form>
            <p className="mt-7 text-black">
              Already have an account?{" "}
              <Link to={"/login"} className="text-biruTua">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
