// Institution.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { institutions } from './InstitutionData'; // Adjust the path as necessary

const Institution = () => {
  return (
    <section className="section-sm lg:section-lg">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-10 mb-7 lg:mb-14">
          {institutions.map((institution) => (
            <div className="bg-white rounded-lg shadow-primary p-6" key={institution.id}>
              <div>
                <img src={institution.image} alt="" className="w-full mb-4" />
                <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">
                  {institution.title}
                </h4>
                <p>{institution.desc}</p>
                <div className="flex justify-end mt-4 ml-6">
                <Link to={`/courses/${institution.id}`} className="btn btn-sm btn-orange">
                  View Courses
                </Link>
              </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Institution;
