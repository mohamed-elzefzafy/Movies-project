import axios from "axios"
import { ALLMOVIES, movieApi } from "../types/moviesType"


export const getAllMovie =  ()=> {

  return async (dispatch)=> {
    const res = await axios.get(movieApi)
    console.log(res);
    dispatch( {type : ALLMOVIES , data :  res.data.results , pages : res.data.total_pages})
  }
  
} 