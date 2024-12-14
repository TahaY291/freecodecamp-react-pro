import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  
  function handleSubmit(e) {
    e.preventDefault()
    console.log("hello");
    let amount = parseInt(count)
    let random =  Math.floor(Math.random() * data.length + 1)
    console.log(random);
    
    if (count <= 0) { 
      amount = 1
    }else if (count > 8) {
      amount = 8
    }
    setText(data.slice(0, amount))
    
  }
   
  return (
    <section className='section-center'>
      <h3>tired of boring lorem?</h3>
      <form onSubmit={handleSubmit} >
        <label htmlFor="amount">Paragraph:</label>
        <input type="number" name='amount' id='amount' value={count} onChange={(e)=> setCount(e.target.value)}  />
        <button type='submit' className='btn'>Generate</button>
      </form>
      <article className='lorem-text'>
        {
          text.map((item, index)=>{
            return <p key={index}> {item} </p>
          })
        }
      </article>
    </section>
    )
}

export default App;