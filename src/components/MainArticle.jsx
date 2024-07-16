import imagenMobile from "../assets/images/image-web-3-mobile.jpg";
import imagenDesktop from "../assets/images/foto.jpg";
import { useFetchMainArticles } from "../hooks/useFetchMainArticle";

export const MainArticle = () => {

  const { mainArticle, isLoading } = useFetchMainArticles()

  return (
    <section className="mb-12 w-[70%]">
      <picture>
        <source media="(max-width: 640px)" srcSet={isLoading ? imagenMobile : mainArticle.rutaImagen} />
        <source media="(min-width: 641px)" srcSet={isLoading ? imagenDesktop : mainArticle.rutaImagen} />
        <img
          src={isLoading ? imagenDesktop : mainArticle?.rutaImagen}
          alt="Articulo principal imagen" style={{ display: 'inline-block', height: "420px", width: "100%", borderRadius: "5px" }} />
      </picture>
      <div className="sm:flex">
        <div className="flex-1 py-6">
          <h2 className="text-[40px] font-bold sm:text-[58px] leading-none ">
            {
              (isLoading)
                ? '¡Aprende de programación con expertos!'
                : (mainArticle?.titulo.length !== 0 ? mainArticle.titulo : '¡Aprende de programación con expertos!')
            }
          </h2>
        </div>
        <div className="flex-1 pt-9">
          <p className="text-[13px] mb-10 px-1 sm:text-[15px]">
            {
              isLoading
                ? 'Nos comprometemos a fomentar el crecimiento y la excelencia de aquellos que confían en nosotros, contribuyendo así al éxito de nuestros estudiantes.'
                : (mainArticle?.descripcion.length !== 0 ? mainArticle.descripcion : 'Nos comprometemos a fomentar el crecimiento y la excelencia de aquellos que confían en nosotros, contribuyendo así al éxito de nuestros estudiantes.')
            }
          </p>
          <a href={isLoading ? "/" : mainArticle?.navegacionBoton}><button className="bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue">
            {
              isLoading
                ? 'Inscribirse'
                : (mainArticle?.textoBoton.length !== 0 ? mainArticle?.textoBoton : 'Inscribirse')
            }
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};
