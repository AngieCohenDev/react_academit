import { MenuItems } from "./MenuItems";

export const MenuContainer = ({ onFileVideo, isLoading, cursos }) => {

  return (
    <div className="bg-VeryDarkBlue p-4 rounded-lg w-[500px] ">
      <MenuItems
        title="Metodos de JavaScript"
        description="Esta es la descripcion de la clase"
      />
      {
        isLoading
          ? <>
            
            <MenuItems
              title="Clase #2"
              description="Esta es la descripcion de la clase"
            />
            <MenuItems
              title="Clase #3"
              description="Esta es la descripcion de la clase"
            />
            <MenuItems
              title="Clase #3"
              description="Esta es la descripcion de la clase"
            />
            <MenuItems
              title="Clase #3"
              description="Esta es la descripcion de la clase"
            />
          </>
          : cursos.map(curso => (
            <MenuItems 
              title={curso.title} 
              description={curso.description} 
              video={curso.video} 
              onFileVideo={onFileVideo}/>
          ))
      }
    </div>
  );
};
