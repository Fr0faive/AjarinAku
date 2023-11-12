/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ButtonP } from "../component/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";

const NavigationBar = () => {
  const navigation = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "Explore",
      href: "/explore",
    },
    {
      id: 3,
      name: "Randomize",
      href: "/randomize",
    },
  ];
  const [changeColor, setChangeColor] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={
          changeColor
            ? "h-24 w-full bg-white flex justify-between items-center"
            : "h-24 w-full bg-white flex justify-between items-center"
        }
      >
        <div className="flex flex-wrap gap-7 lg:gap-14 items-center mx-9">
          <Link to={"/"}>
            <img
              src="assets/ajarinaku.svg"
              alt="ajarinaku"
              className="h-[51px]"
            />
          </Link>
          <div className="hidden lg:flex flex-row items-center">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered input-info w-full max-w-xs bg-white border-biruTua rounded-l-lg rounded-r-none"
            />
            <a href="#">
              <div className="bg-biruTua h-12 w-12 rounded-r-lg max-w-xs flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size="lg"
                  style={{ color: "#fcfcfc" }}
                />
              </div>
            </a>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-wrap gap-5 items-center mx-9">
          {navigation.map((item) => (
            <Link to={item.href} key={item.id} className="text-biruTua text-lg mr-4">
              {item.name}
            </Link>
          ))}
          <ButtonP value="Login" color="primary" link="/login" />
        </div>
        <div className="flex lg:hidden mx-9 items-center gap-5">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between mx-3">
            <a
              href="#"
              className="-m-1.5 p-1.5 flex justify-between items-center "
            >
              <img
                className="h-[51px] w-auto"
                src="/assets/ajarinaku.svg"
                alt="AjarinAku"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    to={item.href}
                    key={item.id}
                    className="text-biruTua -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default NavigationBar;
