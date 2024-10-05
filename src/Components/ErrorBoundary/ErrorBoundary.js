import React from 'react'
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom'
import styles from './ErrorBoundary.module.css'

const ErrorBoundary = () => {

const error = useRouteError();

if (isRouteErrorResponse(error)) {
  return (
    <div className={styles['error-container']}>
      <div className={styles['error-inner']}>  
        <h1> 404 not found </h1>
        <p>The url entered doesn't match any route</p>
        <Link to={'/'}>Back to home page</Link>
      </div>
    </div>
  )
}
}

export default ErrorBoundary
