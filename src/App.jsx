import Navbar from "./components/navbar/Navbar";
import Jumbo from "./components/jumbo/Jumbo";

export default function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <Jumbo />
    </div>
  )  
}