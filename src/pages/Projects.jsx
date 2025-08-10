import React from 'react'
import Navbar from './Navbar'
import bot from '../assets/bot.png'
import movie from '../assets/movie.png'
import game from '../assets/game.jpg'
import portfoilioold from '../assets/portfoilioold.png'
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
<div className="project-container">
  <div className="project"><br /><br />
    <img src={bot} alt="projectimg" />
    <h2>Chatbot:</h2>
    <p>
      medical diagnostics chatbot based on symptoms  
      built with Flask, json,html,css and javascript. Features include predicting the disease based on the symptoms. Given by the user.
    </p>
    <div className="project-buttons">
      <a href="https://github.com/BharathLS007/bot">GitHub</a>
      <a href="#">Demo</a>
    </div>
  </div>
    <div className="project"><br /><br /><br /><br />
    <img src={movie} alt="projectimg" /><br /><br /><br /><br /><br />
    <h2>Movie website:</h2>
    <p>
      Movie Website   
      built with Reactjs,html,css and javascript. 
      The main goal of this project is to showcase how I learned React.js from scratch and demonstrate my dedication to completing the tasks I choose to work on.
    </p><br /><br /><br /><br />
    <div className="project-buttons">
      <a href="https://github.com/BharathLS007/movies">GitHub</a>
      <a href="#">Demo</a>
    </div>
    
  </div>
    <div className="project"><br /><br /><br /><br /><br />
    <img src={portfoilioold} alt="projectimg" /><br /><br /><br /><br /><br />
    <h2>Portfolio:</h2>
    <p>
      Portfolio Website 
      built with html,css and javascript. This was my first Portfolio website. I created during my first internship.
    </p><br /><br /><br /><br /><br />
    <div className="project-buttons">
      <a href="https://github.com/BharathLS007/Portfolio">GitHub</a>
      <a href="https://bharathls007.github.io/Portfolio/">Demo</a>
    </div>
  </div>
      <div className="project"><br /><br /><br /><br /><br />
    <img src={game} alt="projectimg" /><br /><br /><br /><br /><br />
    <h2>Survival Game </h2>
    <p>
This game was developed using Unity and standard assets from the Unity Asset Store. It is a sample project created during a hackathon conducted at our college. 
As a base game, it has potential for future updates, including the addition of various combat actions
    </p><br /><br /><br /><br /><br />
    <div className="project-buttons">
      <a href="https://github.com/BharathLS007/ellen-game">GitHub</a>
      
    </div>
  </div>
</div>
          <footer>
            <p>Designed and Developed by Bharath L S</p>
           </footer>
    </div>
  )
}

export default Projects
