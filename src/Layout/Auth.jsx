/* eslint-disable react/no-children-prop */
import InputField from "../component/InputField";

const Auth = () => {
  return (
    <>
      <form action="submit" method="post">
        <div className="form-control w-full max-w-xs">
            <InputField children="Email" type="email" placeholder="Email" />
            <InputField children="Username" type="text" placeholder="Username" />
            <InputField children="Password" type="password" placeholder="Password" />
        </div>
      </form>
    </>
  );
};

export default Auth;
