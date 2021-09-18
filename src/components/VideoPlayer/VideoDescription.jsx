import AlbumDisk from './AlbumDisk.jsx'
import styles from './styles.module.css'

export default function VideoDescription ({ albumCover, username, description }) {
  return (
    <footer className={styles.description}>
      <div>
        <strong>
          <a href={`/user/${username}`}>
            @{username}
          </a>
        </strong>
        <p>
          {description}
        </p>
      </div>

      <div>
        <AlbumDisk albumCover={albumCover} />
      </div>

    </footer>
  )
}
