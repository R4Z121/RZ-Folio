import NavItems from "./NavItems"

export default function NavList({show}) {
  return (
    <div className="relative">
      <ul className={`w-full flex flex-col bg-app-red absolute ${show ? 'translate-y-0' : '-translate-y-full'} transition-transform sm:transition-none sm:relative sm:translate-y-0 sm:flex-row sm:rounded-bl-xl sm:overflow-hidden z-10`}>
        <NavItems content="Home" refLink="#jumbo" />
        <NavItems content="About" refLink="#about" />
        <NavItems content="Skills" refLink="#skill" />
        <NavItems content="Projects" refLink="#project" />
        <NavItems content="Contact" refLink="#contact" />
      </ul>
    </div>
  )
}