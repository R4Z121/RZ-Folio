export default function ContactItem ({data}) {
  return (
    <div className="flex gap-4 items-center p-3 sm:pl-0">
      <img src={data.imgSource} alt={data.name} className="w-8 h-8 md:w-9 md:h-9" />
      <div className="flex flex-col gap-1">
        {data.desc.map(text => 
          data.link ? (
            <a href={data.link} target="_blank" key={text}>
              <p className="text-sm md:text-base lg:text-lg leading-none md:leading-none">{text}</p>
            </a>
          )
          :
          (
            <p key={text} className="text-sm md:text-base lg:text-lg leading-none md:leading-none">{text}</p>
          )
        )}
      </div>
    </div>
  )
}