import { MenuItems } from "./MenuItems";

export const MenuContainer = ({ title, onFileVideo, isLoading, videos }) => {

  return (
    <>
      <div className="bg-VeryDarkBlue p-4 rounded-lg w-[500px] ">
        <div className="text-OffWhite py-[28px] px-[20px]  border-b-2 border-gray-600 last:border-none">
          <span className="cursor-pointer hover:text-SoftOrange text-[20px] mb-3 font-bold lg:text-[16px] xl:text-[20px]" >{title}</span>
        </div>
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
            : videos.map(video => (
              <MenuItems
                key={video.id}
                title={video.title}
                description={video.description}
                video={video.video}
                onFileVideo={onFileVideo} />
            ))
        }
      </div>
    </>
  );
};
