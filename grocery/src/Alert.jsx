import React, { useEffect } from 'react'

const Alert = ({msg,list, type, removeAlert}) => {
    useEffect(()=>{
        const timeout = setTimeout(() => {
            removeAlert()
        }, 1000);
        return () =>clearTimeout(timeout)
    },[list])
  return(
    <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default Alert