import { useState } from "react";
import Brand from "./Brand";
import NavList from "./NavList";
import { useEffect } from "react";

export default function Navbar({navRefs, linkedRefHandler}) {

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
    <div className={`flex flex-col fixed w-full sm:flex-row sm:justify-between sm:items-center ${scrolledNav ? 'bg-app-red sm:border-b-8 sm:border-b-app-dark-red' : 'bg-black'} sm:transition-bg sm:duration-300`}>
      <Brand burgerclick={burgerClickHandler} navShowing={toggleNav} scrolledNav={scrolledNav} />
      <NavList show={toggleNav} scrolledNav={scrolledNav} navRefs={navRefs} linkedRefHandler={linkedRefHandler} />
    </div>
  )
}