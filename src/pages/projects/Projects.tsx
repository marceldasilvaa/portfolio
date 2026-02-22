import CardProjects from "../../components/cardProjects/CardProjects";
import clinicaVet from "../../assets/projects/clinica-veterinaria.png";
import RickAndMorty from "../../assets/projects/rick-and-morty.jpg";
import toDo from "../../assets/projects/to-do-list.png";

const Projects = () => {
  return (
    <>
      <section className="max-w-6xl px-6 md:grid md:grid-cols-3 gap-4 m-auto block mt-50">
        <CardProjects
          link="https://marceldasilva.github.io/projeto-api-rick-and-morty/"
          img={RickAndMorty}
          title="Site para manipulação de API"
          summary="Projeto focado em manipular uma API do Rick and Morty com objetivo de mostrar quais personagens mais aparecem na série."
          stack="JavaScript"
          focus="API"
        />
        <CardProjects
          link="https://marceldasilva.github.io/projeto-to-do-list/"
          img={toDo}
          title="Site para listar atividades"
          summary="Projeto focado na criação de uma lista de afazeres dinâmicamente para o dia a dia."
          stack="JavaScript"
          focus="CRUD"
        />
        <CardProjects
          link="https://marceldasilva.github.io/veterinaria/"
          img={clinicaVet}
          title="Site para clínica veterinária"
          summary="Projeto focado em marcar uma consulta para seu animal dinâmicamente."
          stack="JavaScript"
          focus="Sistema de agendamento"
        />
      </section>
    </>
  );
};

export default Projects;
