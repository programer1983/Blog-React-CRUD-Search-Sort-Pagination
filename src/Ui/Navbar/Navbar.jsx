import React from 'react'
import {Link} from "react-router-dom"
import { AuthContext } from '../../Context'
import MyButton from '../Button/MyButton'
import styles from "./Navbar.module.css"

const Navbar = () => {
  const {setIsAuth} = React.useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className={styles.navbar}>
      <MyButton onClick={logout}>
        Exit
      </MyButton>
    <div className={styles.navbar__items}>
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>
    </div>
  </div>
  )
}

export default Navbar