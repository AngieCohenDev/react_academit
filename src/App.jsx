import { ArticleContainer } from "./components/ArticleContainer";
import { Header } from "./components/Header";
import { MainArticle } from "./components/MainArticle";
import { NewContainer } from "./components/NewContainer";

function App() {
  return (
    <main className="px-8 pt-10">
      <Header />
      <div className="lg:flex lg:gap-8 ">
        <MainArticle />
        <NewContainer />
      </div>
      <ArticleContainer />
    </main>
  );
}

export default App;
