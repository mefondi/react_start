import React from 'react'
import classes from './MyInput.module.css'

const MyInput = React.forwardRef((Props, ref) => {
  return (
    <input ref={ref} className={classes.MyInp} {...Props}/>
  )
})

export default MyInput