import { useState } from "react";
import Brand from "./Brand";
import NavList from "./NavList";
import { useEffect } from "react";

export default function Navbar() {

  const[toggleNav, setToggleNav] = useState(false);
  const[scrolledNav, setScrolledNav] = useState(false);

  const burgerClickHandler = () => {
    setToggleNav(!toggleNav);
  }

  useEffect(() => {
    window.addEventListener("scroll",() => {
      if(window.scrollY > 100){
        setScrolledNav(true);
      }else{
        setScrolledNav(false);
      }
    })
  },[])


  return (
    <div className={`flex flex-col fixed w-full sm:flex-row sm:justify-between sm:items-center ${scrolledNav ? 'bg-app-red border border-b-app-dark-red' : 'bg-black'}`}>
      <Brand burgerclick={burgerClickHandler} navShowing={toggleNav} />
      <NavList show={toggleNav} />
    </div>
  )
}