import LinkedButton from "../LinkedButton";
import personLogo from "../../assets/icons/person.svg";

export default function JumboText({title, subtitle, desc}) {
  return (
    <div className="flex flex-col items-center sm:items-start text-white gap-10 p-4 sm:max-w-xs lg:max-w-none">
      <div className="flex flex-col items-center sm:items-start gap-5">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">{title}</h1>
          <p className="text-base md:text-xl font-bold lg:text-3xl">{subtitle}</p>
        </div>
        <p className="text-center sm:text-start text-sm md:text-base lg:text-xl lg:leading-none md:leading-none leading-none max-w-md">{desc}</p>
      </div>
      <LinkedButton content="More about me" img={personLogo} altImg="person-logo" />
    </div>
  )
}