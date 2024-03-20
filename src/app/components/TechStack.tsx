  import {Skills} from '../constants/Skills'
    
  export const TechStack = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-center">Tech Stack</h2>
          <div className="flex flex-wrap justify-center">
            {Skills.map((tech, index) => (
              <div key={index} className="w-1/2 sm:w-1/4 md:w-1/6 p-4">
                <img src={tech.image} alt={tech.name} className="mx-auto h-12" />
                <p className="text-center mt-4">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };