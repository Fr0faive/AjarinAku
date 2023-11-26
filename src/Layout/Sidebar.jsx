import { Link } from "react-router-dom";
import Logo from "../component/Logo";
import { Button } from "../component/Button";

const Sidebar = (props) => {
  const { children } = props;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        {children}
      </div>
      <div className="drawer-side bg-white">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-10 flex flex-col gap-10  w-80 min-h-full bg-white rounded-lg text-gray-900">
          {/* Sidebar content here */}
          <Link to={"/"}>
            <Logo />
          </Link>
          <div className="flex flex-col gap-10">
            <Link to={"/dashboard"}>Dashboard</Link>
            <Link to={"/dashboard/article"}>Article</Link>
            <Link to={"/dashboard/mentor"}>Mentor</Link>
            <Button
              value={"Logout"}
              color={"[#EFF0F4]"}
              type={"button"}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
    // <div className="h-screen max-w-fit bg-white rounded-lg fixed">
    //   <div className="p-10 flex flex-col gap-10 text-gray-900">
    //     <Link to={"/"}>
    //       <Logo />
    //     </Link>
    //     <div className="flex flex-col gap-10">
    //       <Link to={"/dashboard"}>Dashboard</Link>
    //       <Link to={"/dashboard/article"}>Article</Link>
    //       <Link to={"/dashboard/mentor"}>Mentor</Link>
    //       <Button
    //         value={"Logout"}
    //         color={"[#EFF0F4]"}
    //         type={"button"}
    //         onClick={() => {}}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Sidebar;
