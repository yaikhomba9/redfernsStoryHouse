// pages/BooksPage.js
import React from 'react';
import BookCard from '../Components/BookCard';

function BooksPage() {
  const books = [
    { id: 1, title: "The Magic Forest", author: "Emily Johnson", price: "$12.99", category: "Fantasy" },
    { id: 2, title: "Adventures in Space", author: "Alex Parker", price: "$14.99", category: "Adventure" },
    { id: 3, title: "The Little Dragon", author: "Sarah Lee", price: "$10.99", category: "Fantasy" },
    { id: 4, title: "Ocean Explorers", author: "Michael Brown", price: "$13.99", category: "Adventure" },
    { id: 5, title: "Counting with Animals", author: "Lisa Wong", price: "$9.99", category: "Educational" },
    { id: 6, title: "The Secret Garden", author: "Robert Green", price: "$11.99", category: "Mystery" },
    { id: 7, title: "Superhero School", author: "David Miller", price: "$12.99", category: "Adventure" },
    { id: 8, title: "The Rainbow Unicorn", author: "Jessica Taylor", price: "$10.99", category: "Fantasy" }
  ];
  
  return (
    <div>
      <h1 className="page-title">Our Books</h1>
      <div className="container">
        <div className="book-grid">
          {books.map(book => (
            <BookCard key={book.id} book={book} showCategory={true} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BooksPage;