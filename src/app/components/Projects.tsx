import { ProjectCard } from "@/app/components/project/ProjectCard";

export const Projects = () => {
  const projectList = [
    {
      image: "/images/idea-vault.png",
      title: "Idea Vault",
      description: "A micro SaaS for creators to store, tag, and plan content ideas across platforms.",
      tech: ["Next.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com/manojduraisamy7991/Idea-Vault",
      demo: "https://idea-vault-six.vercel.app/",
    },
    {
      image: "/images/idea-vault.png",
      title: "Todo App",
      description: "A Firebase-powered Todo App with drag-and-drop, filtering, and auth features.",
      tech: ["React", "Firebase", "Redux"],
      github: "https://github.com/yourusername/todo-app",
      demo: "https://todo-app.vercel.app",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSsD_I85MznoyUIZXUHaRBzfiRPL4DNZhjw&s",
      title: "YouTube Clone",
      description: "YouTube is an social media and online video sharing platform",
      tech: ["React Js", "Tailwind CSS"],
      github: "https://github.com/manojduraisamy7991/youtube-clone",
      demo: "https://youtube-clone-sigma-plum.vercel.app/",
    },
    
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjk9DDoHgCWq7qgT_wgvmzweD9Nn9VcHpd6NIa9QwHFKGvmHuSIWBI_7EiEav7cYvQqg&usqp=CAU",
        title: "Twitter Clone",
        description: "Twitter Clone Real-Time Features: Instant post/likes/comments without page reload",
        tech: ["Reactjs", "HTML","CSS" ,"Tailwind CSS"],
        github: "https://github.com/manojduraisamy7991/Twitter-Clone",
        demo: "https://twitter-clone-fawn-iota.vercel.app/",
      },
      {
        image: "https://arynews.tv/wp-content/uploads/2024/12/netflix-1-696x342.jpg",
        title: "Netfilx clone",
        description:"Netflix is an American subscription video on-demand over-the-top streaming service. The service primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages.",
        tech: ["React", "Firebase", "Redux"],
        github: "https://github.com/manojduraisamy7991/netflix-clone",
        demo: "https://netflix-clone-gray-pi-92.vercel.app/",
      },
      {
        image: "/images/idea-vault.png",
        title: "Portfolio Website",
        description: "Responsive portfolio site built with Tailwind & Next.js showcasing my work.",
        tech: ["Next.js", "Tailwind CSS"],
        github: "https://github.com/yourusername/portfolio",
        demo: "https://your-portfolio.vercel.app",
      },
      {
        image: "/images/idea-vault.png",
        title: "Expense Tracker",
        description: "A simple personal finance tracker that visualizes expenses with charts and stores data in Firestore.",
        tech: ["React", "Chart.js", "Firebase"],
        github: "https://github.com/yourusername/expense-tracker",
        demo: "https://expense-tracker.vercel.app",
      },
      {
        image: "/images/idea-vault.png",
        title: "Kanban Board",
        description: "Drag-and-drop Kanban board for task management, inspired by Trello.",
        tech: ["React", "Tailwind CSS", "Dnd-kit"],
        github: "https://github.com/yourusername/kanban-board",
        demo: "https://kanban-board.vercel.app",
      },
      {
        image: "https://www.zoho.com/inventory/images/common-dashboard-1x.png",
        title: "Inventory Management - StockView360",
        description: "The Inventory Management System is a web-based application designed to help businesses manage their stock,suppliers,product lifecycle efficiently.",
        tech: ["Next.js", "Tailwind", "reactjs"],
        github: "https://github.com/manojduraisamy7991/inventory-app",
        demo: "https://stockview360.vercel.app/",
      }
  ];

  return (
    <section id="projects" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">💼 My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
