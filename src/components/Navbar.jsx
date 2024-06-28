/* eslint-disable react/prop-types */
import burgerMenu  from '../assets/images/icon-menu.svg'

export const Navbar = ({items}) => {
  return (
    <>
    <ul className="hidden sm:flex text-[18px] sm:w-[538px] sm:place-content-around sm:text-[16px] sm:items-center">
      <li >
        <a href={items?.NavegacionItem01}>{items.item01 ? items.item01 : 'Inicio'}</a>
      </li>
      <li>
        <a href={items?.NavegacionItem02}>{items.item02 ? items.item02 : 'Nuestros programas'}</a>
      </li>
      <li>
        <a href={items?.NavegacionItem03}>{items.item03 ? items.item03 : 'Sobre nosotros'}</a>
      </li>
      <li>
        <a href={items?.NavegacionItem04}>{items.item04 ? items.item04 : 'Características'}</a>
      </li>
    </ul>
    <img className='w-10 h-4 cursor-pointer sm:hidden' src={burgerMenu} alt="Menu hamburguesa" />
    </>
  );
};
