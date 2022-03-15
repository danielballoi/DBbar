import React from 'react'
import danielLogo from '../Daniel-Balloi.png'
import logodev from '../html.css.js.png'

const About = () => {
  return ( <>
    <section className='section about-section'>
      <h2 className='section-title'>about me</h2>
       <img className='daniel-logo' src={danielLogo} alt='daniel-balloi-logo'></img>
      <hr/>
      <p>
        Sono <b>Daniel Balloi </b>, un programmatore front-end ex barman con esperienza internazionale :)
        Ho lavorato a Londra con la Stonegate Company e ora che sono un programmatore ho deciso di aprire 
        un cocktail bar per programmatori:
        <ul>
        <li><b>Free </b> Wi-fi,</li>
        <li> <b>Free </b> Computer Use,</li>
        <li> <b>Domani </b> Free Beer.</li>
        </ul>
        <img className='image-db' src='https://media-exp1.licdn.com/dms/image/C4E03AQF7IbShaPnOLA/profile-displayphoto-shrink_200_200/0/1637539822456?e=1651708800&v=beta&t=dQE__NGIg_BUnSS77jmAPJMUpGlRAWSv90UZWQrSgI4' alt='daniel balloi'/>
      </p>    
      <p>
        Seguimi su <button className='btn'><a className='linkedin-img' href='https://it.linkedin.com/in/danielballoi' >Linkedin</a></button>
        
      </p>
      <hr/>
    </section>
   
    <section className='section about-section'>
     <img src= {logodev} alt='logo-html,css-js' className='logo-dev'/>
     <button className='btn btn-2'> <a href='https://github.com/danielballoi'>IL MIO GIT </a></button>
    <hr/>   
    </section>

  </>
  )
}

export default About
