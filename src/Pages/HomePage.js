// pages/HomePage.js
import React from 'react';
import BookCard from '../Components/BookCard';
import Styles from '../Css/HomePage.module.css';

function HomePage() {
  const featuredBooks = [
    { id: 1, title: "The Magic Forest", author: "Emily Johnson", price: "$12.99", category: "Fantasy" },
    { id: 2, title: "Adventures in Space", author: "Alex Parker", price: "$14.99", category: "Adventure" },
    { id: 3, title: "The Little Dragon", author: "Sarah Lee", price: "$10.99", category: "Fantasy" },
    { id: 4, title: "Ocean Explorers", author: "Michael Brown", price: "$13.99", category: "Adventure" }
  ];

  return (
    <div>
      <div className={`${Styles.hero}`}>
        
        <div className={`${Styles.flowersmall}`}></div>
        <div className={`${Styles.flowermedium}`}></div>
        <div className={`${Styles.flowermedium}`}></div>
  
  {/* Floating flowers that drift across the screen */}
 
  {/* Additional falling petals for extra magic */}
  <div className={`${Styles.petal}`}></div>
  <div className={`${Styles.petal}`}></div>
  <div className={`${Styles.petal}`}></div>
  <div className={`${Styles.petal}`}></div>
  <div className={`${Styles.petal}`}></div>
  <div className={`${Styles.petal}`}></div>
  <div className={`${Styles.petal}`}></div>
  <div className={`${Styles.petal}`}></div>
  <div className={`${Styles.petal}`}></div>
  <div className={`${Styles.petal}`}></div>
  <div className={`${Styles.petal}`}></div>
  <div className={`${Styles.petal}`}></div>
  <div className={`${Styles.petal}`}></div>
  <div className={`${Styles.petal}`}></div>
  <div className={`${Styles.petal}`}></div>
  <div className={`${Styles.petal}`}></div>
  <div className={`${Styles.petal}`}></div>
  <div className={`${Styles.petal}`}></div>
  <div className={`${Styles.petal}`}></div>
  <div className={`${Styles.petal}`}></div>
  <div className={`${Styles.petal}`}></div>
 

        {/* <h1>Ignite a Lifelong Love of Reading</h1>
        <p>Discover vibrant, inclusive, and meaningful stories that young readers will cherish for years to come.</p>
        <a href="#" className="btn">Explore Our Books</a> */}
        
<div className={Styles.textGlobe}>
  <div className={Styles.floatingCard}>
    <h1 className={Styles.glassTitle}>
      <span className={Styles.titleWord}>Ignite a Lifelong</span>
      <span className={Styles.titleWord}>Love of Reading</span>
    </h1>
    <p className={Styles.glassText}>
      Discover vibrant, inclusive, and meaningful stories that young readers will cherish for years to come.
    </p>
    <div className={Styles.buttonGroup}>
      <a href="#" className={`${Styles.btn} ${Styles.magicBtn}`}>
        <span>Explore Our Books</span>
        <span className={Styles.btnSparkle}>✨</span>
      </a>
    </div>
  </div>
</div>


        
      </div>
      
      <div className={Styles.container}>
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