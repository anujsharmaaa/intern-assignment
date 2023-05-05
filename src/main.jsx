import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.jsx'

// React Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Booking Page
import Book from './Components/Book.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Routes>
    <Route exact path="/" element={<App/>} />
    <Route exact path="book" element={<Book/>} />
 </Routes>
 </BrowserRouter>
);


// We would like you to create a 2 screen React JS application using this 
// API: https://api.tvmaze.com/search/shows?q=all
// Please visit this API endpoint to understand the structure of the response.

