import LinkedButton from "../LinkedButton";
import personLogo from "../../assets/icons/person.svg";

export default function JumboText({title, subtitle, desc, linkedRef, linkedRefHandler}) {
  return (
    <div className="flex flex-col items-center sm:items-start text-white gap-10 p-4 sm:max-w-xs lg:max-w-none 2xl:w-1/2">
      <div className="flex flex-col items-center sm:items-start gap-5">
        <div className="flex flex-col items-center sm:items-start gap-2 2xl:gap-4">
          <h1 className="text-3xl xs:text-4xl font-bold md:text-5xl lg:text-7xl 2xl:text-8xl">{title}</h1>
          <p className="text-sm xs:text-base md:text-xl font-bold lg:text-3xl">{subtitle}</p>
        </div>
        <p className="text-center text-xs xs:text-sm sm:text-start text-sm md:text-base lg:text-xl 2xl:text-2xl lg:leading-none md:leading-none leading-none max-w-md 2xl:max-w-3xl">{desc}</p>
      </div>
      <LinkedButton content="More about me" img={personLogo} altImg="person-logo" clickEvent={() => linkedRefHandler(linkedRef)} />
    </div>
  )
}