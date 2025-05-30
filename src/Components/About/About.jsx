import React from 'react';
import CountUp from 'react-countup';

const About = () => {
  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-100">About Us</h2>
      <p className="text-center max-w-3xl mx-auto text-lg text-gray-400 mb-10">
        Our platform aims to provide high-quality education in programming, marketing, and graphic design. We help you enhance your skills through comprehensive and continuously updated content, led by a team of experts.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h3 className="text-2xl font-bold text-indigo-600">
            <CountUp end={10000} duration={20} separator="," />+
          </h3>
          <p className="text-gray-700 mt-2">Registered Learners</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h3 className="text-2xl font-bold text-indigo-600">
            <CountUp end={120} duration={20} />+
          </h3>
          <p className="text-gray-700 mt-2">Courses</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h3 className="text-2xl font-bold text-indigo-600">
            <CountUp end={98} duration={20} />%
          </h3>
          <p className="text-gray-700 mt-2">Student Satisfaction</p>
        </div>
      </div>
    </section>
  );
};

export default About;
