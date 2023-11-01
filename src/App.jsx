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

  const linkedButtonClicked = (ref,toggleNav=null,setToggleNav=null) => {
    window.scrollTo({
      top: ref.current.offsetTop - 55,
      left: 0,
      behavior: "smooth"
    })
    if(setToggleNav) {
      setToggleNav(!toggleNav);
    }
  }

  return (
    <div className="bg-black min-h-screen flex flex-col gap-32">
      <div className="flex flex-col gap-7">
        <Navbar navRefs={navRefs} linkedRefHandler={linkedButtonClicked} />
        <Jumbo componentRef={navRefs.jumboRef} linkedRef={navRefs.aboutRef} linkedRefHandler={linkedButtonClicked} />
      </div>
      <div className="flex flex-col gap-7">
        <About componentRef={navRefs.aboutRef} linkedRef={navRefs.projectRef} linkedRefHandler={linkedButtonClicked}  />
        <Skill componentRef={navRefs.skillRef} />
        <Projects componentRef={navRefs.projectRef} />
        <div className="mt-12">
          <Footer componentRef={navRefs.contactRef} />
        </div>
      </div>
    </div>
  )  
}