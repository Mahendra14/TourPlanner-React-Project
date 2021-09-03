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

  if(loading === true){
    return <Loading /> }

  return (<main>
    <Tours />
  </main>);
}

export default App
