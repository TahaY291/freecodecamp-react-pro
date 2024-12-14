import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
const proxyUrl = 'https://api.allorigins.win/raw?url='; 


function App() {
  const [loading, setLoading] = useState(true)
  const [job, setJob] = useState([])
  const [value, setvalue] = useState(0);


  const fetchJobs = async () => {
    let res = await fetch(proxyUrl + encodeURIComponent(url))
    let data = await res.json()
    setJob(data)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }

  useEffect(()=>{
    fetchJobs()
  },[])

  if (loading) {
    return(
      <section className='section loading'>
      <h1>loading...</h1>
    </section>
    ) 
  }
  const {title, company, dates, duties} = job[value]
  return (
    <section className='section'>
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            job.map((item, index)=> {
              return  <button className={`job-btn ${index === value ? "active-btn" : ''}`} onClick={()=> setvalue(index)} key={item.id}>
                {item.company}
              </button>
            })
          }
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {
            duties.map((duty,index)=> {
              return <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'/>
                <p>{duty}</p>
              </div>
            })
          }
        </article>
      </div>

    </section>
  )
}

export default App