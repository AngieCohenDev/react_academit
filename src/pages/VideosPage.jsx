import { VideoPlayer } from "../components/VideoPlayer"
import {Header} from '../components/Header'
import { MenuContainer } from "../components/MenuContainer"

import video from '../assets/videos/prueba2.mp4'
import { useState } from "react"
import { useFetchCursos } from "../hooks/useFetchCursos"


export const VideosPage = () => {

  const [videoUrl, setVideoUrl] = useState(video)
  const { cursos, isLoading} = useFetchCursos();

  const handleFileVideo = (video) => {
    setVideoUrl(video)
  }

  return (
    <main className="px-8 pt-10">
    <Header />
    <div className="lg:flex lg:gap-8 ">

        <VideoPlayer src={videoUrl}/>
        
        <MenuContainer 
          onFileVideo={handleFileVideo} 
          cursos={cursos} 
          isLoading={isLoading}/>
    </div>
    </main>
  )
}
