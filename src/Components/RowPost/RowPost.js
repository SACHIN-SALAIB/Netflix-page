import React, {useEffect,useState} from 'react'
import Youtube from 'react-youtube';
import './RowPost.css'
import axios from 'axios';

const RowPost = (props) => {
  
    const API_KEYS='27e16b43d3a8d35a3646d329c9d2ed4a'
    const originals ='https://api.themoviedb.org/3/discover/tv?api_key={API_KEY_HERE}&with_networks=213'
    const imageUrl='https://image.tmdb.org/t/p/original'
    const [movies, setMovies] = useState([]);
    const [UrlId,setUrlId]=useState('')

      useEffect(()=>{
       try{
        axios.get(props.Url).then((response=>{

           
          setMovies(response.data.results)
         }))
       }catch(err){
        //alert(err)
       }

      
     },[])

     const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay:1,
      },
    };
      
    const handleMovies=(id)=>{
    console.log(id)
    axios.get( `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEYS}&language=en-US`) .then((response=>{
    // tmdb video 
    
    if(response.data.results.lenght!==0){    
    
      setUrlId(response.data.results[0])
    }
    else{
      console.log( 'Array Empty')
    }
    
    
    }))
    }
 
   
 
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
      {movies.map((obj)=>(

        <img onClick={()=>handleMovies(obj.id)} className={ props.isSmall?"smallposter":"poster"} src={`${imageUrl+obj.backdrop_path}`} alt="Poster"/>
     ))}
      
        
        </div>
        
         

           
       { UrlId &&  <Youtube opts={opts} videoId= {UrlId.key}/>}
        
        

        </div>
        
 
    
    
  )
      }

export default RowPost