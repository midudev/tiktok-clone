import clsx from 'clsx'
import { useRef } from 'react'
import styles from './styles.module.css'
import VideoPlayerActions from './VideoPlayerActions.jsx'
import VideoDescription from '../VideoDescription/index.jsx'
import useIntersectionVideoPlayer from '../../hooks/useIntersectionVideoPlayer.js'

export default function VideoPlayer ({ avatar, username, albumCover, description, songTitle, src }) {
  const video = useRef(null)
  const { playing, handlePlay } = useIntersectionVideoPlayer({ video })

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing
  })

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        controls={false}
        loop
        onClick={handlePlay}
        ref={video}
        src={src}
      />
      <i className={playerClassName} onClick={handlePlay} />
      <VideoPlayerActions avatar={avatar} username={username} />
      <VideoDescription
        albumCover={albumCover}
        username={username}
        description={description}
        songTitle={songTitle}
      />
    </div>

  )
}
