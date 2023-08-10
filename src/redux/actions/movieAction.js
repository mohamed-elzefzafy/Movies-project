import axios from "axios"
import { ALLMOVIES, movieApi } from "../types/moviesType"


export const getAllMovie =  ()=> {

  return async (dispatch)=> {
    const res = await axios.get(movieApi)
    dispatch( {type : ALLMOVIES , data :  res.data.results , pages : res.data.total_pages})
  }
  
} 


export const getMovieSearch =  (word)=> {

  return async (dispatch)=> {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e4f6c63ed6e456fb42a939dade1c502f&query=${word}&language=ar`)
    dispatch( {type : ALLMOVIES , data :  res.data.results , pages : res.data.total_pages})
  }
  
} 



export const getPage =  (page)=> {

  return async (dispatch)=> {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e4f6c63ed6e456fb42a939dade1c502f&language=ar&page=${page}`)
    dispatch( {type : ALLMOVIES , data :  res.data.results , pages : res.data.total_pages})
  }
  
} 



