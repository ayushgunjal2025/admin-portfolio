import React from 'react';
import './Card.css'; // Import the CSS file for styling

function Card({ id, name, email, subject, message }) {
  const handleEmail = () => {
    window.open(`mailto:${email}`, '_blank');
  };

  return (
    <div className="card-container">
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Subject:</strong> {subject}</p>
      <p><strong>Message:</strong> {message}</p>
      <button onClick={handleEmail}>Send Email</button>
    </div>
  );
}

export default Card;
