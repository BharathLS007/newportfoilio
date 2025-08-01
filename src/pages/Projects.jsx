import React from 'react'
import Navbar from './Navbar'
function Projects() {
  return (
    <div>
      <Navbar/>
        <div className="container">
          <div className='works'>
            <h1 className='intro'>My Recent <span className='highlight'>Works</span></h1>
            <p style={{ fontSize: '1.3rem' }}>Here are a few project i've worked on recently </p>
          </div>

        </div>
    </div>
  )
}

export default Projects
