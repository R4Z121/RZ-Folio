export default function SectionTitle({sectionName}) {
  return (
    <div className="flex flex-col gap-1 xs:gap-2 items-center lg:mt-3 w-full">
      <h1 className="text-center sm:pt-2 md:pt-4 text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold">{sectionName}</h1>
      <hr className="bg-app-red border border-app-red h-1 rounded w-full max-w-56" />
    </div>
  )
}