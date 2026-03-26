// pages/AboutPage.js
import React from 'react';
import MissionCard from '../Components/MissionCard';
import styles from './css/About.module.css';

function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* Animated Background Elements */}
      <div className={styles.dreamyBackground}>
        {/* <div className={styles.cloud + ' ' + styles.cloud1}></div>
        <div className={styles.cloud + ' ' + styles.cloud2}></div>
        <div className={styles.cloud + ' ' + styles.cloud3}></div>
        <div className={styles.stars}></div>
        <div className={styles.floatingBubbles}>
        </div> */}
      </div>

      {/* Main Content */}
      <div className={styles.dreamyContent}>
         <div className={styles.stars}></div>
        <h1 className={styles.pageTitle + ' ' + styles.dreamyTitle}>
          <span className={styles.titleSparkle}>✨</span>
              About Redfern Storyhouse
          <span className={styles.titleSparkle}>✨</span>
        </h1>
         <div className={styles.stars}></div>
        <div className={styles.container + ' ' + styles.dreamyContainer}>
          <div className={styles.aboutSection + ' ' + styles.dreamySection}>
            <div className={styles.storyCard}>
              <p className={styles.dreamyText}>
                At Redfern Storyhouse, we believe every child deserves to see themselves in the pages of a book — to dream, to wonder, to laugh, and to learn. Born from a passion for storytelling and a mission to spark young imaginations, we are a children's book publishing house committed to creating vibrant, inclusive, and meaningful stories that young readers will cherish for years to come.
              </p>
            </div>

            <div className={styles.storyCard}>
              <p className={styles.dreamyText}>
                From picture books that become bedtime favorites to chapter books that inspire discovery and growth, our titles celebrate curiosity, kindness, and creativity. We collaborate with passionate authors and talented illustrators to bring unforgettable characters and adventures to life — all while upholding the highest standards of storytelling and design.
              </p>
            </div>

            <div className={styles.storyCard}>
              <p className={styles.dreamyText}>
                At our heart, we believe in the power of books to shape minds, open hearts, and build bridges across cultures and generations. Whether it's a child's very first book or their next great read, we're here to nurture a lifelong love of reading.
              </p>
            </div>

            <div className={styles.storyCard}>
              <p className={styles.dreamyText}>
                Welcome to our story. Let's grow young readers together.
              </p>
            </div>
            
            <div className={styles.missionHeader}>
              <div className={styles.rainbowLine}></div>
              <h2 className={styles.dreamySubtitle}>🌟 Our Mission 🌟</h2>
              <div className={styles.rainbowLine}></div>
            </div>
            
            <div className={styles.storyCard + ' ' + styles.missionCardLarge}>
              <p className={styles.dreamyText + ' ' + styles.missionText}>
                At Redfern Storyhouse, our mission is to ignite a lifelong love of reading by publishing children's books that reflect the rich diversity of our world. We believe every child deserves to see themselves — and others — in the stories they read. Through inclusive, educational, and imaginative books, we aim to nurture curiosity, empathy, and confidence in young minds.
              </p>
            </div>
            
            <div className={styles.missionGrid}>
              <MissionCard title="What We Do" icon="fas fa-heart" className={styles.dreamyMissionCard}>
                <p className={styles.missionCardText}>We create and publish high-quality children's books that celebrate diverse cultures, languages, and experiences; support early literacy and language development; encourage imagination, emotional intelligence, and discovery; and engage children through vibrant storytelling and captivating illustrations.</p>
                <p className={styles.missionCardText}>From bilingual board books to early chapter books, our titles are designed to be both joyful and meaningful — perfect for homes, classrooms, and libraries around the world.</p>
              </MissionCard>
              
              <MissionCard title="Who We Work With" icon="fas fa-handshake" className={styles.dreamyMissionCard}>
                <p className={styles.missionCardText}>We proudly collaborate with authors and illustrators from a wide range of backgrounds and cultures; educators, language specialists, and child development experts; and families and communities who believe in the power of inclusive storytelling.</p>
                <p className={styles.missionCardText}>Together, we strive to ensure every book we publish is a step toward greater understanding, connection, and joy.</p>
              </MissionCard>
              
              <MissionCard title="Why It Matters" icon="fas fa-star" className={styles.dreamyMissionCard}>
                <p className={styles.missionCardText}>Representation matters. Language matters. Stories matter.</p>
                <p className={styles.missionCardText}>When children see themselves reflected in books — and are introduced to worlds beyond their own — they grow up more confident, compassionate, and curious. That's why we're committed to publishing stories that open minds and celebrate every child's potential.</p>
              </MissionCard>
            </div>
            
            <div className={styles.joinSection}>
              <div className={styles.rainbowLine}></div>
              <h2 className={styles.dreamySubtitle}>📚 Join Our Story 🌈</h2>
              <div className={styles.rainbowLine}></div>
            </div>
            
            <div className={styles.storyCard + ' ' + styles.joinCard}>
              <p className={styles.dreamyText}>
                Whether you're a parent, teacher, librarian, or book lover, we invite you to be part of our journey. Let's raise a generation of readers who are not only smart and imaginative — but also kind, open-minded, and proud of who they are.
              </p>
            </div>
            
            <div className={styles.welcomeClosing}>
              <p className={styles.dreamyWelcomeText}>
                Welcome to Redfern Storyhouse — where every child belongs in the story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;