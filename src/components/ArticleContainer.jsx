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
            <Article 
              title={'Enseñanza totalmente en línea'} 
              text={'Contamos que horarios flexibles para que se adapten a la disponibilidad del estudiante.'} 
              img={img1} />
            <Article 
              title={'Asistencia individualizada'} 
              text={'Nuestros profesionales están para resolver todas las dudas e inquietudes que surjan en tu camino educativo.'} 
              img={img2} />
            <Article 
              title={'Apoyo financiero'} 
              text={'Tenemos a tu disposición diversas opciones para que puedas financiar tu educación con nosotros.'} 
              img={img3} />
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
