import SectionTitle from "../SectionTitle";
import ProjectCollection from "./ProjectCollection";

export default function Projects () {
  return (
    <div className="flex flex-col items-center gap-7 p-4 text-white">
      <SectionTitle sectionName="Projects" />
      <ProjectCollection />
    </div>
  )
}