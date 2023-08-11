import React from 'react';
import './Footer.css'
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h2>“CONNECT ON”</h2>
        <div className="social-links">
          <a href="www.linkedin.com/in/sukrit37" target="_blank" rel="noopener noreferrer">
            <button>LinkedIn</button>
          </a>
          <a href="https://github.com/Sukrit3007" target="_blank" rel="noopener noreferrer">
            <button>GitHub</button>
          </a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Sukrit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
