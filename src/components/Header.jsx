import { Navbar } from './Navbar';

import logo from '../assets/images/Academit.png'
import { useFetchItems } from '../hooks/useFetchItems';

export const Header = () => {

  const { items, isLoading } = useFetchItems()

  return (
    <header className=' flex place-content-between items-center mb-8'>
      {
        isLoading
        ? <a href="/" ><img src={logo} alt="Logo" style={{display: 'inline-block', width: '100px', cursor: 'pointer'}} /></a>
        : <a href="/" ><img src={items.logo} alt="Logo" style={{display: 'inline-block', width: '100px', cursor: 'pointer'}} /></a>
       
      }
      <Navbar items={items} />
    </header>
  );
};
