import styles from './styles.module.css'

export default function AlbumDisk ({ albumCover }) {
  return (
    <div className={styles.album}>
      <img className={styles.albumImage} src={albumCover} />
    </div>
  )
}
