import React from 'react'
// import { Link } from 'react-router-dom'
import "./Book.css"

const Book = () => {
  return (
    <>

    {/* booking section start */}

   <div className="booking-container">
     
      {/* Heading Tag Start  */}
  <h3> Welcome Back! </h3>
  <p>  Book your favourites Movies Now Limited Seat Available </p>
  {/* Heading Tag End  */}

   {/* user and pass start  */}
   <input type="email" placeholder="you@example.com" id="hello" />
   {/* <input type="text" id={"fname"} name={"fname" }value={"John"}> */}
    <br />
  <input type="password" placeholder="At least 8 characters"/>
   {/* user and pass end */}

   {/* login btn start */}
   <div className="btn"> 
   <button>Login</button>
   </div>
   {/* login btn end */}

   {/* or */}
   <h3>or</h3>

   {/* Social Start  */}
   <div className="social">
    <button className="google"> Google </button>
    <button className="google"> Facebook </button>
   </div>
   {/* Social End */}

   {/* SIgn INFO START  */}
   <div className="sign-info">
   <h4> Don't you have an account? <button className="signup-btn"> Sign Up </button></h4> 
   </div>
   {/* SIgn INFO End */}


    {/* Website Info  */}
    <div className="website-info">
    <h4>  &copy; 2023 ALL WRITE RESERVED</h4>
    </div>

   </div>

   {/* booking section start */}
  </>
  )
}

export default Book