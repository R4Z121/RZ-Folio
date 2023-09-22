export default function Burger({clickEvent}) {
  return (
    <button id="burger" className="w-10 flex flex-col gap-1.5 sm:hidden" onClick={clickEvent}>
      <span className="bg-white p-0.5 w-full rounded"></span>
      <span className="bg-white p-0.5 w-full rounded"></span>
      <span className="bg-white p-0.5 w-full rounded"></span>
    </button>
  )
}