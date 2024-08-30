// Example: LandingPage.js
import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import backgroundVideo from '../assets/img/background.mp4';
import './LandingPage.css'; // You can define additional styles here

const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center animate-slidein">
        
      <div className="container mx-auto p-6 lg:p-12 bg-section rounded-lg shadow-primary relative">
        <video autoPlay loop muted playsInline className="video-bg">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className="content">
          <div className="mb-8">
            {/* ... rest of the code ... */}
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-4 text-center text-heading text-white animate-slidein">
            Discover Tranquility Through Yoga
          </h2>
          <p className="text-lg mb-6 text-center text-paragraph text-white animate-slidein">
            Choose your sign-up option:
          </p>

          <div className="button-row">
            <Link to="/usersignup">
              <button className="btn btn-lg btn-orange mb-4 flex items-center justify-center animate-slidein">
                <FaUser className="mr-2" />
                Sign In 
              </button>
            </Link>

            <Link to="/adminsignup">
              <button className="btn btn-lg btn-orange flex items-center justify-center animate-slidein">
                <FaLock className="mr-2" />
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
