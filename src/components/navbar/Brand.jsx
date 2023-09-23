import Burger from "./Burger";

export default function Brand({burgerclick, navShowing, scrolledNav}) {
  return (
    <div className={`flex items-center justify-between gap-4 p-3 z-20 border-b-4 ${navShowing ? 'bg-app-red' : (scrolledNav ? 'bg-app-red border-app-dark-red' : 'bg-black border-app-red')} transition-color duration-300 sm:border-none sm:bg-transparent sm:transition-none`}>
      <p className="text-2xl text-white font-bold md:text-4xl sm:pl-4">RZ-Folio</p>
      <Burger clickEvent={burgerclick} />
    </div>
  )
}