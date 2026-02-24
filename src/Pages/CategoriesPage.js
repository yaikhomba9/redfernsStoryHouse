// pages/CategoriesPage.js
import React from 'react';

function CategoriesPage() {
  const categories = [
    { id: 1, name: "Picture Books", count: 45, icon: "fas fa-palette" },
    { id: 2, name: "Early Readers", count: 32, icon: "fas fa-book-reader" },
    { id: 3, name: "Chapter Books", count: 28, icon: "fas fa-book" },
    { id: 4, name: "Middle Grade", count: 36, icon: "fas fa-user-graduate" },
    { id: 5, name: "Young Adult", count: 24, icon: "fas fa-users" },
    { id: 6, name: "Educational", count: 41, icon: "fas fa-graduation-cap" },
    { id: 7, name: "Fantasy", count: 38, icon: "fas fa-dragon" },
    { id: 8, name: "Adventure", count: 29, icon: "fas fa-mountain" }
  ];
  
  return (
    <div>
      <h1 className="page-title">Book Categories</h1>
      <div className="container">
        <div className="book-grid">
          {categories.map(category => (
            <div key={category.id} className="book-card">
              <div className="book-image" style={{backgroundColor: '#06d6a0', fontSize: '24px'}}>
                <i className={category.icon}></i>
              </div>
              <div className="book-info">
                <div className="book-title">{category.name}</div>
                <div className="book-author">{category.count} books available</div>
                <div className="book-price">
                  <button className="btn">Explore</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;