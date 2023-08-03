import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";





function App() {
  const [movies, setmovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const getAllMovies = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=355f3cc55c1a5f8fb6f7b79d7541faea&language=ar")
    setmovies(res.data.results)
    setPageCount(res.data.total_pages)
  
  }

  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=355f3cc55c1a5f8fb6f7b79d7541faea&language=ar&page=${page}`)
    setmovies(res.data.results)
    setPageCount(res.data.total_pages)
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
      setPageCount(res.data.total_pages)
    }
  
    
  }



  return (
    <div className="font color-body">
<NavBar search={search}/>
         <Container>
         <BrowserRouter>
          <Routes>
          <Route path="/" element={<MoviesList movies={movies} pageCount={pageCount} getPage={getPage}/>}/>
          <Route path="/movie/:id" element={<MovieDetails movies={movies}/>}/>
          
          </Routes>
         </BrowserRouter>
      

         </Container>
    </div>
  );
}

export default App;
