import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[8vw] md:px-[6vw] lg:px-[14vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-300 mt-4 text-lg font-medium max-w-2xl mx-auto">
          A collection of my work experience and the roles I have taken in organizations
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full hidden sm:block"></div>

        {/* Experience Items */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex flex-col sm:flex-row items-center mb-20 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle with Image */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-[#8245ec] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 shadow-lg overflow-hidden">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Content */}
            <div
              className={`w-full sm:max-w-md p-6 rounded-2xl border border-white/30 bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "sm:mr-16" : "sm:ml-16"
              } mt-20 sm:mt-0`}
            >
              {/* Company Info */}
              <div className="flex items-center space-x-4">
                {/* Company Logo */}
                <div className="w-14 h-14 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role + Company */}
                <div>
                  <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                  <h4 className="text-sm text-gray-400">{experience.company}</h4>
                  <p className="text-xs text-gray-500 mt-1">{experience.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-300 leading-relaxed">{experience.desc}</p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec] text-white/90 px-3 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400/40"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
