import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
