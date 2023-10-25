export default function NavItems({content, refLink, linkedRefHandler, toggleNav}) {
  return (
    <li>
      <a onClick={() => linkedRefHandler(refLink,toggleNav.show, toggleNav.setShow)} className="text-white md:text-lg 2xl:text-xl p-5 md:p-6 2xl:p-9 w-full hover:bg-app-dark-red inline-block hover:cursor-pointer">{content}</a>
    </li>
  )
}