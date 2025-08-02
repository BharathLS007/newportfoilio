import React from 'react'
import Navbar from './Navbar'
import work from '../assets/work.svg'
import avatar from '../assets/avatar.svg'
import { Typewriter } from 'react-simple-typewriter';
function Home() {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="content-right">
          <h1>Hi There!</h1><br />
          <p className='title'>I'm <span className='highlight'>Bharath L S</span><span class="wave">👋</span></p><br />
          <p className='title'>
  <span className='highlight'>
    <Typewriter
      words={['Frontend Developer', 'Software Developer','Game Developer']}
      loop={true}
      cursor
      cursorStyle='|'
      typeSpeed={60}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
  
</p>

        </div>
 
        <div className="content-left">
           <img src={work} alt='img' />
        </div>

      </div>
       <br /><br /><br /><br />
       
           <div className="container2">
                <div>
                  <h1 className='intro'>LET ME <span className='highlight'>INTRODUCE </span>MYSELF</h1>
                </div>
           <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <div className="content-right2">
                <p>I am fluent in classics like <span className='highlight'>React js, Javascript,Mysql and python.</span></p><br />
                <p>My field of Interest's are building new<span className='highlight'>Web Technologies and Products</span> and also in areas related to <span className='highlight'>Game Developement.</span></p><br />
                <p>Whenever possible, I also apply my passion for developing products with <span className='highlight'>React.js and Modern Javascript Library and Frameworks</span></p><br /> 
              </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <div className="content-left2">
                 <img src={avatar} alt='img' />
              </div>
           </div>

           <div className="container3">
            <h1 className='find'>FIND ME ON</h1>
            <p className='free'>
              Feel free to <span className='highlight'>connect</span>with me
            </p>
         <div className="links">
  <ul>
    <li>
      <a href="https://github.com/BharathLS007" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-github"></i>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/bharathls" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-linkedin"></i>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/__bharath.l.s_" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-instagram"></i>
      </a>
    </li>
  </ul>
         </div>

           </div>

           <footer>
            <p>Designed and Developed by Bharath L S</p>
           </footer>

    </div>
  )
}

export default Home
