// components/BookCard.js
import React from 'react';

function BookCard({ book, showCategory = false }) {
  return (
    <div className="book-card">
      <div className="book-image">{book.title}</div>
      <div className="book-info">
        <div className="book-title">{book.title}</div>
        <div className="book-author">by {book.author}</div>
        {showCategory && (
          <div style={{fontSize: '12px', color: '#118ab2', marginBottom: '10px'}}>
            {book.category}
          </div>
        )}
        <div className="book-price">
          {book.price}
          <button className="btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;