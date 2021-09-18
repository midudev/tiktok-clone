import VideoPlayer from '../VideoPlayer/index.jsx'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: 'ruziotaku',
    description: 'Es hora de llorar amigos… 😭😭😭 #anime #otaku #animeboy #otakuboy #parati #viral #xyzbca #fypシ',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'sonido original - zzerok1',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/81fd9366b0f1841e1e6990492b5c9004~c5_720x720.jpeg?x-expires=1632060000&x-signature=lJ7S3aE3YqHr8WbhkwXNIasqkZo%3D',
    src: 'https://v58.tiktokcdn.com/video/tos/useast2a/tos-useast2a-ve-0068c004/a7614ed8d483417198abfe9ff769942c/?VExpiration=1631996127&VSignature=OA2P8MHkVTTib4lISTgj2Q&a=1233&br=4448&bt=2224&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98CcQeMa4kag3&l=202109181415080101890720223920446A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajVvdjM6Zm5rODMzNzczM0ApaDNnNDw6OTw5NzdoNTtlaWdtc2tecjQwbC1gLS1kMTZzc2IyMWMtXi5iLWJhMV8zLS06Yw%3D%3D&vl=&vr='
  },
  {
    id: 2,
    author: 'ruziotaku',
    description: 'Es hora de llorar amigos… 😭😭😭 #anime #otaku #animeboy #otakuboy #parati #viral #xyzbca #fypシ',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'sonido original - zzerok1',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/81fd9366b0f1841e1e6990492b5c9004~c5_720x720.jpeg?x-expires=1632060000&x-signature=lJ7S3aE3YqHr8WbhkwXNIasqkZo%3D',
    src: 'https://v77.tiktokcdn.com/780f0b1a676c8e078a69658e24098516/61465293/video/tos/useast2a/tos-useast2a-ve-0068c002/6a62fc1f9c4f4daeae343028730a463f/?a=1233&br=3058&bt=1529&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98CcQeMa4kag3&l=202109181456370101890710715A22BEA5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M29zZTQ6Zm11ODMzNzczM0ApNmVmNjZkaWQzNzw1ZmQzZ2dxc2JvcjRfcy5gLS1kMTZzcy4xYTAtNi8yYTZfYmBjNi86Yw%3D%3D&vl=&vr='
  }
]

export default function FeedVideos () {
  return (
    VIDEOS.map(video => {
      return (
        <div key={video.id} className={styles.item}>
          <VideoPlayer {...video} />
        </div>
      )
    })
  )
}
