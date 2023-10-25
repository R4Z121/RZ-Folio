export default function SectionTitle({sectionName}) {
  return (
    <div className="flex flex-col items-center lg:mt-3 w-full">
      <h1 className="text-center p-3 lg:p-6 text-2xl sm:text-3xl lg:text-4xl font-bold">{sectionName}</h1>
      <hr className="bg-app-red border border-app-red h-1 rounded w-full max-w-56" />
    </div>
  )
}