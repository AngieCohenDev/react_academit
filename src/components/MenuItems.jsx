import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const MenuItems = ({title, description}) => {
  const [apertura, setApertura] = useState(false);
  return (
    <div className="  text-OffWhite py-[28px] px-[20px]  border-b-2 border-gray-600 last:border-none" >
      <button
        className="flex justify-between w-full items-center"
        onClick={() => setApertura(!apertura)}
      >
        <span className="cursor-pointer hover:text-SoftOrange text-[20px] mb-3 font-bold lg:text-[16px] xl:text-[20px]" >{title}</span>
        <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              apertura && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              apertura && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={` grid overflow-hidden transition-all duration-300 ease-in-out text-white text-sm ${
          apertura ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{description}</div>
      </div>
    </div>
  );
};
