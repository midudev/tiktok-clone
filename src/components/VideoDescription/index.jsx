import AlbumDisk from './AlbumDisk.jsx'
import styles from './styles.module.css'
import SongTicker from '../SongTicker/index.jsx'

export default function VideoDescription ({ albumCover, author, description, songTitle }) {
  return (
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <section>
          <strong>
            <a className={styles.author} href={`/user/${author}`}>
              @{author}
            </a>
          </strong>
          <p className={styles.text}>
            {description}
          </p>
        </section>
        <SongTicker songTitle={songTitle} />
      </div>

      <div>
        <AlbumDisk albumCover={albumCover} />
      </div>

    </footer>
  )
}
