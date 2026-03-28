// pages/ContactPage.js
import React, { useState } from 'react';
import styles from './css/ContactPage.module.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className={styles.contactPage}>
      {/* Animated Background Elements */}
      <div className={styles.dreamyBackground}>
        {/* <div className={styles.cloud + ' ' + styles.cloud1}></div>
        <div className={styles.cloud + ' ' + styles.cloud2}></div>
        <div className={styles.cloud + ' ' + styles.cloud3}></div>
        <div className={styles.stars}></div>
        <div className={styles.floatingBubbles}></div> */}
        <div className={styles.floatingStars}></div>
      </div>

      {/* Main Content */}
      <div className={styles.dreamyContent}>
        <h1 className={styles.pageTitle + ' ' + styles.dreamyTitle}>
          <span className={styles.titleSparkle}>📬</span>
          Contact Us
          <span className={styles.titleSparkle}>✨</span>
        </h1>
        
        <div className={styles.container + ' ' + styles.dreamyContainer}>
          <div className={styles.contactWrapper}>
            {/* Contact Form Section */}
            <div className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.rainbowLine}></div>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.titleIcon}>✏️</span>
                  Send Us a Message
                  <span className={styles.titleIcon}>💌</span>
                </h2>
                <div className={styles.rainbowLine}></div>
              </div>
              
              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>🎉</div>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      <i className="fas fa-user"></i> Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="What's your name?"
                      className={styles.formInput}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      <i className="fas fa-envelope"></i> Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={styles.formInput}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      <i className="fas fa-comment"></i> Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what's on your mind... 📖✨"
                      rows="6"
                      className={styles.formTextarea}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className={styles.submitButton}>
                    <span className={styles.buttonIcon}>✉️</span>
                    Send Message
                    <span className={styles.buttonIcon}>🌟</span>
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Information Section */}
            <div className={styles.infoSection}>
              <div className={styles.infoCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.rainbowLine}></div>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.titleIcon}>🌈</span>
                    Let's Connect
                    <span className={styles.titleIcon}>🤗</span>
                  </h2>
                  <div className={styles.rainbowLine}></div>
                </div>
                
                <div className={styles.infoContent}>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className={styles.infoText}>
                      <h3>Email Us</h3>
                      <a href="mailto:info@redfernstoryhouse.com" className={styles.infoLink}>
                        info@redfernstoryhouse.com
                      </a>
                      <p>We'll respond within 24-48 hours</p>
                    </div>
                  </div>
                  
                  
                  
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <i className="fas fa-heart"></i>
                    </div>
                    <div className={styles.infoText}>
                      <h3>We Love Hearing From You!</h3>
                      <p>Whether it's a question, suggestion, or just to say hello, we're here for you.</p>
                    </div>
                  </div>
                </div>
                
                <div className={styles.socialLinks}>
                  <h3 className={styles.socialTitle}>Follow Our Story</h3>
                  <div className={styles.socialIcons}>
                    <a href="#" className={styles.socialIcon} aria-label="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className={styles.socialIcon} aria-label="Instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className={styles.socialIcon} aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className={styles.socialIcon} aria-label="Pinterest">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Footer Message */}
          <div className={styles.footerMessage}>
            <div className={styles.messageBubble}>
              <span className={styles.bubbleIcon}>📚</span>
              <p>We can't wait to hear from you! Every message is a new story waiting to begin.</p>
              <span className={styles.bubbleIcon}>✨</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;