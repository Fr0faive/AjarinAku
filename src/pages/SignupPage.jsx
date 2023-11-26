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
          <div className="mx-10">
            <h2 className="text-gray-900 text-[62px] text-start font-semibold pt-5">
              <span className="text-biruTua">Sign</span>{" "}
              <span className="text-biruMuda">Up</span>
            </h2>
            <p className="my-3 text-lg font-normal text-biruTua mr-14">
              Welcome to AjarinAku E-Learning Website. Register as a member to
              experience
            </p>
            <form className="form-control" onSubmit={handleSubmit}>
              <div className="flex flex-row gap-3 mt-5 my-5">
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
                margin="mb-5"
              />
              <InputField
                name="password"
                type="password"
                placeholder="Password"
                margin="mb-5"
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
              <Button value="Sign Up" color="primary" margin="-mb-5"/>
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
