import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGaugeHigh,
  faImage,
  faThumbtack,
  faGear,
  faArrowRightFromBracket,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

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
      <div className="drawer-side bg-[#00419E]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-8 flex flex-col gap-10 w-[200px] min-h-full justify-between rounded-lg text-gray-900">
          {/* Sidebar content here */}
          <div className="flex flex-col gap-10">
            <Link to={"/dashboard"} className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faGaugeHigh}
                style={{ color: "#ffffff" }}
                size="lg"
              />
              <p className="text-white font-normal text-lg">Dashboard</p>
            </Link>
            <Link to={"/dashboard/post"} className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faThumbtack}
                style={{ color: "#ffffff" }}
                size="lg"
              />
              <p className="text-white font-normal text-lg">Post</p>
            </Link>
            <Link to={"/dashboard/media"} className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faImage}
                size="lg"
                style={{ color: "#ffffff" }}
              />
              <p className="text-white font-normal text-lg">Media</p>
            </Link>
            <Link
              to={"/dashboard/kalender"}
              className="flex items-center gap-3"
            >
              <FontAwesomeIcon
                icon={faCalendar}
                size="lg"
                style={{ color: "#ffffff" }}
              />
              <p className="text-white font-normal text-lg">Kalender</p>
            </Link>
          </div>
          <div className="flex flex-col gap-10">
            <Link
              to={"/dashboard/settings"}
              className="flex items-center gap-3"
            >
              <FontAwesomeIcon
                icon={faGear}
                style={{ color: "#ffffff" }}
                size="lg"
              />
              <p className="text-white font-normal text-lg">Settings</p>
            </Link>
            <button className="flex items-center gap-3" onClick={() => {}}>
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                size="lg"
                style={{ color: "#ffffff" }}
              />
              <p className="text-white font-normal text-lg">Logout</p>
            </button>
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
