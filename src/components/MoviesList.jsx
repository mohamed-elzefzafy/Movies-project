import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComp from "./PaginationComp";
import { useEffect } from "react";
import { getAllMovie } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


const MoviesList = () => {
  const [movies, setmovies] = useState([]);
  
  const dispatch = useDispatch();


  useEffect(()=> {
    // getAllMovies();
    dispatch(getAllMovie())
      }, [])
    

      const dataMovies = useSelector((state) => state.movies)

    

      useEffect(() => {
        setmovies(dataMovies);
      }, [dataMovies])
  return (
    <Row className="mt-3">
    {movies.length > 0 ? (movies.map((mov) => 
      <CardMovie key={mov.id} mov={mov}/>
    )) : (<h2 className="text-center p-5">لا يوجد أفلام</h2>)}

{movies.length > 0 && <PaginationComp/> }
    </Row>
  )
}

export default MoviesList;