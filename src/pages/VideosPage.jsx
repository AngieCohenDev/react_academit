import { VideoPlayer } from "../components/VideoPlayer"
import { Header } from '../components/Header'
import { MenuContainer } from "../components/MenuContainer"
import video from '../assets/videos/prueba2.mp4'
import { useEffect, useState } from "react"
import { useFetchVideos } from "../hooks/useFetchCursos"
import { useLocation, useNavigate } from "react-router-dom"

export const VideosPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  console.log(state);
  !state && navigate('/cursos') 

  const { videos, isLoading } = useFetchVideos(state.id);
  const [videoUrl, setVideoUrl] = useState(video)

  let vide;
  videos ? vide = videos[0]?.rutaVideo : vide = video

  const handleFileVideo = (video) => {
    setVideoUrl(video)
  }

  useEffect(() => {
    handleFileVideo(vide)
  }, [vide])

  return (
    <main className="px-8 pt-10">
      <Header />
      <div className="lg:flex lg:gap-8 ">

        <VideoPlayer src={videoUrl} />

        <MenuContainer
          title={state.title}
          onFileVideo={handleFileVideo}
          videos={videos}
          isLoading={isLoading} />
      </div>
    </main>
  )
}
