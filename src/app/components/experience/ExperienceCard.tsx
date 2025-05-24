import React from 'react';

interface Project {
  domain: string;
  description: string;
  techStack: string[];
}

interface ExperienceData {
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  projects: Project[];
}

interface ExperienceCardProps {
  experience: ExperienceData;
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  return (
    <div className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
      
      {/* Content */}
      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 pl-12 md:pl-0' : 'md:pl-8 pl-12 md:pr-0'}`}>
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900">{experience.position}</h3>
            <h4 className="text-lg font-semibold text-blue-600">{experience.company}</h4>
            <p className="text-sm text-gray-500">{experience.duration}</p>
            <p className="text-sm text-gray-500">{experience.location} · {experience.type}</p>
          </div>
          
          <div className="space-y-4">
            {experience.projects.map((project, projectIndex) => (
              <div key={projectIndex} className="border-l-4 border-blue-200 pl-4">
                <h5 className="font-semibold text-gray-800 mb-2">{project.domain}</h5>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Spacer for alternating layout */}
      <div className="hidden md:block w-2/12"></div>
    </div>
  );
};

export default ExperienceCard