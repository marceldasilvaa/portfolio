import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );
  };

  return (
    <>
      <section className="max-w-6xl m-auto flex flex-col items-center pt-30 px-8 text-white">
        <div>
          <div className="flex flex-col gap-6">
            <h1
              className="text-2xl font-semibold tracking-wider uppercase md:text-3xl lg:text-4xl"
              style={{ fontFamily: "Space Mono" }}
            >
              CONTATOS
            </h1>
            <p className="max-w-xs text-sm text-neutral-400">
              Caso queira, sinta-se livre para entrar em contato comigo por
              alguns desses meios. Desde já agradeço.
            </p>
          </div>
          <div className="max-w-md flex flex-col gap-20 md:grid md:grid-cols-[70%_30%] lg:grid lg:grid-cols-[70%_30%]">
            <form
              className="mt-10 space-y-8"
              ref={formRef}
              onSubmit={sendEmail}
            >
              <div>
                <label className="block text-sm text-neutral-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-neutral-700 py-2 text-sm
                         focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-neutral-700 py-2 text-sm
                         focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-400 mb-1">
                  Message
                </label>
                <textarea
                  rows={1}
                  required
                  name="message"
                  className="w-full bg-transparent border-b border-neutral-700 py-2 text-sm resize-none
                         focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full block mt-4 bg-white hover:bg-neutral-200 transition px-6 py-2 text-sm text-black cursor-pointer"
              >
                Enviar mensagem
              </button>
            </form>
            <aside className="flex flex-col gap-2 text-neutral-400 md:justify-end lg:justify-end">
              <h3 className="text-xl font-semibold">Fale comigo</h3>
              <p className="text-xs">marcelcodingx@gmail.com</p>
              <div className="flex gap-6 lg:gap-16 md:gap-16 my-6 md:my-0 md:mt-6 lg:mt-6 lg:my-0">
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
                  <FaGithub
                    size={20}
                    className="text-neutral-400 hover:text-white"
                  />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
