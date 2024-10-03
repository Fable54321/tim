import React from 'react'
import styles from './AboutMe.module.css'
import scrollMobile from '../images/scroll-up.png'

const AboutMe = () => {
  return (
    <div className= {styles['AboutMe-container']}>
      <div className={styles['about-me-text']}>
          <h1>About Me</h1>
          <p>
            I am a young developper who is really passionate about everything I put myself into.
          </p>
          <p>
            I have developped a serious passion for programming as I was learning it. It only made me eager to learn even more.
          </p>
          <p>
            I'm currently looking for a remote job opportunity in the tech industry. If you're interested in working with me or have any questions, please don't hesitate to reach out.
          </p>
          <img className={styles.mobileScroll} src={scrollMobile} alt='an icon telling that you can scroll'/>
      
          <a href="mailto:timothebissonnette@gmail.com">Contact Me</a> 
          </div>
    </div>
    
  )
}

export default AboutMe
