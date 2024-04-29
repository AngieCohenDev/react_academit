import { useCallback, useEffect, useRef, useState } from "react";
import { VideosControl } from "./VideosControl";



// eslint-disable-next-line react/prop-types
export const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  const [isPlaying, setIsplaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => setProgress(video.currentTime);
    const handleDurationChange = () => setDuration(video.duration);

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("durationchange", handleDurationChange);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("durationchange", handleDurationChange);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setIsplaying(true);
    } else {
      video.pause();
      setIsplaying(false);
    }
  }, []);

  const handleVolumenChange = useCallback((e) => {
    const newVolume = e.target.value;

    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  }, []);

  const handlePlaybackrateChange = useCallback((e) => {
    const newPlaybackRate = e.target.value;
    videoRef.current.playbackRate = newPlaybackRate;
    setPlaybackRate(newPlaybackRate);
  }, []);

  const toggleFullscreen = useCallback(() => {
    const video = videoRef.current;

    if (!isFullscreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.mskitRequestFullscreen;
      }
    } else {
      if (document.requestFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitRequestFullscreenElement) {
        document.webkitExitFullscreen();
      } else if (document.msRequestFullscreenElement) {
        document.msExitFullscreen;
      } else if (document.mozRequestFullscreenElement) {
        document.mozCancelFullscreen;
      }
    }

    setIsFullscreen(!isFullscreen);
  }, [isFullscreen]);

  const handleProgressChange = useCallback((e) => {
    const newProgress = e.target.value;
    videoRef.current.currentTime = newProgress;
    setProgress(newProgress);
  }, []);

  return (
    <div className="relative border shadow-2xl shadow-black rounded-md overflow-hidden w-[900px] h-[500px] drop-shadow-sm group">
      <video
        className="w-full h-full object-cover"
        ref={videoRef}
        src={src}
        onClick={togglePlay}
      ></video>
      <VideosControl
        // Estados
        progress={progress}
        duration={duration}
        isPlaying={isPlaying}
        volume={volume}
        playbackRate={playbackRate}
        isFullscreen={isFullscreen}
        // Funciones del Reproductor
        togglePlay={togglePlay}
        handleVolumenChange={handleVolumenChange}
        handlePlaybackrateChange={handlePlaybackrateChange}
        handleProgressChange={handleProgressChange}
        toggleFullscreen={toggleFullscreen}
      />
    </div>
  );
};
