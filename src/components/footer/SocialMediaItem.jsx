export default function SocialMediaItem ({data}) {
  return (
    <a href={data.link} target="_blank" className="flex justify-center items-center p-3 rounded-full bg-app-red overflow-hidden">
      <img src={data.imgSource} alt={data.name} className="w-6 h-6" />
    </a>
  )
}