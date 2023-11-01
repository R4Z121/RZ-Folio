export default function ProfileCard({imageSource, title, description}) {
  return (
    <div className="flex flex-col items-center gap-3 p-3 rounded bg-app-dark-red text-white w-24 lg:w-28">
      <img src={imageSource} className="w-6 lg:w-8 h-6 lg:h-8" />
      <div className="flex flex-col items-center gap-1">
        <p className="text-xs xs:text-sm lg:text-base">{title}</p>
        <p className="text-xs xs:text-sm lg:text-base">{description}</p>
      </div>
    </div>
  )
}