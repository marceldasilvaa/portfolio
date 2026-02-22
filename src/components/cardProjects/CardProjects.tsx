type Projects = {
  link: string;
  img: string;
  title: string;
  summary: string;
  stack: string;
  focus: string;
};

const CardProjects = ({ link, img, title, summary, stack, focus }: Projects) => {
  return (
    <>
      <section className="text-white">
        <a
          href={link}
          target="_blank"
          className="block m-auto hover:bg-neutral-800 transition-hover duration-300 p-4 max-w-sm min-h-sm rounded-xl"
        >
          <img src={img} alt="imagem" className="rounded-xl w-sm h-80" />
          <div className="flex flex-col mt-2">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-sm text-neutral-300">{summary}</p>
            <p className="text-sm text-neutral-400">
              {stack} • {focus}{" "}
            </p>
          </div>
        </a>
      </section>
    </>
  );
};

export default CardProjects;
