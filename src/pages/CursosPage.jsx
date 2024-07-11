import { Header } from "../components/Header";
import { Card } from "../components/Card";

import img1 from "../assets/images/js.png";
import img2 from "../assets/images/gitygithub.png";
import img3 from "../assets/images/csharp.png";
import { useFetchCursos } from "../hooks/useFetchCursos";

export const CursosPage = () => {

    const { cursos, isLoading } = useFetchCursos()

    return (
        <main className="px-8 pt-10">
            <Header />
            <div className="mt-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    cursos.map((curso) => (
                        <Card
                            key={curso.idCurso}
                            id={curso.idCurso}
                            title={curso.nombreCurso}
                            text={curso.descripcionCurso}
                            image={curso.fotografiaDelCurso}
                            tags={[`${curso.nivel}`, `${curso.categoria}`]}
                        />
                    ))
                }
            </div>
        </main>
    );
};
