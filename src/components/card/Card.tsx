import perfil from "../../assets/fotos/profile.png";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <section className="m-auto min-h-100 max-w-100 border border-1 border-neutral-700 rounded-md my-4 p-4">
        <div
          className="flex items-end justify-between"
          style={{ fontFamily: "Space Mono" }}
        >
          <h2 className="text-2xl tracking-wider font-bold">MARCEL</h2>
          <p className="text-sm">Desenvolvedor Web</p>
        </div>

        <img src={perfil} alt="Minha foto" className="rounded-xl my-6" />

        <div className=" flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h2 className="text-neutral-400 text-sm">Especialização:</h2>
            <p>Desenvolvedor Front-end (Web)</p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-neutral-400 text-sm">Localização:</h2>
            <p>Rio de Janeiro, RJ</p>
          </div>
        </div>

        <div className="flex gap-4 my-6">
          <a href="https://www.instagram.com/yomarcelll/" target="_blank">
            <FaInstagram
              size={20}
              className="text-neutral-400 hover:text-purple-600"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/marcel-silva-251851302/"
            target="_blank"
          >
            <FaLinkedinIn
              size={20}
              className="text-neutral-400 hover:text-blue-400"
            />
          </a>
          <a href="https://github.com/marceldasilvaa" target="_blank">
            <FaGithub size={20} className="text-neutral-400 hover:text-white" />
          </a>
        </div>

        <Link
          to="/contatos"
          className="w-full block bg-white text-black text-center text-sm rounded-md py-2 hover:bg-neutral-200"
        >
          Entre em contato
        </Link>
      </section>
    </>
  );
};

export default Card;
