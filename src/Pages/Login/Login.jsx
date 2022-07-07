import React from 'react'
import styles from "./Login.module.css"
import MyInput from "./../../Ui/Input/MyInput"
import MyButton from "./../../Ui/Button/MyButton"
import { AuthContext } from '../../Context'

const Login = () => {
  const {setIsAuth} = React.useContext(AuthContext)

  const login = (e) => {
    e.preventDefault()
    setIsAuth(true)
  }
  
  return (
    <div>
        <h1>Page for Login</h1>
        <form onSubmit={login}>
            <MyInput type="text"  placeholder='Enter login'/>
            <MyInput type="password"  placeholder='Enter password'/>
            <MyButton>Enter</MyButton>
        </form>
    </div>
  )
}

export default Login