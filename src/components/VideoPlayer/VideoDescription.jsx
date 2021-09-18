import AlbumDisk from './AlbumDisk.jsx'
import styles from './styles.module.css'

export default function VideoDescription ({ albumCover, author, description }) {
  return (
    <footer className={styles.description}>
      <div>
        <strong>
          <a href={`/user/${author}`}>
            @{author}
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
