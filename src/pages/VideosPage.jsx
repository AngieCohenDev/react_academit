import { VideoPlayer } from "../components/VideoPlayer"
import { Header } from '../components/Header'
import { MenuContainer } from "../components/MenuContainer"
import video from '../assets/videos/prueba2.mp4'
import { useEffect, useState } from "react"
import { useFetchCursos } from "../hooks/useFetchCursos"

export const VideosPage = () => {

  const { cursos, isLoading } = useFetchCursos();
  const [videoUrl, setVideoUrl] = useState(video)

  let curso;
  cursos ? curso = cursos[0]?.video : curso = video

  const handleFileVideo = (video) => {
    setVideoUrl(video)
  }

  useEffect(() => {
    handleFileVideo(curso)
  }, [cursos])

  return (
    <main className="px-8 pt-10">
      <Header />
      <div className="lg:flex lg:gap-8 ">

        <VideoPlayer src={videoUrl} />

        <MenuContainer
          onFileVideo={handleFileVideo}
          cursos={cursos}
          isLoading={isLoading} />
      </div>
    </main>
  )
}
