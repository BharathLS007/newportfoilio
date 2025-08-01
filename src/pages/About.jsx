import React from 'react'
import Navbar from './Navbar'
import job from '../assets/job.png'
function About() {
  return (
    <div>
            <Navbar/>
           <div className="container">
            <div className="content-right">
              <h1>Know Who <span className='highlight'>I'M</span></h1><br />
              <p style={{ fontSize: '1.3rem' }}>Hi Everyone,<span className='highlight'> I am Bharath L S </span>from <span className='highlight'>Kanyakumari</span></p>
              <p style={{ fontSize: '1.3rem' }}>I am recently completed my Bacholors in Computer Science and Engineering from </p>
              <p style={{ fontSize: '1.3rem' }}>University College of Engineering,Nagercoil</p><br />
              <p style={{ fontSize: '1.3rem'}}>Apart from Coding,Some Otheractivities that I love to do!</p><br />
              <p style={{ fontSize:'1.3rem',marginLeft:'20px'}}><i className="fa-solid fa-hand-point-right" ></i>Gaming</p><br />
              <p style={{ fontSize:'1.3rem',marginLeft:'20px'}}><i className="fa-solid fa-hand-point-right" ></i>Reading Books</p><br />
              <p style={{ fontSize:'1.3rem',marginLeft:'20px'}}><i className="fa-solid fa-hand-point-right" ></i>Travelling</p><br />

            </div>
            <div className="content-left">
              <img src={job} alt="img" />
            </div>
           </div>
           <div className="container2">
            <div>
              <h1 className='intro'>Professional <span className='highlight'>Skillset</span></h1>
            </div>
            <div className="content-right2">
              <div className="tech-icon col-md-2 col-4">
                
              </div>
            </div>


           </div>
    </div>
  )
}

export default About
