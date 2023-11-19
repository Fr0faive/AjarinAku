import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faM, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Logo from "../component/Logo";

const Footer = () => {
  const dataLink = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About AjarinAku",
      href: "/about",
    },
    {
      name: "Mentors",
      href: "/mentor",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
    {
      name: "Settings",
      href: "/settings",
    },
    {
      name: "Terms & Conditions",
      href: "/terms",
    },
    {
      name: "Privacy Policy",
      href: "/privacy",
    },
  ];
  const dataIcon = [
    {
      name: "facebook",
      icon: faFacebookF,
      href: "https://www.facebook.com/",
    },
    {
      name: "instagram",
      icon: faInstagram,
      href: "https://www.instagram.com/",
    },
    {
      name: "m",
      icon: faM,
      href: "https://mail.google.com/",
    },
  ];

  return (
    <footer className="footer p-10 bg-[#00193D] text-neutral-content flex flex-col justify-center items-center">
      <div className="w-1/2">
        <Link to={"/"}>
          <Logo />
        </Link>
        <hr className="w-full bg-gray-200 border-1 dark:bg-gray-700" />
        <div className="flex flex-row gap-28 mt-4">
          <div className="flex flex-col ml-4">
            <div className="">
              <input
                type="text"
                className="bg-white input input-bordered w-72 rounded-lg"
                placeholder="Search...."
              />
              <button className="relative -mx-7">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
            <div className="grid grid-cols-5 my-4">
              {dataIcon.map((icon) => (
                <a
                  href={icon.href}
                  className="bg-white rounded-full w-8 h-8 flex justify-center items-center"
                >
                  <FontAwesomeIcon
                    icon={icon.icon}
                    size="xl"
                    style={{ color: "#00419E" }}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            {dataLink.slice(0, 4).map((link) => (
              <Link to={link.href} className="text-white mb-2">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            {dataLink.slice(4, 7).map((link) => (
              <Link to={link.href} className="text-white mb-2">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
