export default function LinkedButton({content,img, altImg, clickEvent}) {
  return (
    <button className="bg-app-red p-4 flex gap-2 text-white rounded hover:bg-app-dark-red" onClick={clickEvent}>
      <img src={img} alt={altImg} className="w-6 h-6 fill-white" />
      <p>{content}</p>
    </button>
  )
}