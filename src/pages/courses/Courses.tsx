import CardCourses from "../../components/cardCourses/CardCourses";

const Courses = () => {
  return (
    <>
      <section className="max-w-6xl text-white m-auto px-6 pt-40">
        <h1 className="text-3xl text-center font-semibold">
          Formações e Cursos
        </h1>
        <div className="flex flex-col gap-4 my-6">
          <h2 className="text-xl md:text-2xl">Formação principal</h2>
          <CardCourses
            course="Administração (Técnico)"
            platform="Faetec"
            hour="2020"
            year="2022"
          />
          <h2 className="text-xl md:text-2xl">Cursos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CardCourses
              course="JavaScript básico"
              platform="Curso em vídeo"
              hour="40h"
              year="2024"
            />
            <CardCourses
              course="JavaScript: Maestria"
              platform="Udemy"
              hour="21h"
              year="2024"
            />
            <CardCourses
              course="React: Básico ao Avançado"
              platform="Udemy"
              hour="30h"
              year="2025"
            />
            <CardCourses
              course="HTML & CSS: Módulo 1 - 4"
              platform="Curso em vídeo"
              hour="40h"
              year="2024"
            />
            <CardCourses
              course="Fundamentos de Cybersegurança"
              platform="Coursera"
              hour="10h"
              year="2025"
            />
            <CardCourses
              course="Gestão de risco de segurança"
              platform="Coursera"
              hour="9h"
              year="2025"
            />
            <CardCourses
              course="Segurança de rede"
              platform="Coursera"
              hour="12h"
              year="2025"
            />
            <CardCourses
              course="Ferramenta de tríade"
              platform="Coursera"
              hour="23h"
              year="2026"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
