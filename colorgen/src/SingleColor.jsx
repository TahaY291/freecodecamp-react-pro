import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {
    const [alert, setAlert] = useState(false)
    let bcg = rgb.join(',')
    let hex = rgbToHex(...rgb)
    let hexVal = `${hex}`

  return (
    <article className='color' style={{backgroundColor: `rgb(${bcg}) `, height: '200px' }} 
    onClick={()=>{
        setAlert(true)
        navigator.clipboard.writeText(hexVal)
        setTimeout(() => {
           setAlert(false) 
        }, 500);
    }}
    >
        <p style={{color: index >= 14 ? 'white' : 'black'}}>{weight}%</p>
        <p style={{color: index >= 14 ? 'white' : 'black'}}>{hexVal}</p>
        {alert && <p>copy to clipboard</p>}
    </article>
)
}

export default SingleColor