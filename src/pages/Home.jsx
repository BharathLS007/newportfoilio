import React from 'react'
import Navbar from './Navbar'
import work from '../assets/work.svg'
function Home() {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="content-right">
          <h1>Hi There!</h1><br />
          <p className='title'>I'm <span className='highlight'>Bharath L S</span></p><br />
          <p className='title'><span className='highlight'>Frontend Developer</span></p>
        </div>
 
        <div className="content-left">
           <img src={work} alt='img' />
        </div>

      </div>
    </div>
  )
}

export default Home
