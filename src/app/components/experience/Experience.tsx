import React from 'react';
import ExperienceCard from './ExperienceCard';
 const experiences = [
    {
      company: "Aspire Systems",
      position: "Senior Frontend Engineer",
      duration: "Oct 2023 - Present · 1 yr 8 mos",
      location: "Bengaluru, Karnataka, India · Hybrid",
      type: "Full-time",
      projects: [
        {
          domain: "Ecommerce / Retail Tech",
          description: "Currently working on the development and enhancement of an American eCommerce platform, driving innovation and optimization for a leading US-based retail enterprise",
          techStack: ["Next.js", "React.js", "HTML5", "CSS3", "Tailwind CSS", "Zustand", "Shadcn UI", "JavaScript", "TypeScript"]
        },
        {
          domain: "Ecommerce / Retail Tech",
          description: "Worked on Aspire Systems own product called Auras and Tanya e-commerce, Tanya analytical Tool. AURAS: Enterprise Integration framework for retailers. Tanya: AI-powered shopping assistant that transforms the e-commerce experience",
          techStack: ["Next.js", "React.js", "HTML5", "CSS3", "Tailwind CSS", "Redux", "JavaScript", "TypeScript", "Shadcn UI"]
        },
        {
          domain: "Insurance / Banking / Fintech",
          description: "Worked on US-based Life Insurance Enterprise Platforms - SaaS. Multiple SaaS Products for American enterprise insurance company",
          techStack: ["React.js", "HTML5", "CSS3", "JavaScript", "Redux", "TypeScript", "React Bootstrap", "Micro frontend", "Redux Toolkit", "RTK Query"]
        }
      ]
    },
    {
      company: "Responsive",
      position: "Associate Software Engineer",
      duration: "Aug 2022 - Mar 2023 · 8 mos",
      location: "Coimbatore, Tamil Nadu, India",
      type: "Full-time",
      projects: [
        {
          domain: "Strategic Response Management (RFP/RFI Automation B2B SaaS)",
          description: "Worked on SaaS response management software. Developed App Launcher feature and project template feature with API integration and React.js components",
          techStack: ["React.js", "HTML5", "CSS3", "JavaScript", "Redux", "TypeScript", "Material UI"]
        }
      ]
    },
    {
      company: "Reqsta",
      position: "Junior Software Engineer",
      duration: "Oct 2019 - Jul 2022 · 2 yrs 10 mos",
      location: "Coimbatore, Tamil Nadu, India",
      type: "Full-time",
      projects: [
        {
          domain: "Multiple Domains",
          description: "Worked on variety of end-to-end SaaS products across Fintech, Banking, Retail Tech, and B2B applications. Key projects include myFinTrack360, myshopify360, MyBooking360, and MyBilling360",
          techStack: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Redux", "Material UI", "Bootstrap", "Tailwind CSS", "Webpack", "Lighthouse"]
        }
      ]
    }
  ];
const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A timeline of my professional journey and key contributions across different organizations
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
