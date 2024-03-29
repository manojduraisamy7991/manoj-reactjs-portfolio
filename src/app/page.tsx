import {Header} from './components/Header'
import {About} from './components/About';
import { Projects} from './components/Projects';
import {Contact} from './components/Contact';
import {TechStack} from './components/TechStack';



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
