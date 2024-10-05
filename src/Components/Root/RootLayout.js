import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Me from '../Me/Me'
import styles from './RootLayout.module.css'
import { useNavigate, useLocation } from 'react-router-dom'


const RootLayout = () => {
  const [page, setPage] = useState(1); // declared here so it can be send as a prop to both navbar and me.js
  const navigate = useNavigate(); // redirect to about me page so that location PathName works properly.
  const location = useLocation(); // get current location path name.

  useEffect(()=>{
   if(location.pathname === '/'){ 
    navigate('/about')
   };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]) // redirects only from the base url.

  return (
    <div className={styles.root}>
      <Navbar setPage={setPage} />
      <Me page={page} setPage={setPage} />
    </div>
  )
}

export default RootLayout
