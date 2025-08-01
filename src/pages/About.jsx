import React from 'react'
import Navbar from './Navbar'
import job from '../assets/job.png'
import js from '../assets/js.png'
import atom from '../assets/atom.png'
import python from '../assets/python.png'
import mysql from '../assets/mysql.png'
import django from '../assets/django.png'
import flask from '../assets/flask.png'
import ubantu from '../assets/ubantu.png'
import vs from '../assets/vs.png'
import unity from '../assets/unity.png'
import windows from '../assets/windows.png'
import github from '../assets/github.png'
import git from '../assets/git.png'

function About() {
  return (
    <div>
            <Navbar/>
           <div className="container">
            <div className="content-right">
              <h1>Know Who <span className='highlight'>I'M</span></h1><br />
              <p style={{ fontSize: '1.3rem' }}>Hi Everyone,<span className='highlight'> I am Bharath L S </span>from <span className='highlight'>Kanyakumari</span></p>
              <p style={{ fontSize: '1.3rem' }}>I am recently completed my Bacholors in Computer Science  </p>
              <p style={{ fontSize: '1.3rem' }}>and Engineering from University College of Engineering,Nagercoil</p><br />
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
              <div className="tech-icon">
           <div className="card">
             <img src={js} alt="skillsicon" className="card-icon" />
           </div>
           <div className="card">
             <img src={atom} alt="skillsicon" className="card-icon" />
           </div>
            <div className="card">
             <img src={python} alt="skillsicon" className="card-icon" />
           </div>
           <div className="card">
             <img src={mysql} alt="skillsicon" className="card-icon" />
           </div>
           <div className="card">
             <img src={django} alt="skillsicon" className="card-icon" />
           </div>
           <div className="card">
             <img src={flask} alt="skillsicon" className="card-icon" />
           </div>
              </div>
            </div>
           </div>

        <div className="container2">
            <div>
              <h1 className='intro'> <span className='highlight'>Tool</span> I use</h1>
            </div>
            <div className="content-right2">
              <div className="tech-icon">
           <div className="card">
             <img src={ubantu} alt="skillsicon" className="card-icon" />
           </div>
           <div className="card">
             <img src={unity} alt="skillsicon" className="card-icon" />
           </div>
            <div className="card">
             <img src={vs} alt="skillsicon" className="card-icon" />
           </div>
            <div className="card">
             <img src={windows} alt="skillsicon" className="card-icon" />
           </div>
            <div className="card">
             <img src={github} alt="skillsicon" className="card-icon" />
           </div>
            <div className="card">
             <img src={git} alt="skillsicon" className="card-icon" />
           </div>
              </div>
            </div>
           </div>

          <footer>
            <p>Designed and Developed by Bharath L S</p>
           </footer>
    </div>
  )
}

export default About
