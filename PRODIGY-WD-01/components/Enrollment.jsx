import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSave, FaUser, FaMobileAlt, FaEnvelope, FaMapMarkerAlt, FaUserAlt, FaMapPin, FaGlobe } from 'react-icons/fa';
import './Enrollment.css';
const Enrollment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    altMobile: '',
    email: '',
    age: '',
    address: {
      houseNo: '',
      streetName: '',
      area: '',
      pincode: '',
      state: '',
      nationality: ''
    }
  });
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [checkPass, setCheckPass] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value
      }
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    if (!formData.fullName || !formData.mobile || !formData.altMobile || !formData.email || !formData.age || !formData.address.houseNo || !formData.address.streetName || !formData.address.area || !formData.address.pincode || !formData.address.state || !formData.address.nationality) {
      alert('Please fill in all required fields.');
      return;
    }
    // Add your form submission logic here
    setCheckPass(true);
    setShowPopup(true);
    console.log(formData);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    if (checkPass) {
      navigate('/userdashboard');
      // Navigate to the dashboard or any other page upon successful submission
      // Replace '/userdashboard' with the desired path
      // Example: navigate('/dashboard');
    }
  };

  return (
    <div className="pt-28 pb-28" >
    <div className="bg-gradient-to-br from-purple-200 via-pink-300 to-blue-200 min-h-screen p-8">
   
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8 text-green">Enrollment Form</h2>
        <div className="mb-4 flex items-center">
          <FaUser className="text-orange-400 mr-2" />
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="form-input mt-1 block w-full rounded-md border-gray-300" />
        </div>
        <div className="mb-4 flex items-center">
          <FaMobileAlt className="text-gray-400 mr-2" />
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile" className="form-input mt-1 block w-full rounded-md border-gray-300" />
        </div>
        <div className="mb-4 flex items-center">
          <FaMobileAlt className="text-gray-400 mr-2" />
          <input type="text" name="altMobile" value={formData.altMobile} onChange={handleChange} placeholder="Alternative Mobile" className="form-input mt-1 block w-full rounded-md border-gray-300" />
        </div>
        <div className="mb-4 flex items-center">
          <FaEnvelope className="text-gray-400 mr-2" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email ID" className="form-input mt-1 block w-full rounded-md border-gray-300" />
        </div>
        <div className="mb-4 flex items-center">
          <FaUserAlt className="text-gray-400 mr-2" />
          <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Age" className="form-input mt-1 block w-full rounded-md border-gray-300" />
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            <input type="text" name="houseNo" value={formData.address.houseNo} onChange={handleAddressChange} placeholder="House No" className="form-input mt-1 block w-full rounded-md border-gray-300" />
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            <input type="text" name="streetName" value={formData.address.streetName} onChange={handleAddressChange} placeholder="Street Name" className="form-input mt-1 block w-full rounded-md border-gray-300" />
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            <input type="text" name="area" value={formData.address.area} onChange={handleAddressChange} placeholder="Area" className="form-input mt-1 block w-full rounded-md border-gray-300" />
          </div>
          <div className="flex items-center">
            <FaMapPin className="text-gray-400 mr-2" />
            <input type="text" name="pincode" value={formData.address.pincode} onChange={handleAddressChange} placeholder="Pincode" className="form-input mt-1 block w-full rounded-md border-gray-300" />
          </div>
          <div className="flex items-center">
            <FaMapPin className="text-gray-400 mr-2" />
            <input type="text" name="state" value={formData.address.state} onChange={handleAddressChange} placeholder="State" className="form-input mt-1 block w-full rounded-md border-gray-300" />
          </div>
          <div className="flex items-center">
            <FaGlobe className="text-gray-400 mr-2" />
            <input type="text" name="nationality" value={formData.address.nationality} onChange={handleAddressChange} placeholder="Nationality" className="form-input mt-1 block w-full rounded-md border-gray-300" />
          </div>
        </div>
        <center>
        <button type="submit" className="btn btn-lg btn-orange justify-center rounded-full">
          <FaSave className="inline-block mr-2" />
          Submit
        </button>
        </center>
      </form>
    </div>
    {/* Popup message */}
    {showPopup && (
        <div className={`popup-container ${showPopup ? 'visible' : ''}`}>
          <div className={`popup-content ${showPopup ? 'visible' : ''}`}>
            <div className="popup">
              <div className="popup-inner">
                <p className="text-lg mb-4 text-center rounded-full text-heading font-cursive font-bold" style={{ color: 'white' }}>
                  {checkPass ? 'You Have Enrolled Successfully' : 'Invalid Credentials'}
                </p>
                <button onClick={handleClosePopup} className="bg-orange text-white py-3 px-6 rounded-full hover:bg-white-hover focus:outline-none focus:shadow-outline-orange">ok</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enrollment;
