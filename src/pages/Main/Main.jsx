import React, { useState } from 'react';
import './Main.css';

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
      <h1 className="heading">“SUKRIT”</h1>
      {/* Render the hamburger menu button only for smaller screens */}
      {window.innerWidth <= 768 && (
        <div className='menu-button'>
          <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            {menuOpen ? 'X' : '☰'}
          </button>
        </div>
      )}
      <p className={`menu-content ${menuOpen ? 'open' : ''}`}>
        HyperText Markup Language&ensp;&ensp;&ensp;&ensp;&ensp;Cascading Style Sheets&ensp;&ensp;&ensp;&ensp;&ensp;JavaScript&ensp;&ensp;&ensp;&ensp;&ensp;Responsive Web Design
        <br /> Mobile-First Design&ensp;&ensp;&ensp;&ensp;Build Tools&ensp;&ensp;&ensp;&ensp;UX (User Experience) Design&ensp;&ensp;&ensp;&ensp;Front-End Frameworks&ensp;&ensp;&ensp;&ensp;Version Control/Git
        <br />Web Accessibility&ensp;&ensp;&ensp;&ensp;&ensp;Cross-Browser Compatibility&ensp;&ensp;&ensp;&ensp;&ensp;CSS Preprocessors&ensp;&ensp;&ensp;&ensp;&ensp;UI (User Interface) Design&ensp;&ensp;&ensp;&ensp;&ensp;Package Managers
        <br />Front-End Performance Optimization&ensp;&ensp;&ensp;&ensp;&ensp;Browser DevTools&ensp;&ensp;&ensp;&ensp;&ensp;Responsive Images&ensp;&ensp;&ensp;&ensp;&ensp;CSS Grid and Flexbox&ensp;&ensp;&ensp;&ensp;&ensp;Web APIs
        <br />AJAX (Asynchronous JavaScript and XML)&ensp;&ensp;&ensp;&ensp;&ensp;Progressive Web Apps (PWAs)&ensp;&ensp;&ensp;&ensp;&ensp;Typography&ensp;&ensp;&ensp;&ensp;&ensp;Front-End Testing
        <br />JSX (JavaScript XML)&ensp;&ensp;&ensp;&ensp;Components&ensp;&ensp;&ensp;&ensp;Props(Properties)&ensp;&ensp;&ensp;&ensp;State&ensp;&ensp;&ensp;&ensp;State Management&ensp;&ensp;&ensp;&ensp;Hooks
        <br />Lifecycle Methods&ensp;&ensp;&ensp;&ensp;Functional&ensp;&ensp;&ensp;&ensp;Components&ensp;&ensp;&ensp;&ensp;Context API&ensp;&ensp;&ensp;&ensp;Virtual DOM&ensp;&ensp;&ensp;&ensp;React Router&ensp;&ensp;&ensp;&ensp;Context&ensp;&ensp;&ensp;&ensp;
      </p>
      <p className={`menu-content2 ${menuOpen ? 'open' : 'closed'}`}>
        HyperText Markup Language<br />
        Cascading Style Sheets<br />
        JavaScript<br />
        Responsive Web Design<br />
        Mobile-First Design<br />
        Build Tools<br />
        UX (User Experience) Design<br />
        Front-End Frameworks<br />
        Version Control/Git<br />
        Web Accessibility<br />
        Cross-Browser Compatibility<br />
        CSS Preprocessors<br />
        UI (User Interface) Design<br />
        Package Managers<br />
        Front-End Performance Optimization<br />
        Browser DevTools<br />
        Responsive Images<br />
        CSS Grid and Flexbox<br />
        Web APIs<br />
        AJAX (Asynchronous JavaScript and XML)<br />
        Progressive Web Apps (PWAs)<br />
        Typography<br />
        Front-End Testing<br />
        JSX (JavaScript XML)<br />
        Components<br />
        Props(Properties)<br />
        State<br />
        State Management<br />
        Hooks<br />
        Lifecycle Methods<br />
        Functional Components<br />
        Context API<br />
        Virtual DOM<br />
        React Router<br />
        Context
      </p>

      <div className="main-button">
      <a href="https://forms.gle/LhX2DYEqTsANvwMR6" >
        <button className="main-button">GET INFO</button>
      </a>
        {/* <button className="main-button">GET INFO</button> */}
      </div>

    </div>
  );
};

export default Main;