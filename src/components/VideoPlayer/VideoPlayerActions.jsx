import { Heart } from '../Icons/Heart.jsx'
import { Share } from '../Icons/Share.jsx'
import { Comment } from '../Icons/Comment.jsx'

import styles from './styles.module.css'

export default function VideoPlayerActions ({ likes = 2041, comments = 333, shares = 520, hearted = false }) {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart />
        <strong title='like'>{likes}</strong>
      </div>

      <div className={styles.action}>
        <Comment />
        <strong title='comments'>{comments}</strong>
      </div>

      <div className={styles.action}>
        <Share />
        <strong title='shares'>{shares}</strong>
      </div>

    </aside>
  )
}
