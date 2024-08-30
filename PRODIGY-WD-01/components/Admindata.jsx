import React, { useState } from 'react';
import { FaUserEdit, FaSave } from 'react-icons/fa';
import './Userdata.css';
const Admindata = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    username: 'JasonStaley',
    fullName: 'Jason Staley',
    gender: 'Male',
    location: 'New York',
    email: 'jason@example.com',
    height: '',
    weight: '',
    bmi: '',
    previousHealthHabits: '',
    maritalStatus: '',
    joinedInstitution: '',
    enrolledCourse: '',
    paymentInfo: '',
  });

  const [editableProfile, setEditableProfile] = useState({ ...profile });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditableProfile({ ...editableProfile, [name]: value });
  };

  const handleSaveChanges = (event) => {
    event.preventDefault();
    setProfile(editableProfile);
    setIsEditing(false);
  };

  return (
    <div className = "pt-28">
    <div className="bg-gray-100 min-h-screen flex items-center justify-center mt-4">
      <div className="container mx-auto p-6 lg:p-12 bg-white rounded-lg shadow-primary relative">
        <h2 className="text-3xl font-semibold mb-6 text-center text-heading">
          Admin Profile
        </h2>

        {/* Profile Details/Editing Form */}
        <div className="bg-section rounded-lg shadow-md p-8">
          {isEditing ? (
            <form onSubmit={handleSaveChanges} className="bg-section rounded-lg shadow-md p-8">

              {/* Editable Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-6 flex items-center bg-white rounded-lg">
              <div className="p-2">
                 <FaUserEdit />
             </div>
                <input
                  type="text"
                  name="username"
                  value={editableProfile.username}
                  onChange={handleInputChange}
                  className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Full Name:
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={editableProfile.fullName}
                  onChange={handleInputChange}
                  className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {/* Repeat for other fields */}

              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={editableProfile.email}
                  onChange={handleInputChange}
                  className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Gender
                </label>
                <input
                  type="text"
                  name="gender"
                  value={editableProfile.gender}
                  onChange={handleInputChange}
                  className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={editableProfile.location}
                  onChange={handleInputChange}
                  className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Height
                </label>
                <input
                  type="text"
                  name="height"
                  value={editableProfile.height}
                  onChange={handleInputChange}
                  className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Weight
                </label>
                <input
                  type="text"
                  name="weight"
                  value={editableProfile.weight}
                  onChange={handleInputChange}
                  className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              

              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  BMI
                </label>
                <input
                  type="text"
                  name="bmi"
                  value={editableProfile.bmi}
                  onChange={handleInputChange}
                  className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              

              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Previous Health Habits
                </label>
                <input
                  type="text"
                  name="username"
                  value={editableProfile.previousHealthHabits}
                  onChange={handleInputChange}
                  className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              

            
              
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Joined Institution
                </label>
                <input
                  type="text"
                  name="username"
                  value={editableProfile.joinedInstitution}
                  onChange={handleInputChange}
                  className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Enrolled course
                </label>
                <input
                  type="text"
                  name="username"
                  value={editableProfile.enrolledCourse}
                  onChange={handleInputChange}
                  className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Payment Info
                </label>
                <input
                  type="text"
                  name="username"
                  value={editableProfile.paymentInfo}
                  onChange={handleInputChange}
                  className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              
              <div className="flex mt-4">
              
              <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 focus:outline-none focus:shadow-outline flex items-center "
                onClick={() => setIsEditing(true)}
            
              >
                <FaUserEdit className="inline mr-2" />
                Edit Profile
              </button>
              
            </div>
            
              {/* Save Changes Button */}
              <div className="flex mt-4">
                <button
                  type="submit"
                  className="bg-orange-500 text-black py-2 px-4 rounded-full hover:bg-orange-600 focus:outline-none focus:shadow-outline flex items-center
                  "
                >
                  <FaSave className="inline mr-2" />
    
                  Save Changes
                </button>
              </div>
              </div>
            </form>
          ) : (
            <div>
              {/* Display Profile Details */}
              <div className="grid grid-cols-2 gap-6">
              <div className="mb-6" >
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Username:
                </label>
                <p className="bg-white w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{profile.username}</p>
                </div>
              <div className="mb-6">
              
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Full Name:
                </label>
                <p className="bg-white w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{profile.fullName}</p>
              
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Gender
                </label>
                <p className="bg-white w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{profile.gender}</p>
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Location
                </label>
                <p className="bg-white w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{profile.location}</p>
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Email
                </label>
                <p className="bg-white w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{profile.email}</p>
              </div>
              <div className="mb-6">
                <label className="bg-white block text-gray-600 text-sm font-medium mb-2">
                  Height:
                </label>
                <p className="bg-white w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{profile.height}</p>
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Weight
                </label>
                <p className="bg-white w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{profile.weight}</p>
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  BMi:
                </label>
                <p className="bg-white w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{profile.bmi}</p>
              </div><div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Previous Health Habits:
                </label>
                <p className="bg-white w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{profile.previousHealthHabits}</p>
              </div>
             
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Joined Institution:
                </label>
                <p className="bg-white w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{profile.joinedInstitution}</p>
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Enrolled Course:
                </label>
                <p className="bg-white w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{profile.enrolledCourse}</p>
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Payment Info:
                </label>
                <p className="bg-white w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{profile.paymentInfo}</p>
              </div>
              {/* Repeat for other fields */}
              
              {/* Edit Profile Button */}
              <div className="flex mt-4">
              
                <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 focus:outline-none focus:shadow-outline flex items-center justify-center"
                  onClick={() => setIsEditing(true)}
              
                >
                  <FaUserEdit className="inline mr-2" />
                  Edit Profile
                </button>
                
              </div>
            </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Admindata;
