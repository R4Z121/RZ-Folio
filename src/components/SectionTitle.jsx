export default function SectionTitle({sectionName}) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center p-3 text-2xl sm:text-3xl font-bold">{sectionName}</h1>
      <hr className="bg-app-red border border-app-red h-1 rounded w-full max-w-56" />
    </div>
  )
}