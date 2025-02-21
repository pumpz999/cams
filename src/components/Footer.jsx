import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="disclaimer">
          <h3>Safety & Disclaimer</h3>
          <p>
            This platform is intended for adults only (18+). All models are verified
            and of legal age. We prioritize user safety and privacy. Please use
            responsibly.
          </p>
        </div>
        
        <div className="api-info">
          <h3>API Information</h3>
          <p>
            Powered by XloveCam API v2.0. Real-time data updates. Secure
            connections only.
          </p>
        </div>
        
        <div className="legal">
          <p>&copy; {new Date().getFullYear()} XxxCams.org</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
