import './App.css'
import { lazy, Suspense } from 'react'
import { Route } from 'wouter'

const Home = lazy(() => import('./pages/Home/index.jsx'))
const Upload = lazy(() => import('./pages/Upload/index.jsx'))
const Login = lazy(() => import('./pages/Login/index.jsx'))

function App () {
  return (
    <div className='App'>
      <main>
        <Suspense fallback={<div />}>
          <Route path='/'>
            <Home />
          </Route>

          <Route path='/upload'>
            <Upload />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>
        </Suspense>
      </main>
    </div>
  )
}

export default App
