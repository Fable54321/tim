import React from 'react'
import styles from './MyExperience.module.css'
import scrollMobile from '../../../src/images/scroll-up.png'

const MyExperiences = ({ handlePageChange }) => {
  return (
    <div className= {styles['experiences-container']}>
      <div className= {styles['experiences-inner']}>
        <h1>My experiences</h1>
        <p>My real job experiences are pretty simple, I have been working in customer service, more precisely in a grocery store for the past 9 years.
            Although, on paper, there isn't any link with development, you would be suprised the amount of useful <span className={styles.span} >qualities</span> I have developped working there.
            I think <span className={styles.span}>one that applies well to web development is the ability to understand the problem before trying to solve it</span>. For a hundred customers 
            with the same problem there will be roughly 100 different ways the problem will be presented to you.
        </p>

        <p>Aside from that, I am always looking to work on some new challenging projects. My most serious one is a website I am building for a company
            called Alpine Aluminium. It will be a much needed improvement compare to the one they currently have. 
        </p>
          <div className={styles.footer}>
            <img onClick={handlePageChange} src={scrollMobile} alt='an icon schowing that you can swipe'/>
          </div>
      </div>
    </div>
  )
}

export default MyExperiences
