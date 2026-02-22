import Card from "../card/Card";
import Button from "../botoes/ButtonPattern";
import ButtonClean from "../botoes/ButtonCleanPattern";

const Hero = () => {
  return (
    <>
      <main className="max-w-6xl flex flex-col md:flex-row md:gap-10 text-white px-6 py-30 md:m-auto">
        <div className=" flex flex-col gap-2">
          <Card />
        </div>
        <div className="max-w-2xl m-auto py-4">
          <h1 className="text-xl text-center md:text-2xl">
            Minha trajetória e tecnologias
          </h1>
          <div className="flex flex-col gap-4 mt-4 text-sm md:text-base">
            <p>
              Comecei a estudar a programação no final de 2024 e até então
              adquiri diversos cursos para aprimorar minhas habilidades na
              linguagem JavaScript.
            </p>
            <p>
              Atualmente tenho experiência tanto com linguagem JavaScript quanto
              com React onde melhorei potencialmente minhas habilidades
              conseguindo organizar todo o código de forma mais limpa.
            </p>
            <p>
              Com tudo isso veio a experiência prática com projetos de
              diferentes cursos que fiz, e os que eu mesmo me desafiei a fazer.
              Onde consegui bastante repertório com os desafios que enfrentei.
            </p>
            <p>
              Em sua demasia, os cursos que fiz foram online. Porém, em
              fevereiro de 2026, me formei no Projeto BFD (Bolsa Futuro
              Digital), uma iniciativa do Ministério da Ciência, Tecnologia e
              Inovação (MCTI), 2025.
            </p>
            <p>
              O curso tinha como objetivo ensinar o básico de Front-end, com a
              conclusão do curso sendo um projeto prático em React para uma
              empresa real onde tivemos que entregar um site fazendo-o em grupo
              e apresentando-o com vídeos curtos.
            </p>
          </div>
          <div className="flex justify-center mt-8 text-sm text-neutral-400">
            <p className="border-r border-neutral-700 px-4">JavaScript</p>
            <p className="border-r border-neutral-700 px-4">React</p>
            <p className="border-r border-neutral-700 px-4">HTML</p>
            <p className="border-r border-neutral-700 px-4">CSS</p>
            <p className="px-4">Tailwind</p>
          </div>
          <div className="flex justify-center gap-4 mt-10">
            <Button text="Veja meus projetos" page="/projetos" />
            <ButtonClean text="Formação & Cursos" page="/formacao" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
