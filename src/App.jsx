import Navbar from "./components/navbar/Navbar";
import Jumbo from "./components/jumbo/Jumbo";
import About from "./components/about/About";
import Skill from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col gap-32">
      <div className="flex flex-col gap-7">
        <Navbar />
        <Jumbo />
      </div>
      <div className="flex flex-col gap-7">
        <About />
        <Skill />
        <Projects />
        <Footer />
      </div>
    </div>
  )  
}