import React from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { institutions } from './InstitutionData';
import './Institution.css'; // Make sure this path is correct

const InstitutionCourses = () => {
  const { institutionId } = useParams();
  const institution = institutions.find(inst => inst.id === Number(institutionId));

  if (!institution) {
    return (
      <div className="text-center text-red-500">
        Institution not found
      </div>
    );
  }

  const navigate = useNavigate();
  const enrollInCourse = (courseId) => {
    // Placeholder for whatever enrollment logic you might have
    console.log(`Enrolling in course with ID: ${courseId}`);
    navigate('/payment');
    // You might want to link this function to your state management or backend to actually handle enrollment
  };

  return (
    <div className="pt-20 pb-20" >
       <div className="pt-28 pb-28" >
    <div className="container mx-auto mt-5 p-4">
      <h2 className="text-2xl font-semibold text-center mb-6">{institution.title} Courses</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {institution.courses.map(course => (
          <div key={course.id} className="flex flex-col items-center p-6 bg-white shadow-primary rounded-lg mb-4">
            <span className="text-4xl mb-2">📘</span> {/* Replace with actual icons */}
            <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{course.description}</p>
            <p className="text-xs text-gray-500 flex items-center mb-1">⏱️ Duration: {course.duration}</p>
            <p className="text-xs text-gray-500 flex items-center">👤 Instructor: {course.instructor}</p>
           
          </div>
        ))}
      </div>
      <center>
      <button 
              className="btn btn-lg btn-orange justify-center mr-4 "
              onClick={() => enrollInCourse()}
            >
              Enroll
            </button>
            </center>
    </div>
    </div>
    </div>
  );
};

export default InstitutionCourses;
