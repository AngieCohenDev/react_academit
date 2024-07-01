import { Header } from "../components/Header";
import { Curso } from "../components/Curso";

import img1 from "../assets/images/js.png";
import img2 from "../assets/images/gitygithub.png";
import img3 from "../assets/images/csharp.png";

export const CursosPage = () => {

    return (
        <main className="px-8 pt-10">
            <Header />
            <div className="mt-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Curso
                    key={1}
                    title={'JavaScript de 0 a Experto'}
                    text={'Curso de JavaScript desde las bases hasta ser un experto.'}
                    image={img1}
                    link={'/video'} />  
                <Curso
                    key={2}
                    title={'Git y GitHub para principiantes'}
                    text={'Curso de Git y GitHub desde las bases.'}
                    image={img2}
                    link={'#'} />
                <Curso
                    key={3}
                    title={'C# Curso de 0 a Experto'}
                    text={'Curso de C# desde las bases hasta ser un experto.'}
                    image={img3}
                    link={'#'} />
            </div>
        </main>
    )
}
