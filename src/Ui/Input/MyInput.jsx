import React from 'react'
import styles from "./../Input/MyInput.module.css"

const MyInput = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} {...props} className={styles.myInput} />
  )
})

export default MyInput