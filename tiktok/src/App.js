import React, { useEffect, useState } from 'react';
import './App.css';
import axios from './axios'
import Video from './Video';

function App() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('v2/posts')
      setVideos(response.data)

      return response;
    }
    fetchPosts()
  }, [])

  console.log(videos)
  return (
    <div className="app">
      <div className="app__videos">(
        {videos.map(({ _id, url, channel, description, song, likes, messages, shares }) => (
        < Video
          key={_id}
          url={url}
          channel={channel}
          description={description}
          likes={likes}
          messages={messages}
          shares={shares}
          song={song}
        />
      ))})
      </div>
    </div>
  )
}

export default App;
