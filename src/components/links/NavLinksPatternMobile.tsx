import { NavLink } from "react-router-dom";

type NavLink = {
  text: string;
  link: string;
};

const NavLinksPatternMobile = ({ text, link }: NavLink) => {
  return (
    <>
      <div className="my-4">
        <li className="text-2xl">
          <NavLink
            to={link}
            className="text-blue-400 transition-all duration-300 hover:text-blue-300"
          >
            {text}
          </NavLink>
        </li>
      </div>
      <hr className="w-[90%] border-gray-900 border-1 rounded-sm" />
    </>
  );
};

export default NavLinksPatternMobile;
