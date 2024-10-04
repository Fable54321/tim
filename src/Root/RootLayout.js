import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Me from '../Me/Me'
import styles from './RootLayout.module.css'
import { useNavigate } from 'react-router-dom'

const RootLayout = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(()=>{
    navigate('/about')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className={styles.root}>
      <Navbar setPage={setPage} />
      <Me page={page} setPage={setPage} />
    </div>
  )
}

export default RootLayout
