import { Link } from "react-router-dom";
import InputField from "../component/InputField";
import { Button } from "../component/Button";

const SignupPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
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
          <div className="mx-20">
            <h2 className="text-gray-900 text-[62px] text-start font-semibold">
              <span className="text-biruTua">Sign</span>{" "}
              <span className="text-biruMuda">Up</span>
            </h2>
            <p className="my-6 text-[22px] font-normal text-biruTua mr-14">
              Welcome to AjarinAku E-Learning Website. Register as a member to
              experience
            </p>
            <form className="form-control" onSubmit={handleSubmit}>
              <div className="flex flex-row gap-3 mt-5 my-7">
                <InputField
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                />
                <InputField
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <InputField
                name="email"
                type="email"
                placeholder="Email"
                margin="mb-7"
              />
              <InputField
                name="password"
                type="password"
                placeholder="Password"
                margin="mb-7"
              />
              <div className="flex flex-row items-center gap-4 mb-7">
                <input
                  type="checkbox"
                  className="checkbox checkbox-biruTua"
                  required
                />
                <label className="text-[18px] text-gray-900">
                  I agree to the{" "}
                  <Link to={"#"} className="text-biruTua">
                    Terms of Service
                  </Link>
                </label>
              </div>
              <Button value="Sign Up" color="primary" />
            </form>
            <p className="mt-16">
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
