import Burger from "./Burger";

export default function Brand({burgerclick, navShowing}) {
  return (
    <div className={`flex items-center justify-between gap-4 p-3 z-20 ${navShowing ? 'bg-app-red' : 'bg-black'} transition-color duration-300 border-b-4 border-app-red sm:border-none`}>
      <p className="text-2xl text-white font-bold md:text-4xl sm:pl-4">RZ-Folio</p>
      <Burger clickEvent={burgerclick} />
    </div>
  )
}