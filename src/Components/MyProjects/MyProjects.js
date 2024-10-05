import React from 'react'
import styles from './MyProjects.module.css'
import scrollMobile from '../../../src/images/scroll-up.png'
import { Link } from 'react-router-dom'

const MyProjects = ({ handlePageChange }) => {
  return (
    <div className={styles["my-projects-container"]}>
      <div className={styles["my-projects-text"]}>
        <h1>My projects</h1>
        <div className={styles["first-project"]}>
          <Link to={"https://main--alpine-aluminium.netlify.app/"}>
            Alpine Aluminium
          </Link>
          <p>(Work in progress, waiting for some pictures.)</p>
        </div>
        <p>Here is project #2</p>
        <p>here is project #3</p>
        <img
          onTouchEnd={handlePageChange}
          className={styles.mobileScroll}
          src={scrollMobile}
          alt="an icon telling that you can scroll"
        />
        <a href="mailto:timothebissonnette@gmail.com">Contact Me</a>
      </div>
    </div>
  );
}

export default MyProjects
