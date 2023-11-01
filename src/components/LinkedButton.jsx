export default function LinkedButton({content,img, altImg, clickEvent}) {
  return (
    <button className="bg-app-red p-3 lg:p-4 flex items-center gap-2 text-white rounded hover:bg-app-dark-red" onClick={clickEvent}>
      <img src={img} alt={altImg} className="w-5 lg:w-6 h-5 lg:h-6 fill-white" />
      <p className="lg:text-xl text-sm">{content}</p>
    </button>
  )
}