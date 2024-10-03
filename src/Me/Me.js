import React, { useEffect, useState, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import styles from './Me.module.css'
import tsim from '../images/tsim.jpg'
import AboutMe from '../About me/AboutMe'
import MyProjects from '../MyProjects/MyProjects'
import { useLocation, useNavigate } from 'react-router-dom'
import scrollDesktop from '../images/scrolling-mouse.png'
import MySkills from '../My skills/MySkills'
import MyHobbies from '../MyHobbies/MyHobbies'
import scrollTo from '../Functions/scrollTo'



const Me = ({ page, setPage }) => {
  const isPortrait = useMediaQuery({query: '(orientation: portrait'}) 

  const allPagesRef = useRef(null); // Create a ref for the element
  //
  const [gap, setGap] = useState(0); // the gap property is used by pictureBox class and gets set depending on the height of the all-pages class.
  const [margin, setMargin] = useState('-15%');
  //
  const [canScroll, setCanScroll] = useState(true); /* in order for the user to not change th page too many times unadvertedly, scrolls gets turned
   to false and gets turned back to true on a timer.*/
  //
  //
  let location = useLocation(); //used for changing page depending on the url, but also for my sideEffects to kcik everytime it changes

  useEffect(() => {
    if (allPagesRef.current) {
      const height = window.getComputedStyle(allPagesRef.current).getPropertyValue('height');
      const windowHeight = window.innerHeight;
      const heightValue = Math.floor(Number(height.slice(0,6)));
      console.log(heightValue, windowHeight);

      const adjustSize = () =>{
        return windowHeight > 820 && heightValue < 300;
      } 
     
      
      adjustSize() ? setGap('7%') : setGap(0);
      
    }
  }, [location.pathname]);

// Pages Logic ******************************************************** 
  
  const pages = {
    1: '/about',
    2: '/projects',
    3: '/skills',
    4: '/hobbies',
  }

useEffect(() => {
  

  if(location.pathname === '/about'){
    setPage(1)
    setMargin('-15%');
  }else if(location.pathname === '/projects'){
    setPage(2)
    setMargin('-15%');
  }else if(location.pathname === '/skills'){
    setPage(3)
    
    setMargin('55%');
    scrollTo('bottom');
  }else if(location.pathname === '/hobbies'){
    setPage(4)
    setMargin('-15%');
  }

  if(!isPortrait){
    setMargin(0);
  };
// eslint-disable-next-line react-hooks/exhaustive-deps
},[location.pathname]);

const navigate = useNavigate();


//************************************* */
//Page handling using scroll or touchEnd
/************************************** */
 const handlePageChange = () => {
  if (canScroll) {
    if (page < 4) {
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
      <div className={styles.picture} style={{'marginTop': margin}}>
        <img src={tsim} alt="Timothé Bissonnette" />
      </div>
     <div ref={allPagesRef} onWheel={handlePageChange} className={styles['all-pages'] }>
        {page === 1 && <AboutMe  />}
        {page === 2 && <MyProjects />}
        {page === 3 && <MySkills />}
        {page === 4 && <MyHobbies />}
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
