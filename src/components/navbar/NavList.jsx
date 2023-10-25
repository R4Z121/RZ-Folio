import NavItems from "./NavItems"

export default function NavList({show, setShow, scrolledNav, navRefs,linkedRefHandler}) {
  return (
    <div className="relative">
      <ul className={`w-full flex flex-col bg-app-red absolute ${show ? 'translate-y-0' : '-translate-y-full'} transition-transform sm:transition-none sm:relative sm:translate-y-0 sm:flex-row ${scrolledNav ? 'sm:rounded-bl-0' : 'sm:rounded-bl-xl'} sm:overflow-hidden z-10`}>
        <NavItems content="Home" refLink={navRefs.jumboRef} linkedRefHandler={linkedRefHandler} toggleNav={{show,setShow}} />
        <NavItems content="About" refLink={navRefs.aboutRef} linkedRefHandler={linkedRefHandler} toggleNav={{show,setShow}} />
        <NavItems content="Skills" refLink={navRefs.skillRef} linkedRefHandler={linkedRefHandler} toggleNav={{show,setShow}} />
        <NavItems content="Projects" refLink={navRefs.projectRef} linkedRefHandler={linkedRefHandler} toggleNav={{show,setShow}} />
        <NavItems content="Contact" refLink={navRefs.contactRef} linkedRefHandler={linkedRefHandler} toggleNav={{show,setShow}} />
      </ul>
    </div>
  )
}