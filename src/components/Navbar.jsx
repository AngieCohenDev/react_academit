import burgerMenu  from '../assets/images/icon-menu.svg'

export const Navbar = () => {
  return (
    <>
    <ul className="hidden sm:flex text-[18px] sm:w-[538px] sm:place-content-around sm:text-[16px] sm:items-center">
      <li >
        <a href="/">Inicio</a>
      </li>
      <li>
        <a href='video'>Nuestros programas</a>
      </li>
      <li>
        <a href="#">Sobre nosotros</a>
      </li>
      <li>
        <a href="#">Características</a>
      </li>
    </ul>
    <img className='w-10 h-4 cursor-pointer sm:hidden' src={burgerMenu} alt="Menu hamburguesa" />
    </>
  );
};
