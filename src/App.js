// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import BooksPage from './Pages/BooksPage';
import CategoriesPage from './Pages/CategoriesPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import './App.css';

function App() {
  //const [activePage, setActivePage] = useState('home');
  
 /*  const renderPage = () => {
    switch(activePage) {
      case 'home':
        return <HomePage />;
      case 'books':
        return <BooksPage />;
      case 'categories':
        return <CategoriesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  }; */
  
  return (
    <div className="App">
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
      
    </div>
  );
}

export default App;