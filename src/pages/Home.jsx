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
      words={['Frontend Developer', 'Software Developer']}
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
       
       
           <div className="container2">
                      <div>
                        <h1 className='intro'>LET ME <span className='highlight'>INTRODUCE </span>MYSELF</h1>
                      </div>

                    <div className="content-right2">
                      <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p><br />
                      <p>I am fluent in classics like C++, Javascript and Go.</p><br />
                      <p>My field of Interest's are building new  Web Technologies and Products and also in areas related to Blockchain.</p><br />
                      <p>Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js</p><br /> 
                    </div>
        <div className="content-left2">
           <img src={avatar} alt='img' />
        </div>
           </div>

    </div>
  )
}

export default Home
