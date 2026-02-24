// pages/ContactPage.js
import React from 'react';

function ContactPage() {
  return (
    <div>
      <h1 className="page-title">Contact Us</h1>
      <div className="container">
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '40px'}}>
          <div style={{flex: '1', minWidth: '300px'}}>
            <h2 style={{color: 'var(--dark)', marginBottom: '20px', fontSize: '28px'}}>Get in Touch</h2>
            <form style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              <input type="text" placeholder="Your Name" style={{padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px'}} />
              <input type="email" placeholder="Your Email" style={{padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px'}} />
              <textarea placeholder="Your Message" rows="6" style={{padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', resize: 'vertical'}}></textarea>
              <button type="submit" className="btn" style={{alignSelf: 'flex-start'}}>
                Send Message
              </button>
            </form>
          </div>
          <div style={{flex: '1', minWidth: '300px'}}>
            <h2 style={{color: 'var(--dark)', marginBottom: '20px', fontSize: '28px'}}>Store Information</h2>
            <div style={{marginBottom: '25px'}}>
              <h3 style={{color: 'var(--dark)', marginBottom: '15px', fontSize: '20px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <i className="fas fa-map-marker-alt"></i> Address
              </h3>
              <p>123 Storybook Lane<br />Imagination City, IC 12345</p>
            </div>
            <div style={{marginBottom: '25px'}}>
              <h3 style={{color: 'var(--dark)', marginBottom: '15px', fontSize: '20px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <i className="fas fa-phone"></i> Phone
              </h3>
              <p>(555) 123-4567</p>
            </div>
            <div style={{marginBottom: '25px'}}>
              <h3 style={{color: 'var(--dark)', marginBottom: '15px', fontSize: '20px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <i className="fas fa-envelope"></i> Email
              </h3>
              <p>info@redfernstoryhouse.com</p>
            </div>
            <div style={{marginBottom: '25px'}}>
              <h3 style={{color: 'var(--dark)', marginBottom: '15px', fontSize: '20px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <i className="fas fa-clock"></i> Store Hours
              </h3>
              <p>Monday - Friday: 9am - 7pm<br />Saturday: 10am - 6pm<br />Sunday: 12pm - 5pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;