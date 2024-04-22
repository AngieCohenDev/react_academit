import { ArticleContainer } from "./components/ArticleContainer";
import { Header } from "./components/Header";
import { MainArticle } from "./components/MainArticle";
import { NewContainer } from "./components/NewContainer";

function App() {
  return (
    <main className="px-4 pt-6">
      <Header />
      <div className="sm:flex sm:gap-8 ">
        <MainArticle />
        <NewContainer />
      </div>
      <ArticleContainer />
    </main>
  );
}

export default App;
