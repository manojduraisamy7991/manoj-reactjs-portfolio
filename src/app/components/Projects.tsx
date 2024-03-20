export const Projects = () =>{
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
          <h3 className="text-lg font-semibold mb-2">PORTFOLIO</h3>
          <p>This is about my portfolio . i made from scratch app</p>
        </div>
      </div>
    </div>
  </section>
  }
