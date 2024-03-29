import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url ='https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchTours = async() => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch(error){
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  if(loading){
    return (
      <main>
        <Loading/>
      </main>
    )
  }
  if(tours.length === 0){
    return (
      <main className="title">
        <h2>no tours left</h2>
        <button onClick={fetchTours} className="btn">refresh</button>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
