import { NavLink, useMatch } from "react-router-dom";

type NavLinkProps = {
  text: string;
  link: string;
};

const NavLinksPattern = ({ text, link }: NavLinkProps) => {
  const match = useMatch(link);

  return (
    <nav className="hidden md:flex md:items-center md:gap-6">
      <div className="flex gap-2">
        <ul
          className={`border-r-1 rounded-md transition-all duration-100
            ${
              match
                ? "border-r-3 border-gray-800"
                : "border-gray-800 hover:border-r-3 hover:border-gray-800"
            }`}
        >
          <li>
            <NavLink
              to={link}
              className={({ isActive }) =>
                `tracking-wide px-6 py-2 transition-colors
                 ${
                   isActive ? "text-cyan-400" : "text-white hover:text-cyan-400"
                 }`
              }
            >
              {text}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavLinksPattern;
