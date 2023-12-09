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
import { useState } from "react";

const Sidebar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-biruTua text-white h-auto w-48 flex flex-col justify-between">
      <ul className="overflow-y-auto py-4 flex flex-col gap-2">
        <li className="p-4 flex items-center">
          <FontAwesomeIcon icon={faGaugeHigh} className="mr-2" size="xl" />
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="p-4  active:bg-biruDark hover:bg-biruDark">
          <div className="flex items-center gap-2" onClick={toggleDropdown}>
            <FontAwesomeIcon
              icon={faThumbtack}
              className="ml-1 mr-1"
              size="xl"
            />
            <span>Post</span>
          </div>
          {isDropdownOpen && (
            <ul className="pt-4">
              <li className="py-2 ">
                <Link to="/dashboard/all-post">Semua Pos</Link>
              </li>
              <li className="py-2 ">
                <Link to="/dashboard/add-post">Tambah Pos Baru</Link>
              </li>
              <li className="py-2 ">
                <Link to="/dashboard/category-post">Kategori</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="p-4 flex items-center">
          <FontAwesomeIcon icon={faImage} className="mr-2" size="xl" />
          <Link to="/dashboard">Media</Link>
        </li>
        <li className="p-4 flex items-center">
          <FontAwesomeIcon icon={faCalendar} className="mr-2" size="xl" />
          <Link to="/dashboard">Calender</Link>
        </li>
      </ul>
      <ul className="overflow-y-auto">
        <li className="p-4">
          <FontAwesomeIcon icon={faGear} className="mr-2" />
          <Link to="/settings">Settings</Link>
        </li>
        <li className="p-4">
          <FontAwesomeIcon icon={faArrowRightFromBracket} className="mr-2" />
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
