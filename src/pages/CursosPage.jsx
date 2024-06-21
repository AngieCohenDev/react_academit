import { Article } from "../components/Article";
import { useFetchCursos } from "../hooks/useFetchCursos";

import img1 from "../assets/images/inicio_foto_img.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import { useState } from "react";
import { Header } from "../components/Header";

export const CursosPage = () => {
    const { cursos, isLoading } = useFetchCursos();
    const [cursoss, setCursos] = useState([])

    return (
        <main className="px-8 pt-10">
            <Header />
            <div className="mt-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Article
                    title={'Enseñanza totalmente en línea'}
                    text={'Contamos con horarios flexibles para que se adapten a la disponibilidad del estudiante.'}
                    img={img1} />
                <Article
                    title={'Asistencia individualizada'}
                    text={'Nuestros profesionales están para resolver todas las dudas e inquietudes que surjan en tu camino educativo.'}
                    img={img2} />
                <Article
                    title={'Apoyo financiero'}
                    text={'Tenemos a tu disposición diversas opciones para que puedas financiar tu educación con nosotros.'}
                    img={img3} />
            </div>
        </main>
    )
}
