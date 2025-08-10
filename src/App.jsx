import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import VantaNet from './pages/VantaNet'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
function App() {


  return (
    <>
        <VantaNet/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Projects' element={<Projects />} />
          </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
