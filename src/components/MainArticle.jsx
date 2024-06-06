import imagenMobile from "../assets/images/image-web-3-mobile.jpg";
import imagenDesktop from "../assets/images/foto.jpg";
import { useFetchMainArticles } from "../hooks/useFetchMainArticle";

export const MainArticle = () => {
  const { mainArticle, isLoading } = useFetchMainArticles()
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="mb-12">
      <picture>
        <source media="(max-width: 640px)" srcSet={imagenMobile} />
        <source media="(min-width: 641px)" srcSet={imagenDesktop} />
        <img src={imagenMobile} alt="Articulo principal imagen" />
      </picture>
      <div className="sm:flex">
        <div className="flex-1 py-6">
          <h2 className="text-[40px] font-bold sm:text-[58px] leading-none ">
            {
              isLoading
                ? '¡Aprende de programación con expertos!'
                : mainArticle[0]?.title
            }
          </h2>
        </div>
        <div className="flex-1 pt-9">
          <p className="text-[13px] mb-10 px-1 sm:text-[15px]">
            {
              isLoading
                ? 'Nos comprometemos a fomentar el crecimiento y la excelencia de aquellos que confían en nosotros, contribuyendo así al éxito de nuestros estudiantes.'
                : mainArticle[0]?.description
            }
          </p>
          <button className="bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue">
            {
              isLoading
                ? 'Inscribirse'
                : mainArticle[0]?.textButton
            }
          </button>
        </div>
      </div>
    </section>
  );
};
