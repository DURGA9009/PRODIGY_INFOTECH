// UserSignUp.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUserPlus, FaTransgender, FaMapMarkerAlt } from 'react-icons/fa';
import backgroundVideo from '../assets/img/background.mp4';
import Logo from '../assets/img/logo.png';
import './UserSignUp.css';

const UserSignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConPassword] = useState('');
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [fullname, setFullname] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [checkpass, setCheckPass] = useState(false);
  const handleSignUp = (e) => {
    e.preventDefault();
    
    // Validation logic
    if (!username || !gender  || !location || !email || !password || !fullname || !conpassword) {
      alert('Please fill in all required fields.');
      return;
    }
    // Add your sign-up logic here
    setCheckPass(true);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    if (checkpass) {
      navigate('/userdashboard');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center mt-4 pb-20">
      <div className="flex container mx-auto p-6 lg:p-12 bg-section rounded-lg shadow-primary relative">
        {/* Left Side - Form */}
        <div className="flex-1 bg-white p-8 rounded shadow-md animate-slidein">
          <h2 className="text-3xl font-semibold mb-6 text-center text-heading animate-slidein">
            <FaUserPlus className="mr-2 inline-block text-orange" />
            Sign Up
          </h2>
          <form onSubmit={handleSignUp}>
            <div className="grid grid-cols-2 gap-6">
              {/* Name */}
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2 animate-slidein">
                  Username:
                </label>
                <input
                  type="text"
                  className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

               {/* Full Name */}            {/* Full Name */}
            <div className="mb-6">
              <label className="block text-gray-600 text-sm font-medium mb-2 animate-slidein" >
                Full Name:
              </label>
              <input
                type="text"
                className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>

              {/* Gender */}
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2 animate-slidein">
                  Gender:
                </label>
                <input
                  type="text"
                  className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
              </div>
              
              {/* Location */}
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2 animate-slidein">
                  Location:
                </label>
                <input
                  type="text"
                  className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-gray-600 text-sm font-medium mb-2 animate-slidein">
                <FaEnvelope className="mr-2 inline-block text-orange" />
                Email:
              </label>
              <input
                type="email"
                className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-gray-600 text-sm font-medium mb-2 animate-slidein">
                <FaLock className="mr-2 inline-block text-orange" />
                Password:
              </label>
              <input
                type="password"
                className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label className="block text-gray-600 text-sm font-medium mb-2 animate-slidein">
                <FaLock className="mr-2 inline-block text-orange" />
                Confirm Password:
              </label>
              <input
                type="password"
                className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={conpassword}
                  onChange={(e) => setConPassword(e.target.value)}
                  required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-orange text-white py-3 px-6 rounded-full hover:bg-orange-hover focus:outline-none focus:shadow-outline-orange animate-slidein"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-4 text-gray-600 text-sm text-center animate-slidein" >
            Already have an account?{' '}
            <a href="/login" className="text-orange hover:underline font-bold animate-slidein">
              Log in here.
            </a>
          </p>

        </div>

        {/* Right Side - Video */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <center>
              <a href='#'>
                <img src={Logo} alt='' />
              </a>
            </center>
            <h1 className="h2 mb-12 max-w-[295px] md:max-w-none animate-slidein " >HEAL WITH YOGA!</h1>
            <h1 className="text-lg mb-8 text-center text-heading font-cursive font-bold text-wblack animate-slidein">
              The Ultimate Destination To Yogism...
            </h1>
          </div>
          {/* Alert message */}
                 {showPopup && (
  
     <div className={`popup-container ${showPopup ? 'visible' : ''}`}>
    <div className={`popup-content ${showPopup ? 'visible' : ''}`}>
      <div className="popup">
        <div className="popup-inner">
          <p className="text-lg mb-4 text-center rounded-full text-heading font-cursive font-bold" style={{ color: 'white' }}>
            {checkpass ? 'Successfully Logged In' : 'Invalid Credentials'}
          </p>
          <button onClick={handleClosePopup} className="bg-orange text-white py-3 px-6 rounded-full hover:bg-white-hover focus:outline-none focus:shadow-outline-orange">ok</button>
        
      </div>
      </div>
    </div>
  </div>
)}



        </div>
      </div>
    </div>
  );
};

export default UserSignUp;

