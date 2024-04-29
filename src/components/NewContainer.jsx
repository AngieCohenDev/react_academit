import { NewArticle } from "./NewArticle";

export const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px] ">
      <h1 className="text-SoftOrange text-4xl font-bold">Próximos cursos</h1>
      <NewArticle
        title="Curso de JavaScript"
        text="Aprende el lenguaje líder en el desarrollo web interactivo; una herrmanienta poderosa que impulsa el avance tecnológico."
      />
      <NewArticle
        title="Curso de Diseño UX/UI"
        text="Crea productos digitales atractivos, fáciles de usar y que ofrezcan una experiencia satisfactoria a los usuarios."
      />
      <NewArticle
        title="Curso Full-Stack: Back-end y Front-end"
        text="Amplía tus oportunidades laborales al convertirte en un experto a nivel Front-end y Back-end. ¡Obtén habilidades excepcionales!  "
      />
    </aside>
  );
};
