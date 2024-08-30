import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Nav from './Nav';
import NavMobile from './NavMobile';
import Logo from '../assets/img/logo.png';

const Header = () => {
  const [header, setHeader] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false);
    });
  }, [header]);

  const handleSignUp = () => {
    console.log('Sign Up button clicked');
    // Navigate to the LandingPage component when Sign Up is clicked
    navigate('/landing');
  };

  return (
    <center>
    <header
      className={`${
        header ? 'top-0 h-[80px]' : 'top-9'
      } fixed bg-white w-full max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 z-20 transition-all duration-500 flex items-center justify-between`}
    >
      <div className='flex items-center'>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        <div className='hidden lg:flex'>
          <Nav />
        </div>
      </div>
      <div className='flex items-center'>
        <div className='flex gap-x-4 lg:gap-x-9'>
          <button
            className='text-heading font-medium text-sm lg:text-base hover:text-orange transition'
          >
            Sign Up
          </button>
          <button
            className='btn btn-md lg:px-[30px] bg-orange-100 border border-orange text-orange font-medium text-sm lg:text-base hover:bg-orange-200 hover:text-white transition'
            onClick={handleSignUp}
          >
            Sign In
          </button>
        </div>
        <NavMobile />
      </div>
    </header>
    </center>
  );
};

export default Header;
