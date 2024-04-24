import { MenuItems } from "./MenuItems";

export const MenuContainer = () => {
  return (
    <main>
      <div className="bg-VeryDarkBlue p-4 rounded-lg">
        <MenuItems title='Clase #1' description='Esta es la descripcion de la clase' />
        <MenuItems title='Clase #2' description='Esta es la descripcion de la clase' />
        <MenuItems title='Clase #3' description='Esta es la descripcion de la clase' />
      </div>
    </main>
  );
};
