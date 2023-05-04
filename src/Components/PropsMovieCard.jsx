import React from "react";
import { useNavigate } from "react-router-dom";

function PropsMovieCard(props) {

   const navigate = useNavigate();

   const navigateToBook = () => {
    navigate("/book")
   }
 

  return (
    <>
      {/* Home page start  */}
      <div className="main-container">
        {/* Movie Section Start  */}
        <div className="movie-container">
          {/* Movie Box Start  */}
          <div className="movie-box">
            <img src={props.imgSrc} height={650} width={450} alt="movie-img" />

            {/* Movies Details Start  */}
            <div className="movie-details">
              <h4>{props.seriesTitle}</h4>
              <h6> {props.seriesGeners}</h6>
            </div>
            {/* Movies Details End  */}

            {/* Movie Button start  */}
            <div className="movie-button">
              <a href={props.vistNowLink} target="_blank">
                <button className="visit-now"> {props.vistNow} </button>
              </a>
              <button onClick={
               navigateToBook
              } className="book-now"> {props.bookNow} </button>
            </div>
            {/* movies button end  */}
          </div>
          {/* Movie Box End */}
        </div>
        {/* Movie Section End  */}
      </div>
      {/* Home page end */}
    </>
  );
}

export default PropsMovieCard;
