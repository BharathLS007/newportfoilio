import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import VantaNet from './pages/VantaNet'
function App() {


  return (
    <>
        <VantaNet/>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
