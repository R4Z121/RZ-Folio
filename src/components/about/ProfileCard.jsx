export default function ProfileCard({imageSource, title, description}) {
  return (
    <div className="flex flex-col items-center gap-3 p-3 rounded bg-app-dark-red text-white w-28">
      <img src={imageSource} className="w-8 h-8" />
      <div className="flex flex-col items-center gap-1">
        <p className="text-sm">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  )
}