// components/ProjectCard.tsx
interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
  }
  
  export const ProjectCard = ({
    image,
    title,
    description,
    tech,
    github,
    demo,
  }: ProjectCardProps) => {
    return (
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden transition hover:scale-105 duration-300">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
  
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-4 text-sm">{description}</p>
  
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((stack, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {stack}
              </span>
            ))}
          </div>
  
          <div className="flex justify-between">
            <a
              href={demo}
              target="_blank"
              className="text-sm text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
            >
              🔗 Live Demo
            </a>
            <a
              href={github}
              target="_blank"
              className="text-sm text-gray-800 underline hover:text-black"
            >
              💻 GitHub
            </a>
          </div>
        </div>
      </div>
    );
  };
  