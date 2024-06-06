import { useFetchNewArticles } from "../hooks/useFetchNewArticle";
import { NewArticle } from "./NewArticle";

export const NewContainer = () => {

  const { newArticles, isLoading } = useFetchNewArticles()
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px] ">
      <h1 className="text-SoftOrange text-4xl font-bold">Próximos cursos</h1>
      {
        isLoading
          ?
          <>
            <NewArticle title={'Name of New Article'} text={'Description of New Article'} />
            <NewArticle title={'Name of New Article'} text={'Description of New Article'} />
            <NewArticle title={'Name of New Article'} text={'Description of New Article'} />
          </>
          : newArticles.map((article) => (
            <NewArticle title={article.articletitle} text={article.description} />
          ))
      }
    </aside>
  );
};
