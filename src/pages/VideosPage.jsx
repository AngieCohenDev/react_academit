import { VideoPlayer } from "../components/VideoPlayer"
import {Header} from '../components/Header'

import video from '../assets/videos/video_prueba.mp4'

export const VideosPage = () => {
  return (
    <main className="px-8 pt-10">
    <Header />
    <div>
        <VideoPlayer src={video}/>
    </div>
    </main>
  )
}
