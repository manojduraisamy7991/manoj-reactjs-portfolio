
const Header = () =>{
  return     <header className="bg-blue-500 text-white py-4">
  <div className="container mx-auto text-center">
    <h1 className="text-3xl font-bold">Manoj</h1>
    <p className="mt-2">Welcome to my portfolio website!</p>
  </div>
</header>
}

const About = () =>{
  return       <section id="about" className="py-8">
  <div className="container mx-auto">
    <h2 className="text-2xl font-bold mb-4 text-center">About Me</h2>
    <p>
    I have 4 years total experience in web development..
    </p>
    <p className="mt-2">
   Tech Stack |  React Js, Material UI, HTML, CSS, Bootstrap, Rest APIs, Node js,Sass,micro frontend,React Bootstrap.Micro Frontend.
    </p>
  </div>
</section>
}
const Projects = () =>{
  return         <section id="projects" className="py-8">
  <div className="container mx-auto">
    <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-2 ">CRM</h3>
        <p>Description of Project 1</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-2">TODO</h3>
        <p>Description of Project 2</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-2">GAME</h3>
        <p>Description of Project 3</p>
      </div>
    </div>
  </div>
</section>
}
const Contact = () => {
  return (
    <section id="contact" className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
        <div className="text-center mb-4">
          <p>Email: <a href="mailto:manojduraisamy7991@gmail.com" className="underline">manojduraisamy7991@gmail.com</a> | Phone Number: <a href="tel:9080888076" className="underline">9080888076</a></p>
          <p>Front End Developer - <a href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition duration-300">linkedin</a> | <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition duration-300">github</a> | <a href="https://leetcode.com/example" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition duration-300">leetcode (Started)</a></p>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="https://twitter.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition duration-300"
          >
            <svg
              className="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.385 5.019a8.894 8.894 0 0 1-2.569.703 4.458 4.458 0 0 0 1.963-2.469 8.873 8.873 0 0 1-2.823 1.077 4.443 4.443 0 0 0-7.595 4.054 12.612 12.612 0 0 1-9.155-4.65A4.416 4.416 0 0 0 2 7.8a4.431 4.431 0 0 1-2-1.137v.055a4.44 4.44 0 0 0 1.996 3.688 4.415 4.415 0 0 1-1.996-.547v.055a4.444 4.444 0 0 0 3.553 4.352 4.405 4.405 0 0 1-1.968.074 4.443 4.443 0 0 0 4.137 3.084 8.912 8.912 0 0 1-5.512 1.898 8.83 8.83 0 0 1-1.051-.062 12.575 12.575 0 0 0 6.796 1.992c8.153 0 12.625-6.753 12.625-12.625 0-.192-.005-.384-.014-.574a9.063 9.063 0 0 0 2.224-2.303l-.048-.019z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition duration-300"
          >
            <svg
              className="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.643 2H2.358C1.562 2 1 2.564 1 3.192v17.615c0 .628.563 1.192 1.358 1.192h19.285c.798 0 1.357-.564 1.357-1.192V3.192C23 2.564 22.441 2 21.643 2zM8.104 19.807H4.743V9.128h3.361v10.679zm-1.68
              a1.847 1.847 0 1 1-.001-3.694 1.847 1.847 0 0 1 .001 3.694zm11.399 11.54h-3.36v-5.687c0-1.348-.484-2.268-1.694-2.268-1.245 0-1.983.834-2.307 1.647-.118.287-.148.682-.148 1.081v5.228H7.4V9.128h3.213v1.392c.425-.648 1.195-1.574 2.908-1.574 2.122 0 3.724 1.386 3.724 4.37v6.49h-.001zm-9.645-9.197a1.85 1.85 0 1 1-.001-3.698 1.85 1.85 0 0 1 .001 3.698zm-1.735 9.197H4.744V9.128h2.374v10.679z" />
            </svg>
          </a>
          {/* Add more social platform links */}
        </div>
      </div>
    </section>
  );
};


const TechStack = () => {
  // Dummy data for demonstration
  const techStack = [
    { name: 'React.js', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpvrFjlCpx3FlxCF6rPrnZaV_dAwOSVytELNVhLrQtsZ7lvAL' },
    { name: 'Node.js', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpvrFjlCpx3FlxCF6rPrnZaV_dAwOSVytELNVhLrQtsZ7lvAL' },
    { name: 'Express.js', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpvrFjlCpx3FlxCF6rPrnZaV_dAwOSVytELNVhLrQtsZ7lvAL' },
    { name: 'MongoDB', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpvrFjlCpx3FlxCF6rPrnZaV_dAwOSVytELNVhLrQtsZ7lvAL' },
    // Add more technologies as needed
  ];

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

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Projects />
        <Contact />
        <TechStack />
      </main>
    </div>
  ) 
}
