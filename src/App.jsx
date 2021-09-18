import './App.css'
import { Route } from 'wouter'
import FeedVideos from './components/FeedVideos/index.jsx'
import Upload from './pages/Upload/index.jsx'

function App () {
  return (
    <div className='App'>
      <main>
        <Route path='/'>
          <FeedVideos />
        </Route>

        <Route path='/upload'>
          <Upload />
        </Route>
      </main>
    </div>
  )
}

export default App
