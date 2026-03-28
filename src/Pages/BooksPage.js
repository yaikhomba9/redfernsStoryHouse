// pages/BooksPage.js
import React, { useState } from 'react';
import BookCard from '../Components/BookCard';
import styles from './css/BooksPage.module.css';

function BooksPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const books = [
    { id: 1, title: "The Magic Forest", author: "Emily Johnson", price: "$12.99", category: "Fantasy", ageGroup: "5-8", rating: 4.5, featured: true },
    { id: 2, title: "Adventures in Space", author: "Alex Parker", price: "$14.99", category: "Adventure", ageGroup: "7-10", rating: 4.8, featured: true },
    { id: 3, title: "The Little Dragon", author: "Sarah Lee", price: "$10.99", category: "Fantasy", ageGroup: "4-7", rating: 4.3, featured: false },
    { id: 4, title: "Ocean Explorers", author: "Michael Brown", price: "$13.99", category: "Adventure", ageGroup: "6-9", rating: 4.6, featured: false },
    { id: 5, title: "Counting with Animals", author: "Lisa Wong", price: "$9.99", category: "Educational", ageGroup: "2-5", rating: 4.7, featured: true },
    { id: 6, title: "The Secret Garden", author: "Robert Green", price: "$11.99", category: "Mystery", ageGroup: "8-12", rating: 4.9, featured: false },
    { id: 7, title: "Superhero School", author: "David Miller", price: "$12.99", category: "Adventure", ageGroup: "6-9", rating: 4.4, featured: false },
    { id: 8, title: "The Rainbow Unicorn", author: "Jessica Taylor", price: "$10.99", category: "Fantasy", ageGroup: "3-6", rating: 4.8, featured: true },
    { id: 9, title: "My First ABC", author: "Emma Watson", price: "$8.99", category: "Educational", ageGroup: "1-4", rating: 4.5, featured: false },
    { id: 10, title: "Pirate's Treasure", author: "Jack Sparrow", price: "$11.99", category: "Adventure", ageGroup: "5-8", rating: 4.2, featured: false },
    { id: 11, title: "Dreamland Stories", author: "Sophia Chen", price: "$13.99", category: "Fantasy", ageGroup: "4-7", rating: 4.7, featured: true },
    { id: 12, title: "Science Lab Kids", author: "Dr. Smith", price: "$15.99", category: "Educational", ageGroup: "8-12", rating: 4.9, featured: false }
  ];
  
  const categories = ['all', 'Fantasy', 'Adventure', 'Educational', 'Mystery'];
  
  const filteredBooks = books.filter(book => {
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const featuredBooks = books.filter(book => book.featured);
  
  return (
    <div className={styles.booksPage}>
      {/* Animated Background Elements */}
      <div className={styles.dreamyBackground}>
        {/* <div className={styles.cloud + ' ' + styles.cloud1}></div>
        <div className={styles.cloud + ' ' + styles.cloud2}></div>
        <div className={styles.cloud + ' ' + styles.cloud3}></div> */}
        <div className={styles.stars}></div>
        {/* <div className={styles.floatingBubbles}></div>
        <div className={styles.floatingBooks}></div> */}
      </div>
      
      {/* Main Content */}
      <div className={styles.dreamyContent}>
        <h1 className={styles.pageTitle + ' ' + styles.dreamyTitle}>
          <span className={styles.titleSparkle}>📚</span>
          Our Books
          <span className={styles.titleSparkle}>✨</span>
        </h1>
        
        <div className={styles.container}>
          {/* Search and Filter Section */}
          <div className={styles.filterSection}>
            <div className={styles.searchBox}>
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className={styles.clearSearch}>
                  ✕
                </button>
              )}
            </div>
            
            <div className={styles.categoryFilter}>
              <span className={styles.filterLabel}>✨ Filter by: </span>
              <div className={styles.categoryButtons}>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`${styles.categoryBtn} ${selectedCategory === category ? styles.activeCategory : ''}`}
                  >
                    {category === 'all' ? 'All Books' : category}
                    {category !== 'all' && (
                      <span className={styles.categoryEmoji}>
                        {category === 'Fantasy' ? '🐉' : category === 'Adventure' ? '🚀' : category === 'Educational' ? '📖' : '🔍'}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Featured Books Section */}
          {searchTerm === '' && selectedCategory === 'all' && (
            <div className={styles.featuredSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.rainbowLine}></div>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.titleIcon}>⭐</span>
                  Featured Stories
                  <span className={styles.titleIcon}>🌟</span>
                </h2>
                <div className={styles.rainbowLine}></div>
              </div>
              <div className={styles.featuredGrid}>
                {featuredBooks.slice(0, 4).map(book => (
                  <div key={book.id} className={styles.featuredCardWrapper}>
                    <BookCard book={book} showCategory={true} />
                    <div className={styles.featuredBadge}>Featured</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* All Books Section */}
          <div className={styles.booksSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.rainbowLine}></div>
              <h2 className={styles.sectionTitle}>
                <span className={styles.titleIcon}>📖</span>
                {selectedCategory === 'all' ? 'All Stories' : `${selectedCategory} Stories`}
                <span className={styles.titleIcon}>🌈</span>
              </h2>
              <div className={styles.rainbowLine}></div>
            </div>
            
            {filteredBooks.length > 0 ? (
              <>
                <div className={styles.resultsInfo}>
                  <p>Found {filteredBooks.length} magical {filteredBooks.length === 1 ? 'story' : 'stories'}</p>
                </div>
                <div className={styles.bookGrid}>
                  {filteredBooks.map(book => (
                    <BookCard key={book.id} book={book} showCategory={true} />
                  ))}
                </div>
              </>
            ) : (
              <div className={styles.noResults}>
                <div className={styles.noResultsIcon}>📚✨</div>
                <h3>No books found</h3>
                <p>Try searching with different keywords or explore other categories!</p>
                <button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }} className={styles.resetButton}>
                  Explore All Books
                </button>
              </div>
            )}
          </div>
          
          {/* Decorative Footer */}
          <div className={styles.footerNote}>
            <div className={styles.noteBubble}>
              <span className={styles.bubbleIcon}>📚</span>
              <p>Every book is a new adventure waiting to happen!</p>
              <span className={styles.bubbleIcon}>🌟</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksPage;