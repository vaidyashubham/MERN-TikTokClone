import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video({url, channel, song, likes, messages, shares, description}) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src={url} />
      <VideoFooter description={description} channel={channel} song={song}/>
      <VideoSidebar likes={likes} shares={shares} messages={messages}/>
    </div>
  )
}

export default Video 
