export default function ProfileImage ({imageSource,imageAlt}) {
  return (
    <div className="flex md:justify-center md:w-1/2">
      <div className="w-52 h-60 md:w-96 md:h-112 bg-app-soft-black flex justify-center items-center rounded">
        <img src={imageSource} alt={imageAlt} className="w-full h-full" />
      </div>
    </div>
  )
}