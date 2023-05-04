import React from 'react'
import PropsMovieCard from './PropsMovieCard.jsx'
import MovieData from './MovieData.jsx'
import "./Home.css";


const App = () => {

  return (
 
    <>

      {/* Navbar Section Start  */}
      <div className="navbar">
        <ul>
         <a href="/"> <li> Home </li> </a> 
          <li> Delhi-NCR </li>
          <li> Latest-Movie </li>
          <li> Contact Us </li>
        </ul>
      </div>
     {/* Navbar Section End  */}

  <div className="heading">
    <h1> Book Your Fav Movie In Delhi-NCR</h1>
  </div>
          
          {MovieData.map(function mapcard(value){
            return(
              <PropsMovieCard
              imgSrc= {value.imgSrc}
              seriesTitle= {value.seriesTitle}
              seriesGeners={value.seriesGeners}
              vistNow= {value.vistNow}
              bookNow={value.bookNow}
              vistNowLink= {value.vistNowLink}
         />
            )

          })}


   </>
  )
}

export default App



