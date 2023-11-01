export default function ProfileImage ({imageSource,imageAlt}) {
  return (
    <div className="flex md:justify-center md:w-1/2">
      <div className="w-32 h-34 xs:w-36 xs:h-40 sm:w-60 sm:h-64 md:w-96 md:h-112 bg-app-soft-black flex justify-center items-center rounded">
        <img src={imageSource} alt={imageAlt} className="w-full h-full" />
      </div>
    </div>
  )
}