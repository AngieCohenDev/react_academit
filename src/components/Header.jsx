import { Navbar } from './Navbar';

import logo from '../assets/images/Academit.png'
import { useFetchItems } from '../hooks/useFetchItems';

export const Header = () => {

  const { items, isLoading } = useFetchItems()
  
  console.log(items);
  return (
    <header className=' flex place-content-between items-center mb-8'>
      {
        isLoading
        ? <img src={logo} alt="Logo" style={{display: 'inline-block', width: '100px'}} />
        : <img src={items.logo} alt="Logo" style={{display: 'inline-block', width: '100px'}} />
       
      }
      <Navbar items={items} />
    </header>
  );
};
