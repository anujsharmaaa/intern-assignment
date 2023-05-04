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
