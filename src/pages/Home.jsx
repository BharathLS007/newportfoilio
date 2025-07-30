import React from 'react'
import Navbar from './Navbar'
import work from '../assets/work.svg'
function Home() {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="content-right">
          <h1>Hi There!</h1>
        </div>
 
        <div className="content-left">
           <img src={work} alt='img' />
        </div>

      </div>
    </div>
  )
}

export default Home
