import ProjectCard from "./ProjectCard";
import { getProjectsData } from "../../utils/data";

export default function ProjectCollection () {
  const projects = getProjectsData();

  return (
    <div className="flex w-full justify-center p-5 pt-0">
      <div className="p-1 md:p-3 lg:p-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map(project => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>
    </div>
  )
}