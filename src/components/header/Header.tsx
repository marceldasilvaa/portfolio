import { useState } from "react";
import logo from "../../assets/logo/logo-portfolio.png";
import { Link } from "react-router-dom";
import NavLinksPattern from "../links/NavLinksPattern";
import NavLinksPatternMobile from "../links/NavLinksPatternMobile";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="
      fixed top-0 left-0 z-50
      w-full
      bg-black/30
      backdrop-blur-sm
      p-6
    "
      >
        <div className="max-w-6xl flex justify-between mx-auto items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="max-w-30" />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="relative w-10 h-10 flex items-center justify-center
    z-50 cursor-pointer lg:hidden"
          >
            <span
              className={`absolute h-0.5 w-full bg-white transition-all duration-300
              ${open ? "rotate-45 top-3" : "top-0"}`}
            />
            <span
              className={`absolute h-0.5 w-full bg-white transition-all duration-300
              ${open ? "opacity-0" : "top-3"}`}
            />
            <span
              className={`absolute h-0.5 w-full bg-white transition-all duration-300
              ${open ? "-rotate-45 top-3" : "top-6"}`}
            />
          </button>
          <div className="hidden flex gap-4 lg:flex">
            <NavLinksPattern text="HOME" link="/" />
            <NavLinksPattern text="PROJETOS" link="/projetos" />
            <NavLinksPattern text="FORMAÇÃO" link="/formacao" />
            <NavLinksPattern text="CONTATOS" link="/contatos" />
          </div>
        </div>
      </header>
      <nav
        className={`fixed top-[80px] inset-0 right-0 z-40 h-screen w-full 
        bg-black/80 backdrop-blur-md
        transition-transform duration-500
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col items-end gap-6 p-8">
          <NavLinksPatternMobile text="HOME" link="/" />
          <NavLinksPatternMobile text="PROJETOS" link="/projetos" />
          <NavLinksPatternMobile text="FORMAÇÃO" link="/formacao" />
          <NavLinksPatternMobile text="CONTATOS" link="/contatos" />
        </ul>
      </nav>
    </>
  );
};

export default Header;
