import { VideoPlayer } from "../components/VideoPlayer"
import {Header} from '../components/Header'
import { MenuContainer } from "../components/MenuContainer"

import video from '../assets/videos/prueba2.mp4'


export const VideosPage = () => {
  return (
    <main className="px-8 pt-10">
    <Header />
    <div className="lg:flex lg:gap-8 ">
        <VideoPlayer src={video}/>
        <MenuContainer />
    </div>
    </main>
  )
}
