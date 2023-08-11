import React from 'react';
import './FormPage.css';

function FormPage() {
  return (
    <div className="contact-container ">
      <div className="form-container">
        <h1>“CONTACT ME”</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FormPage;
