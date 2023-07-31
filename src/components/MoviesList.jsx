import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComp from "./PaginationComp";


const MoviesList = ({movies}) => {
  return (
    <Row className="mt-3">
    {movies.length > 0 ? (movies.map((mov) => 
      <CardMovie key={mov.id} mov={mov}/>
    )) : (<h2 className="text-center p-5">لا يوجد أفلام</h2>)}

<PaginationComp/>
    </Row>
  )
}

export default MoviesList;