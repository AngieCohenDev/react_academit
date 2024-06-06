import { Navbar } from './Navbar';

import logo from '../assets/images/logo.svg'
import { useFetchItems } from '../hooks/useFetchItems';

export const Header = () => {

  const { items, isLoading } = useFetchItems()
  return (
    <header className=' flex place-content-between items-center mb-8'>
      {
        isLoading
        ? <img src={logo} alt="Logo" />
        : <img src={items.logo} alt="Logo"/>
       
      }
      <Navbar items={items} />
    </header>
  );
};
