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
      image: "/images/todo-app.png",
      title: "Todo App",
      description: "A Firebase-powered Todo App with drag-and-drop, filtering, and auth features.",
      tech: ["React", "Firebase", "Redux"],
      github: "https://github.com/yourusername/todo-app",
      demo: "https://todo-app.vercel.app",
    },
    {
      image: "/images/portfolio.png",
      title: "Portfolio Website",
      description: "Responsive portfolio site built with Tailwind & Next.js showcasing my work.",
      tech: ["Next.js", "Tailwind CSS"],
      github: "https://github.com/manojduraisamy7991",
      demo: "https://manoj-reactjs-portfolio.vercel.app/",
    },
    
      {
        image: "/images/idea-vault.png",
        title: "Idea Vault",
        description: "A micro SaaS platform for creators to save and organize content ideas using Firebase.",
        tech: ["Next.js", "Firebase", "Tailwind CSS"],
        github: "https://github.com/manojduraisamy7991/Idea-Vault",
        demo: "https://idea-vault.vercel.app",
      },
      {
        image: "/images/todo-app.png",
        title: "Todo App",
        description: "A Firebase-powered Todo App with drag-and-drop, filtering, and auth features.",
        tech: ["React", "Firebase", "Redux"],
        github: "https://github.com/yourusername/todo-app",
        demo: "https://todo-app.vercel.app",
      },
      {
        image: "/images/portfolio.png",
        title: "Portfolio Website",
        description: "Responsive portfolio site built with Tailwind & Next.js showcasing my work.",
        tech: ["Next.js", "Tailwind CSS"],
        github: "https://github.com/yourusername/portfolio",
        demo: "https://your-portfolio.vercel.app",
      },
      {
        image: "/images/expense-tracker.png",
        title: "Expense Tracker",
        description: "A simple personal finance tracker that visualizes expenses with charts and stores data in Firestore.",
        tech: ["React", "Chart.js", "Firebase"],
        github: "https://github.com/yourusername/expense-tracker",
        demo: "https://expense-tracker.vercel.app",
      },
      {
        image: "/images/kanban-board.png",
        title: "Kanban Board",
        description: "Drag-and-drop Kanban board for task management, inspired by Trello.",
        tech: ["React", "Tailwind CSS", "Dnd-kit"],
        github: "https://github.com/yourusername/kanban-board",
        demo: "https://kanban-board.vercel.app",
      },
      {
        image: "/images/blog-space.png",
        title: "Blog Space",
        description: "A markdown-powered blog app where users can read, write and edit articles.",
        tech: ["Next.js", "Tailwind", "MDX"],
        github: "https://github.com/yourusername/blog-space",
        demo: "https://blog-space.vercel.app",
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
