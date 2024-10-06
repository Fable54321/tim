import React, { useEffect, useState, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import styles from './Me.module.css'
import tsim from '../../../src/images/tsim.jpg'
import AboutMe from '../About me/AboutMe'
import MyProjects from '../MyProjects/MyProjects'
import { useLocation, useNavigate } from 'react-router-dom'
import scrollDesktop from '../../../src/images/scrolling-mouse.png'
import MySkills from '../My skills/MySkills'
import MyHobbies from '../MyHobbies/MyHobbies'
import scrollTo from '../../../src/Functions/scrollTo'
import MyExperiences from '../MyExperiences/MyExperiences'



const Me = ({ page, setPage }) => {
  const isPortrait = useMediaQuery({query: '(orientation: portrait'}) 

  const allPagesRef = useRef(null); // Create a ref for the element
  //
  const [gap, setGap] = useState(0); // the gap property is used by pictureBox class and gets set depending on the height of the all-pages class.
   // top margin of the picture box class changes depending on the page.
  //
  const [canScroll, setCanScroll] = useState(true); /* in order for the user to not change th page too many times unadvertedly, scrolls gets turned
   to false and gets turned back to true on a timer.*/
  //
  //
  let location = useLocation(); //used for changing page depending on the url, but also for my sideEffects to kcik everytime it changes

  const windowHeight = window.innerHeight;

  useEffect(() => {
    if (allPagesRef.current) {
      const height = window.getComputedStyle(allPagesRef.current).getPropertyValue('height');
      
      const heightValue = Math.floor(Number(height.slice(0,6)));
      console.log(heightValue, windowHeight);

      const adjustSize = () =>{
        return windowHeight > 820 && heightValue < 300;
      } 

      adjustSize() ? setGap('7%') : setGap(null);      

      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, page]); //used for dynamically adjusting gap value depending on containers height

// Pages Logic ******************************************************** 


  
  const pages = {
    1: '/about',
    2: '/projects',
    3: '/skills',
    4: '/hobbies',
    5: '/experience',
  }



useEffect(() => {
  if(location.pathname === '/about'){
    scrollTo('top');
    setPage(1);
    
  } else if(location.pathname === '/projects'){
    setPage(2);
    
  } else if(location.pathname === '/skills'){
    setPage(3);
    
    if (windowHeight < 840 && isPortrait) {
      
      scrollTo('bottom');
    } 
    
  } else if(location.pathname === '/hobbies'){
    scrollTo('top');
    setPage(4);
   
  } else if(location.pathname === '/experience'){
    setPage(5);

    if(windowHeight < 840 && isPortrait) {
      
      scrollTo('bottom')
    }
     
    
  }

  
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [location.pathname, windowHeight, isPortrait]); 



const navigate = useNavigate();


//************************************* */
//Page handling using scroll or touchEnd
/************************************** */
 const handlePageChange = () => {
  if (canScroll) {
    if (page < 5) {
      setPage(page + 1);
      setCanScroll(false);
      navigate(pages[page + 1]); // navigate to the next page
    } else {
      setPage(1);
      setCanScroll(false);
      navigate(pages[1]); // navigate back to the first page on the last page
    }
    


    setTimeout(() => {
      setCanScroll(true);
    }, 400);
  }
}
    
  

  

  return (
    <>

    <div className={styles.pictureBox} style={{'gap': gap}}>
      <div className={styles.picture} >
        <img src={tsim} alt="Timothé Bissonnette" />
      </div>
     <div ref={allPagesRef} onWheel={handlePageChange} className={styles['all-pages'] }>
        {page === 1 && <AboutMe handlePageChange={handlePageChange} />}
        {page === 2 && <MyProjects handlePageChange={handlePageChange} />}
        {page === 3 && <MySkills handlePageChange={handlePageChange} />}
        {page === 4 && <MyHobbies handlePageChange={handlePageChange} />}
        {page === 5 && <MyExperiences handlePageChange={handlePageChange} />}
     </div>
     <div className={styles.scroll}> 
        
        <img onClick={handlePageChange} id={styles.desktopScroll} src={scrollDesktop} alt='an icon telling that you can scroll'/>
        
          <div className={styles.tooltiptext}>
            <p>You can either click or scroll to change page.</p>
          </div>
        
      </div>
    </div>

    </>

  
  )

}

export default Me
