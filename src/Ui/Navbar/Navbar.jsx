import React from 'react'
import {Link} from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <div className={styles.navbar__items}>
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>
    </div>
  </div>
  )
}

export default Navbar