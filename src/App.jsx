import Navbar from "./components/navbar/Navbar";
import Jumbo from "./components/jumbo/Jumbo";
import About from "./components/about/About";

export default function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col gap-32">
      <div className="flex flex-col gap-7">
        <Navbar />
        <Jumbo />
      </div>
      <div className="flex flex-col gap-7">
        <About />
      </div>
    </div>
  )  
}