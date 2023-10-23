import { Link } from "react-router-dom";
import InputField from "../component/InputField";
import { Button } from "../component/Button";

const SigninPage = () => {
  return (
    <>
      <div className="w-full flex flex-wrap h-screen">
        <div className="w-1/3 bg-white flex justify-center items-center h-screen">
          <div className="mx-20">
            <h2 className="text-gray-900 text-[62px] text-start font-semibold">
              <span className="text-biruTua">Sign</span>{" "}
              <span className="text-biruMuda">In</span>
            </h2>
            <p className="my-6 text-[22px] font-normal text-biruTua mr-14 leading-8">
              Welcome to AjarinAku E-Learning Website. Enter your credentials to
              access your account
            </p>
            <form action="submit" method="post" className="form-control">
              <InputField type="email" placeholder="Email" margin="mb-7" />
              <InputField
                type="password"
                placeholder="Password"
                margin="mb-7"
              />
              <div className="flex flex-row justify-between items-center gap-4 mb-7">
                <div className="flex flex-row items-center gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-biruTua"
                  />
                  <label className="text-[18px] text-gray-900">
                    Remember me
                  </label>
                </div>
                <Link to="#" className="text-biruTua">
                  Forgot Password?
                </Link>
              </div>
              <Button children="Log In" color="primary" />
            </form>
            <div className="inline-flex items-center justify-center w-full gap-4">
              <hr className="w-20 2xl:w-36 my-8 bg-gray-200 border-1 dark:bg-gray-700" />
              <span>or continue with</span>
              <hr className="w-20 2xl:w-36 my-8 bg-gray-200 border-1 dark:bg-gray-700" />
            </div>
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
