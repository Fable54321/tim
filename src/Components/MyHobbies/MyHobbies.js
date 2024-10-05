import React from 'react'
import styles from './MyHobbies.module.css'
import scrollMobile from '../../../src/images/scroll-up.png'

const MyHobbies = ({ handlePageChange }) => {
  return (
    <div className={styles['my-hobbies-container']}>
      <div className={styles['my-hobbies-container-inner']}>
        <h1>My hobbies</h1>
        <p>By now I would have to consider programming as one of my hobby as I just enjoy digging for some new things to learn.</p>
        <p>
          Aside from that, guitar has been a huge part of life for about 10 years now. I really enjoy the electric more !
          
        </p>
        <p>I have also loved video games for as long as I can remember, as a kid I thought I was gonna be a game developper one day.</p>
        
        <p>I also really enjoy training, but what I have enjoyed the most was the whole methodology behind it. Eating the right foods, training the right way.</p>

        <img onTouchEnd={handlePageChange} className={styles.mobileScroll} src={scrollMobile} alt='an icon telling that you can scroll'/>
      </div>
    </div>
  )
}

export default MyHobbies
