import React from "react";
import { education } from "../../constants"; // Import education data

const Education = () => {
  return (
    <section
      id="education"
      className="mt-32 py-24 px-[8vw] md:px-[6vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-300 mt-4 text-lg font-medium max-w-2xl mx-auto">
          My education has been a journey of learning and development.  
          Here are the details of my academic background:
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-500 h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-purple-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 shadow-lg">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-3/4 h-3/4 object-contain rounded-full"
              />
            </div>

            {/* Content Box */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-xl border border-purple-400/40 bg-gray-900/80 backdrop-blur-md transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "sm:ml-20 text-left" : "sm:mr-20 text-left"
              }`}
            >
              {/* School & Degree */}
              <div className="flex items-center space-x-4">
                <div className="w-20 h-14 bg-white rounded-md overflow-hidden shadow">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm sm:text-base text-gray-300">
                    {edu.school}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Grade & Description */}
              <p className="mt-4 text-purple-300 font-semibold">
                Grade: {edu.grade}
              </p>
              <p className="mt-2 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
