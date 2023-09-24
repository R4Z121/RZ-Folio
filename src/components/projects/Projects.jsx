import SectionTitle from "../SectionTitle";
import ProjectCollection from "./ProjectCollection";

export default function Projects ({componentRef}) {
  return (
    <div className="flex flex-col items-center gap-7 p-4 text-white" ref={componentRef}>
      <SectionTitle sectionName="Projects" />
      <ProjectCollection />
    </div>
  )
}