export default function JumboImage({imageSource, imageAlt}) {
  return (
    <div className="w-52 h-60 sm:w-80 sm:h-96 md:w-96 md:h-112 lg:w-1/2 lg:h-128 flex items-center justify-center">
      <img src={imageSource} alt={imageAlt} className="w-full h-full max-w-112" />
    </div>
  )
}