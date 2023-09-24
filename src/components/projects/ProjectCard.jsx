import githubLogo from "../../assets/img/skills/github-logo.png";
import linkIcons from "../../assets/icons/link.svg";
import ProjectTools from "./ProjectTools";

export default function ProjectCard ({data}) {
  return (
    <div className="p-3 gap-3 flex flex-col bg-app-red rounded">
      <div className="flex justify-between gap-3 items-center">
        <p className="text-lg font-bold overflow-hidden text-ellipsis whitespace-nowrap">{data.title}</p>
        <div className="flex gap-2 items-center flex-row-reverse">
          <a href={data.github} target="_blank"><img src={githubLogo} alt="github-logo" className="w-5 h-5"/></a>
          {data.deploy ? (
            <a href={data.link} target="_blank"><img src={linkIcons} alt="link-icons" className="w-5 h-5" /></a>
          ) : (
            <></>
          ) }
        </div>
      </div>
      <div className="flex flex-col p-1 gap-7">
        <p className="text-sm text-justify">{data.desc}</p>
        <ProjectTools projectTools={data.tools} />
      </div>
    </div>
  )
}