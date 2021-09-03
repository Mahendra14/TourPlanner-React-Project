import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours,setTours] = useState([]);

  const fetchData = async () => {
    try{
    setLoading(true);
    const resp = await fetch(url);
    const data = await resp.json();
    setLoading(false);
    setTours(data);
    }
    catch(err){
      setLoading(false);
      console.log(err);
    }
  }

  useEffect( () => {
    fetchData();
  }, [])

  const removeTour = (id) =>{
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if(loading === true){
    return <Loading /> }

  if(tours.length === 0){
    return (
      <main>
        <div className="title">
          <h2>No Tours Left To Show!</h2>
        <button  className='btn' onClick={() => fetchData()}>Refresh!</button>
        </div>
      </main>
    );
  }

  return (<main>
    <Tours tours={tours} removeTour = {removeTour}/>
  </main>);
}

export default App
