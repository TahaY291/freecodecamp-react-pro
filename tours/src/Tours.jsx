import React from 'react';
import Tour from './Tour';
const Tours = ({tours, remove}) => {
  return <section>
   <h2 className='text-4xl text-emerald-900 text-center font-bold mt-24 tracking-wider'>tours component</h2>;
   {
    tours.map((tour)=>{
        return <Tour key={tour.id} remove={remove} {...tour} />
    })
   }
  </section>
};

export default Tours;