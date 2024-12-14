import { useState } from 'react'
import data from './data'
import List from './List'

function App() {
  const [people, setPeople] = useState(data)

  return (
    <main className='flex items-center justify-center min-h-[100vh] '>
      <section className="container bg-white shadow-md rounded-sm max-w-[500px] p-4 text-center">
        <h3 className='text-2xl text-start ml-12'>{people.length} Birthday Today</h3>
        <List people={people} />
        <button className='w-[90%] bg-pink-500 p-2 shrink-0 mt-4' onClick={()=> setPeople( prev => prev.length > 0 ? [] : data )}>{people.length > 0 ? "Clear All": "Show All"}</button>
      </section>
    </main>
  )
}

export default App
