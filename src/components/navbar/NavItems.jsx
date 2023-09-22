export default function NavItems({content, refLink}) {
  return (
    <li>
      <a data-target={refLink} className="text-white md:text-lg p-5 md:p-6 w-full hover:bg-app-dark-red inline-block hover:cursor-pointer">{content}</a>
    </li>
  )
}