// pages/HomePage.js
import React from 'react';
import BookCard from '../Components/BookCard';

function HomePage() {
  const featuredBooks = [
    { id: 1, title: "The Magic Forest", author: "Emily Johnson", price: "$12.99", category: "Fantasy" },
    { id: 2, title: "Adventures in Space", author: "Alex Parker", price: "$14.99", category: "Adventure" },
    { id: 3, title: "The Little Dragon", author: "Sarah Lee", price: "$10.99", category: "Fantasy" },
    { id: 4, title: "Ocean Explorers", author: "Michael Brown", price: "$13.99", category: "Adventure" }
  ];

  return (
    <div>
      <div className="hero">
        <h1>Ignite a Lifelong Love of Reading</h1>
        <p>Discover vibrant, inclusive, and meaningful stories that young readers will cherish for years to come.</p>
        <a href="#" className="btn">Explore Our Books</a>
      </div>
      
      <div className="container">
        <h2 className="page-title">Featured Books</h2>
        <div className="book-grid">
          {featuredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;