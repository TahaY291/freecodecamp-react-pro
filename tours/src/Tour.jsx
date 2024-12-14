import React, { useState } from 'react';

const Tour = ({id, name, info, image, price,remove}) => {
    const [toggle, setToggle] = useState(false)

    function togglebtn(text) {
        if (!toggle) {
            return text.slice(0,200)
        }else{
            return text
        }
    }


  return <article className='flex flex-col w-[600px] box-border bg-white my-4 rounded-md shadow-md pb-4' >
    <img className='w-[100%] h-72 object-cover' src={image} alt={name} />
    <div className='flex items-center justify-between my-2 p-4'>
        <h3 className='font-bold '>{name}</h3>
        <h3 className='font-cold rounded-sm px-1 bg-emerald-100 text-emerald-800 '>{price}</h3>
    </div>
    <p className='p-4'>{togglebtn(info)}
        <button onClick={ ()=>   setToggle(prev=> !prev)} className='text-blue-400'>{toggle ? "see less" : "...see more"}</button>
    </p>
    <button  className='text-red-800 border-2 border-red-800 px-2 text-center m-auto mt-2' onClick={()=> remove(id)}>not interested</button>
  </article>
};

export default Tour;