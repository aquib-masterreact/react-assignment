
import { useState } from 'react'
import './App.css'

function App() {
  const [data,setData] = useState([]);
  async function fetchMoviesData(){
    const response = await fetch("http://localhost:4000/movies");
    
    setData(response);
    console.log(data);
  }
  fetchMoviesData();
  return (
    <>
      <h1>Movie App</h1>
      <div className='movies'>
        {data.map((movie)=>{
          <div className='card'>
          <img className='cardimg'src= {movie.image} alt=''/>
          <h2>{movie.title}</h2>
          <p>{movie.rating}</p>
          
        </div>
        })}
        
      </div>
    </>
  )
}

export default App
