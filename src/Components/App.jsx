import PropsMovieCard from "./PropsMovieCard.jsx";
import "./Book.css";
import "./Home.css"
import { useEffect, useState } from "react";
import axios from "axios";


const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [] );

  return (
    <>
      {/* Navbar Section Start  */}
      <div className="navbar">
        <ul>
          <a href="/">
            <li> Home </li>
          </a>
          <li> Delhi-NCR </li>
          <li> Latest-Movie </li>
          <li> Contact Us </li>
        </ul>
      </div>
      {/* Navbar Section End  */}

      <div className="heading">
        <h1> Book Your Fav Movie In Delhi-NCR</h1>
      </div>

      {data === null ? (
        <h1>Loading</h1>
      ) : (
        data.map((value) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <PropsMovieCard
              key={value.show.id}
              imgSrc={value.show.image !== null ? value.show.image.original : ''}
              seriesTitle={value.show.name}
              seriesGeners={value.show.genres[0]}
              vistNow='visit now'
              bookNow='book now'
              vistNowLink={value.show.officialSite}
            
            />
          );
        })
      )}


    </>
  );
};

export default App;
