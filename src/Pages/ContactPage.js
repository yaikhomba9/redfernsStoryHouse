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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // REMOVED: Hardcoded tokens - NO LONGER HERE!

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (error) setError('');
  };

  const sendToBackend = async (data) => {
    // Call your backend API instead of Telegram directly
    const response = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message
      })
    });

    console.log("response>>>>>>>>>",response);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send message');
    }

    return await response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Send to your backend (not directly to Telegram)
      await sendToBackend(formData);
      
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
      
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.contactPage}>
      {/* Animated Background Elements */}
      <div className={styles.dreamyBackground}>
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
                <>
                  {error && (
                    <div className={styles.errorMessage}>
                      <div className={styles.errorIcon}>⚠️</div>
                      <p>{error}</p>
                    </div>
                  )}
                  
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
                        disabled={isLoading}
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
                        disabled={isLoading}
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
                        disabled={isLoading}
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className={styles.submitButton}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <span className={styles.buttonIcon}>⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <span className={styles.buttonIcon}>✉️</span>
                          Send Message
                          <span className={styles.buttonIcon}>🌟</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
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