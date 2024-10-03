import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import dropdown from '../images/dropdown.png'
import close from '../images/close.png'



const Navbar = ({ setPage }) => {

  

  const [dropDownOn, setDropDownOn] = useState(false);

  console.log(dropDownOn);

  const handleLinkClick = (id) =>{
    
    setDropDownOn(false);
    setPage(Number(id));
  }

  return (
    <div className={styles['nav-full']}>
      <div className={styles.space}>

      </div>
      <div className={styles.name}>
        <h1>Timothé Bissonnette</h1>
      </div>
      { dropDownOn ? 
        <div className={styles['subjects-mobile-off']}>
        </div> 
        :
        <div className={styles['subjects-mobile']}>
        <img src={dropdown} alt='a dropdwon icon' onClick={() => setDropDownOn(true)}  />
        </div>
      }
      <div className={dropDownOn ? styles['drop-active']: styles['drop-off']}>
        <div className={styles.close}>
          <img src={close} alt='a close icon' onClick={() => setDropDownOn(false)} />
        </div>
        <div className={styles.links}>
        <Link id={1} to='/about' onClick={(e)=> handleLinkClick(e.target.id)}>About me</Link>
        <Link id={2} to='/projects' onClick={(e)=> handleLinkClick(e.target.id)} >My projects</Link>
        <Link id={3} to='/skills' onClick={(e)=> handleLinkClick(e.target.id)}>Skills</Link>
        <Link id={4} to={'/hobbies'} onClick={(e)=> handleLinkClick(e.target.id)}>My hobbies</Link>
        <Link id={5}>Experience</Link>
        </div>
      </div>
      <div className={styles.subjects}>
        <Link to={'/about'} onClick={()=> setPage(1)} >About me</Link>
        <Link to={'/projects'} onClick={()=> setPage(2)}>My projects</Link>
        <Link to={'/skills'} onClick={()=> setPage(3)}>Skills</Link>
        <Link to={'/hobbies'} onClick={()=> setPage(4)} >My hobbies</Link>
        <Link>Experience</Link>
      </div>
    </div>
  )
}

export default Navbar
