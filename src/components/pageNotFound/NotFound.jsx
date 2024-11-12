import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';
import notFoundImage from '../../assets/notFoundImage.jpg'; 

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <img src={notFoundImage} alt="Not Found" className="not-found-image" />
      <h1 className="not-found-heading">Oops! Page Not Found</h1>
      <p className="not-found-message">
        It seems that the page you’re looking for doesn’t exist. It might have been moved or deleted.
      </p>
      <button className="not-found-button" onClick={goHome}>
        Return Home
      </button>
    </div>
  );
};

export default NotFound;
