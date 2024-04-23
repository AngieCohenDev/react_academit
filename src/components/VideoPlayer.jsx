import { VideosControl } from "./VideosControl";

// eslint-disable-next-line react/prop-types
export const VideoPlayer = ({src}) => {
  return(
    <div className="relative border shadow-2xl shadow-black rounded-md overflow-hidden w-[900px] h-[500px] drop-shadow-sm group">
        <video className="w-full h-full object-cover"  src={src}></video>
        <VideosControl/>
    </div>
  )
};
