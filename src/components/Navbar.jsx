import burgerMenu  from '../assets/images/icon-menu.svg'

export const Navbar = ({items}) => {
  return (
    <>
    <ul className="hidden sm:flex text-[18px] sm:w-[538px] sm:place-content-around sm:text-[16px] sm:items-center">
      <li >
        <a href="/">{items.item1 ? items.item1 : 'Item#1'}</a>
      </li>
      <li>
        <a href='video'>{items.item2 ? items.item2 : 'Item#2'}</a>
      </li>
      <li>
        <a href="#">{items.item3 ? items.item3 : 'Item#3'}</a>
      </li>
      <li>
        <a href="#">{items.item4 ? items.item4 : 'Item#4'}</a>
      </li>
    </ul>
    <img className='w-10 h-4 cursor-pointer sm:hidden' src={burgerMenu} alt="Menu hamburguesa" />
    </>
  );
};
