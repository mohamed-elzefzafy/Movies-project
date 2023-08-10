import { Col, Container, Row } from "react-bootstrap";
import logo from '../images/logo.png'
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllMovie, getMovieSearch } from "../redux/actions/movieAction";




const NavBar = () => {


const onSearch = (word) => {
  search(word);
}


  const dispatch = useDispatch();

const search = async (word) => {
  if(word === "")
  {
    dispatch(getAllMovie())
  // getAllMovies();

  } else {
    // const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=355f3cc55c1a5f8fb6f7b79d7541faea&query=${word}&language=ar`);
    dispatch(getMovieSearch(word))
    // setmovies(res.data.results)
    // setPageCount(res.data.total_pages)
  }

  
}





  return (
    <div className="nav-style w-100">
    <Container>
      <Row className="pt-2 ">
        <Col xs="2" lg="1">
              <a href="/">
        
            <img  className="logo" src={logo} alt="dfs" />
            </a>  
        </Col>
        <Col xs="10" lg="11" className=" d-flex align-items-center">
          <div className="search  w-100">
            <i className="fa fa-search"></i>
            <input onChange={(e)=> onSearch(e.target.value)}  type="text" className="form-control" placeholder="ابحث" />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default NavBar;