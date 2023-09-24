import Navbar from "./components/navbar/Navbar";
import Jumbo from "./components/jumbo/Jumbo";
import About from "./components/about/About";
import Skill from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import { useRef } from "react";

export default function App() {
  const navRefs = {
    jumboRef : useRef(null),
    aboutRef : useRef(null),
    skillRef : useRef(null),
    projectRef : useRef(null),
    contactRef : useRef(null)
  }

  const linkedButtonClicked = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 60,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className="bg-black min-h-screen flex flex-col gap-32">
      <div className="flex flex-col gap-7">
        <Navbar navRefs={navRefs} linkedRefHandler={linkedButtonClicked} />
        <Jumbo componentRef={navRefs.jumboRef} linkedRef={navRefs.aboutRef} linkedRefHandler={linkedButtonClicked} />
      </div>
      <div className="flex flex-col gap-7">
        <About componentRef={navRefs.aboutRef} />
        <Skill componentRef={navRefs.skillRef} />
        <Projects componentRef={navRefs.projectRef} />
        <Footer componentRef={navRefs.contactRef} />
      </div>
    </div>
  )  
}