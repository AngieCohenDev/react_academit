import { useFetchCursos } from '../hooks/useFetchCursos'
import { Header } from './Header';
import { Card } from './Card'

export const Cursos = () => {

    const { cursos, isLoading } = useFetchCursos()

    return (
        <main className="px-8 pt-10">
            <div className="mt-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    cursos.map((curso) => (
                        <Card
                            key={curso.idCurso}
                            id={curso.idCurso}
                            title={curso.nombreCurso}
                            text={curso.descripcionCurso}
                            image={curso.rutaFotografiaCurso}
                            tags={[`${curso.nivel}`, `${curso.categoria}`]}
                        />
                    ))
                }
            </div>
        </main>
    );
}
