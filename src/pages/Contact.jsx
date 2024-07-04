import { Header } from '../components/Header';
import academitImg from '../assets/images/build-contact.jpg';


export const Contact = () => {
  return (
    <>
      <main className='px-8'>
        <Header />
        <div className='flex justify-between'>
          <div className='w-7/10'>
            <div className='border-b-2 border-gray-200'>
              <h1 className='font-bold text-4xl mb-5 text-blue-950'>CONTACTO</h1>
            </div>
            <div className='text-lg'>
              <p className='my-5 '>Trabajamos con el objetivo de preparar, actualizar, potencializar y desarrollar las capacidades de nuestros clientes potenciales y estudiantes, para el mundo laboral a través de nuestros cursos y carreras. Brindamos información, herramientas actualizadas y descentralizadas otorgando acceso educativo de calidad para crear profesionales que satisfactoriamente cumplirán a cabalidad con los más altos estándares o requerimientos que existan en el mercado.</p>
              <p className='my-4'><span className='font-bold text-blue-950'>Email: </span> academit.sa@gmail.com</p>
              <p className='my-4'><span className='font-bold text-blue-950'>Teléfono: </span>+54 9 2342 45-8403 </p>
              <p className='my-4'><span className='font-bold text-blue-950'>Código postal: </span>1704 </p>
              <span className='font-bold text-blue-950'>Oficina en Buenos Aires </span>
              <p className='mb-4'>Florida 556 - Piso 3, Ciudad Autónoma de Buenos Aires </p>
            </div>
          </div>
          <div className='w-3/10 flex flex-col items-center'>
            <button className='mb-4 px-4 py-2 bg-blue-950 hover:text-SoftOrange text-white w-[282px] h-[70px]'>Llamanos al +54 9 2342 45-8403 </button>
            <img src={academitImg} alt="academitImg" className='w-[282px]' />
          </div>
        </div>
      </main>
    </>
  );
};
