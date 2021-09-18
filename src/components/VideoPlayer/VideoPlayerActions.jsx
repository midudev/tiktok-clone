import { Heart } from '../Icons/Heart.jsx'
import styles from './styles.module.css'

export default function VideoPlayerActions () {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart />
      </div>

      <div className={styles.action}>
        <Heart />
      </div>

      <div className={styles.action}>
        <Heart />
      </div>

    </aside>
  )
}
