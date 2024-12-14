import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';
const proxyUrl = 'https://api.allorigins.win/raw?url='; // CORS proxy to bypass CORS restrictions

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  function removeTour(id) {
    setTours( prev => {
      return prev.filter((item) => item.id !== id)
    } )
  }

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch data using CORS proxys
      setTimeout(() => {
        setLoading(false);
        
      }, 2000);
      const res = await fetch(proxyUrl + encodeURIComponent(url));
      const tours = await res.json();
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching tours:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main className='flex flex-col items-center justify-center'>
      <Tours tours={tours} remove={removeTour} />
    </main>
  );
}

export default App;
