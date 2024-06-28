import { Header } from '../components/Header';

export const PageNotFoud404 = () => {
  return (
    <>
      <div className="h-screen font-sans flex flex-col">
        <Header />
        <div className="bg-white flex items-center justify-center flex-grow text-customGray ">
          <h1 className="text-[180px] font-oswald">404</h1>
        </div>
        <div className="bg-customGray flex flex-col items-center justify-center py-7 text-customGrayDark">
          <p className="text-6xl tracking-wider">Lo siento, página no</p>
          <p className="text-6xl tracking-wider">encontrada</p>
          <span className="text-2xl my-4 font-semibold">No se pudo encontrar la página solicitada</span>
          <a href="/"><button className="rounded-full w-[200px] h-[50px] bg-customGrayDark text-white my-4 font-semibold">REGRESAR A INICIO</button>
          </a>
        </div>
      </div>
    </>
  );
}
