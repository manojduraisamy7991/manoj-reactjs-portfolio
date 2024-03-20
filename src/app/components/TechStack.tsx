  
  // For icons https://icons8.com/icons/set/css
     const techStack = [
      { name: 'JavaScript', image: 'https://img.icons8.com/?size=48&id=PXTY4q2Sq2lG&format=png'},
        { name: 'Html', image: 'https://img.icons8.com/?size=48&id=20909&format=png' },
        { name: 'Css', image: 'https://img.icons8.com/?size=60&id=3BTBsJs5myRy&format=png'},
        { name: 'React.js', image: 'https://img.icons8.com/?size=80&id=wPohyHO_qO1a&format=png'}
      ];
    
  export const TechStack = () => {
 
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-center">Tech Stack</h2>
          <div className="flex flex-wrap justify-center">
            {techStack.map((tech, index) => (
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