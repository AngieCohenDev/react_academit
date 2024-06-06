import img1 from "../assets/images/inicio_foto_img.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";

import { Article } from "./Article";
import { useFetchArticles } from "../hooks/useFetchArticles";

export const ArticleContainer = () => {
  const { articles, isLoading } = useFetchArticles()

  return (
    <section className="mt-10 md:flex md:flex-wrap md:gap-10">
      {
        isLoading
          ? <>
            <Article title={'Titulo de Articulo #1'} text={'Descripcion de Articulo #1'} img={img1} />
            <Article title={'Titulo de Articulo #2'} text={'Descripcion de Articulo #2'} img={img2} />
            <Article title={'Titulo de Articulo #3'} text={'Descripcion de Articulo #3'} img={img3} />
          </>
          : articles.map((article) => (
            <Article title={article.title} text={article.description} img={img2} />
          ))
      }
      {/* <Article
        img={img1}
        title="Enseñanza totalmente en línea"
        text="Contamos que horarios flexibles para que se adapten a la disponibilidad del estudiante."
      />
      <Article
        img={img2}
        title="Asistencia individualizada"
        text="Nuestros profesionales están para resolver todas las dudas e inquietudes que surjan en tu camino educativo."
      />
      <Article
        img={img3}
        title="Apoyo financiero"
        text="Tenemos a tu disposición diversas opciones para que puedas financiar tu educación con nosotros."
      /> */}
    </section>
  );
};
