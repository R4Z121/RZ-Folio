import NavItems from "./NavItems"

export default function NavList({show,navRefs,linkedRefHandler}) {
  return (
    <div className="relative">
      <ul className={`w-full flex flex-col bg-app-red absolute ${show ? 'translate-y-0' : '-translate-y-full'} transition-transform sm:transition-none sm:relative sm:translate-y-0 sm:flex-row sm:rounded-bl-xl sm:overflow-hidden z-10`}>
        <NavItems content="Home" refLink={navRefs.jumboRef} linkedRefHandler={linkedRefHandler} />
        <NavItems content="About" refLink={navRefs.aboutRef} linkedRefHandler={linkedRefHandler} />
        <NavItems content="Skills" refLink={navRefs.skillRef} linkedRefHandler={linkedRefHandler} />
        <NavItems content="Projects" refLink={navRefs.projectRef} linkedRefHandler={linkedRefHandler} />
        <NavItems content="Contact" refLink={navRefs.contactRef} linkedRefHandler={linkedRefHandler} />
      </ul>
    </div>
  )
}