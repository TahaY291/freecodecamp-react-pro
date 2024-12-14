import React from 'react'

function List({ people }) {
  return (
    <div>
      <h1 className='text-4xl text-blue-950 text-start ml-12 font-bold'>List Components</h1>
      {
        people.map((item) => {
          return <article key={item.id}>
            <li className='flex items-center ml-8 list-none my-1'>
              <img className='w-24 h-24 object-cover rounded-full' src={item.image} alt="" />
              <div className='ml-2'>
                <h1 className='text-xl'> {item.name} </h1>
                <h3 className='text-start '> {item.age}</h3>
              </div>
            </li>
          </article>
        })
      }
    </div>
  )
}

export default List
