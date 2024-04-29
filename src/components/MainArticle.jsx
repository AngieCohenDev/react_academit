import imagenMobile from "../assets/images/image-web-3-mobile.jpg";
import imagenDesktop from "../assets/images/foto.jpg";

export const MainArticle = () => {
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
            ¡Aprende de programación con expertos!
          </h2>
        </div>
        <div className="flex-1 pt-9">
          <p className="text-[13px] mb-10 px-1 sm:text-[15px]">
            Nos comprometemos a fomentar el crecimiento y la excelencia de
            aquellos que confían en nosotros, contribuyendo así al éxito de
            nuestros estudiantes.
          </p>
          <button className="bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue">
            Inscribirme
          </button>
        </div>
      </div>
    </section>
  );
};
