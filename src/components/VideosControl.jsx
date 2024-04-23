import { BsPauseFill, BsFillPlayFill } from "react-icons/bs";
import {MdFullscreen} from 'react-icons/md'

export const VideosControl = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full p-4 flex items-center bg-black bg-opacity-75">
      <div className="flex items-center justify-between gap-3 w-full">
        <button className="text-white focus:outline-none">
          <BsFillPlayFill size={24} />
        </button>

        <div className="flex items-center">
          <span className="text-white mr-2">00:00</span>
          <div className="relative w-64 h-1.5 bg-gray-600 rounded-full mr-2">
            <input
              type="range"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              min="0"
              step={1}
            />
            <div className="asolute top-0 left-0 h-full bg-blue-500 rounded-full"></div>
          </div>
          <span className="text-white mr-2">00:30</span>
        </div>
        <div className="felx items-center">
          <input
            type="range"
            className="w-16 h-1.5 bg-gray-600 rounded-full mr-2"
            min={0}
            max={1}
            step={0.1}
          />
          <select className="bg-black text-white px-2 py-1 rounded-md focus:outline-none">
            <option value="0.5">0.5x</option>
            <option value="1">1x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>
        </div>
        <button className="text-white focus:outline">
            <MdFullscreen size={24}/>
        </button>
      </div>
    </div>
  );
};
