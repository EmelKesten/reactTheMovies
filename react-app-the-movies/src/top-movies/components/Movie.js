import React, {useState} from "react";
import PopUp from "../../modal/Index";

function MakeMovie(movie) {
  const [show, setShow] = useState(false);


  return(
          <div key={movie?.id} className="article" >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt=""
            />
            <h3>{movie?.title}</h3>
            <PopUp id={movie?.id} show={false} />
          </div>
        );
  
}

export default MakeMovie;