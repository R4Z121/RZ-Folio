export default function NavItems({content, refLink, linkedRefHandler, toggleNav}) {
  return (
    <li>
      <a onClick={() => linkedRefHandler(refLink,toggleNav.show, toggleNav.setShow)} className="text-white text-sm md:text-base 2xl:text-xl p-4 xs:p-5 md:p-6 2xl:p-9 w-full hover:bg-app-dark-red inline-block hover:cursor-pointer">{content}</a>
    </li>
  )
}