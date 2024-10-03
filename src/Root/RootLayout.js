import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Me from '../Me/Me'
import styles from './RootLayout.module.css'

const RootLayout = () => {
  const [page, setPage] = useState(1);

  return (
    <div className={styles.root}>
      <Navbar setPage={setPage} />
      <Me page={page} setPage={setPage} />
    </div>
  )
}

export default RootLayout
