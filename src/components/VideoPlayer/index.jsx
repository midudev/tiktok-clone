import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'

const SRC = 'https://v58.tiktokcdn.com/video/tos/useast2a/tos-useast2a-ve-0068c004/a7614ed8d483417198abfe9ff769942c/?VExpiration=1631996127&VSignature=OA2P8MHkVTTib4lISTgj2Q&a=1233&br=4448&bt=2224&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98CcQeMa4kag3&l=202109181415080101890720223920446A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajVvdjM6Zm5rODMzNzczM0ApaDNnNDw6OTw5NzdoNTtlaWdtc2tecjQwbC1gLS1kMTZzc2IyMWMtXi5iLWJhMV8zLS06Yw%3D%3D&vl=&vr='

export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)
  const video = useRef()

  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }

    setPlaying(!playing)
  }

  return (
    <div>
      <video
        className={styles.video}
        src={SRC}
        controls={false}
        ref={video}
      />
      <button className={styles.player} onClick={handlePlay} />
    </div>

  )
}
