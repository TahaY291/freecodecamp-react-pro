import React, { useState } from 'react';
import data from './data';
import Question from './Question';
function App() {
  const [question, setQuestion] = useState(data)
  return (
    <main>
      <div className="container">
        <h3>Questions and answer about login</h3>
        <section className="info">
          {
            question.map((ele) => {
              return <Question key={ele.id} {...ele} />
            })
          }
        </section>
      </div>
    </main>
  
  )
}

export default App;