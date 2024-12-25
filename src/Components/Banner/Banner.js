import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Banner.css';
 

const Banner= () => {
  const baseURL='https://api.themoviedb.org/3'
  const API_KEYS='27e16b43d3a8d35a3646d329c9d2ed4a'
  const [movie,setMovie] = useState();
  const imageUrl='https://image.tmdb.org/t/p/original'
  //base url ,image url ,api key 
  useEffect(()=>{
 
     axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEYS}&language=en-US`)
     .then((response)=>{
       
      const randomIndex = Math.floor(Math.random() * 20)
     
      setMovie(response.data.results[randomIndex])
       
    })
  },[])
  return (
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path :""})`,color:'white'}}>
         <div className="content"> 

   <h1 className='title'>{movie? movie.title : ""}</h1>

        
           <div className='banner_btn'>
              <button className='btn'>Play</button>
              <button className='btn'>My list</button>

           </div>
           <h1 className='desc_banner'> {movie? movie.overview : ''} </h1>
      
      </div>  
      
      <div className="fade">

      </div>

    </div>
  )
}

export default Banner;
