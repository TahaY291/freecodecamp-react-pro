import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setindex] = useState(0)
    const { job,name  , text, image} = people[index]
    console.log(people.length);
    
  return (
    <article className='review'>
        <div className="img-container">
            <img src={image} alt="" className='person-img' />
            <span className="quote-icon">
                <FaQuoteRight />
            </span>
        </div>
        <h4 className="auther">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
<div className="button-container">
    <button onClick={()=> setindex( prev => prev > 0 ? prev - 1 :0)} className='prev-btn'>
    <FaChevronLeft/>    
    </button>
    <button onClick={() => setindex(prev => prev < people.length - 1 ? prev + 1 : people.length - 1)} className='next-btn'>
    <FaChevronRight/>    

    </button>
</div>
    <button onClick={()=> setindex(Math.floor(Math.random() * people.length))} className='random-btn'>
    surprise me    

    </button>
    </article>
  );
};

export default Review;