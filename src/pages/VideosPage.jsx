import { VideoPlayer } from "../components/VideoPlayer"

import video from '../assets/videos/video_prueba.mp4'

export const VideosPage = () => {
  return (
    <div>
        <VideoPlayer src={video}/>
    </div>
  )
}
