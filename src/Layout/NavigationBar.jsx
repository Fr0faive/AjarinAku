import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "../component/Button";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="h-24 w-full bg-white flex justify-between items-center">
        <div className="flex flex-wrap gap-7 lg:gap-14 items-center mx-9">
          <Link to={"/"}><img
            src="assets/ajarinaku.svg"
            alt="ajarinaku"
            className="h-[51px]"
          /></Link>
          <div className="flex flex-row items-center">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered input-info w-full max-w-xs bg-white border-biruTua rounded-l-lg rounded-r-none"
            />
            <div className="bg-biruTua h-12 w-12 rounded-r-lg max-w-xs flex justify-center items-center">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="lg"
                style={{ color: "#fcfcfc" }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 items-center mx-9">
          <Link to="#" className="text-biruTua text-lg mr-4">
            Randomize
          </Link>
          <Link to="#" className="text-biruTua text-lg mr-4">
            Explore
          </Link>
          <Button children="Login" color="primary" />
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
