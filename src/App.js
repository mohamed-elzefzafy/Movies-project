import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from "axios";
import { useEffect, useState } from "react";





function App() {
  const [movies, setmovies] = useState([]);
  const getAllMovies = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=355f3cc55c1a5f8fb6f7b79d7541faea&language=ar")
    setmovies(res.data.results)
  
  }

  useEffect(()=> {
getAllMovies();

  }, [])

  const search = async (word) => {
    if(word === "")
    {
    getAllMovies();
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=355f3cc55c1a5f8fb6f7b79d7541faea&query=${word}&language=ar`);
      setmovies(res.data.results)
    }
  
    
  }

  return (
    <div className="font color-body">
<NavBar search={search}/>
         <Container>
         <MoviesList movies={movies}/>

         </Container>
    </div>
  );
}

export default App;
