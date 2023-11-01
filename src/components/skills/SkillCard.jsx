export default function SkillCard({data}) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="bg-app-red p-3 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 md:p-5 rounded-full">
        <img src={data.logo} alt={`${data.name}-logo`} className="w-full h-full" />
      </div>
      <p className="text-xs md:text-base xl:text-xl text-center">{data.name}</p>
    </div>
  )
}