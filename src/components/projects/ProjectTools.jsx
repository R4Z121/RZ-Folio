export default function ProjectTools ({projectTools}) {
  return (
    <div className="flex flex-wrap gap-1">
      {
        projectTools.map(tool => (
          <div key={tool} className="p-2 rounded-md bg-app-dark-red">
            <p className="text-xs">{tool}</p>
          </div>
        ))
      }
    </div>
  )
}