
import styles from './MySkills.module.css'
import reactLogo from '../../../src/images/react.png'
import html from '../../../src/images/html.png'
import css from '../../../src/images/css.png'
import javascript from '../../../src/images/javascript.png'
import redux from '../../../src/images/redux.png'
import scrollMobile from '../../../src/images/scroll-up.png'
import { Link } from 'react-router-dom'
import scrollTo from '../../../src/Functions/scrollTo'


const MySkills = ({ handlePageChange }) => {




  return (
    <div className={styles['my-skills-container']}>
        <div className={styles.title}>
        <h1>My skills</h1>
        </div>
      <div className={styles['my-skills-img-container']}>
        <img src={html} alt='the html 5 logo' />
        <img src={css} alt='the css 3 logo' />
        <img src={javascript} alt='the javascript logo' />
        <img src={reactLogo} alt='the react logo' />
        <img src={redux} alt='the redux logo' />
      </div>
      <div className={styles['my-skills-text-container']}>
        <p>So far in my learning journey, I have gotten comfortable working with a few tools already.</p>
        <p>The main ones so far have been javascript, wich made me fall in love with programming.</p>
        <p>HTML and CSS wich I've learned to use hand in hand to make websites look awesome but also intuitive.</p>
        <p>I have learned react, but also and mainly experienced with it a lot as as soon as I've started using it, it's been behind almost every of my project.</p>
        <p>I also understand and can use redux, although I haven't had the chance to work on as many projects using it.</p>
        <p>I am consistently looking for new things to learn, so right now as I am interested in back-end development as well I have started to learn PHP</p>
        <div className={styles.footer}>
          <Link className={styles.top} to={'/skills'} onClick={() => scrollTo('top')}>back to top </Link>
          <Link to={"mailto:timothebissonnette@gmail.com"}>Contact Me</Link>
             <div className={styles['img-container']}> 
              <img onTouchEnd={handlePageChange} className={styles.mobileScroll} src={scrollMobile} alt='an icon telling that you can scroll'/>
             </div> 
        </div>
      </div>
      
    </div>
  )
}

export default MySkills
