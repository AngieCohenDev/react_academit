import { useFetchArticles } from "../hooks/useFetchNewArticle";
import { NewArticle } from "./NewArticle";

export const NewContainer = () => {

  const { articles, isLoading } = useFetchArticles()
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px] ">
      <h1 className="text-SoftOrange text-4xl font-bold">Próximos cursos</h1>
      {
        articles.map((article) => (
          <NewArticle title={article.title} text={article.description} />
        ))
      }
    </aside>
  );
};
