import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Joyo from './components/kanji/Joyo'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='joyo' element={<Joyo/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
