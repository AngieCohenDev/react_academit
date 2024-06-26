import img1 from "../assets/images/inicio_foto_img.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import { Article } from "./Article";

import { useFetchArticles } from "../hooks/useFetchArticles";

export const ArticleContainer = () => {
  const { articles, isLoading } = useFetchArticles();

  return (
    <section className="mt-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
        isLoading
          ? <>
            <Article
              title={'Enseñanza totalmente en línea'}
              text={'Contamos con horarios flexibles para que se adapten a la disponibilidad del estudiante.'}
              img={img1}
              link={'/'} />
            <Article
              title={'Asistencia individualizada'}
              text={'Nuestros profesionales están para resolver todas las dudas e inquietudes que surjan en tu camino educativo.'}
              img={img2} 
              link={'/'} />
            <Article
              title={'Apoyo financiero'}
              text={'Tenemos a tu disposición diversas opciones para que puedas financiar tu educación con nosotros.'}
              img={img3} 
              link={'/'} />
          </>
          : articles.map((article) => (
            <Article
              key={article.id} // Asegúrate de tener una clave única para cada artículo
              title={article.title}
              text={article.description}
              img={article.imageUrl}
              link={article.NavegacionTitle}
            />
          ))
      }
    </section>
  );
};
