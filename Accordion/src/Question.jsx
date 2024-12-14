import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info, id}) => {
  const [check, setCheck] = useState(false)
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button onClick={()=> setCheck (prev => !prev)} className='btn'>
         { check ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
      </header>
      {check ? <p>{info}</p> : ""}
    </article>
  )
};

export default Question;