import SectionTitle from "../SectionTitle";
import ProjectCollection from "./ProjectCollection";

export default function Projects ({componentRef}) {
  return (
    <div className="flex flex-col items-center gap-3 xs:gap-5 p-4 text-white min-h-screen" ref={componentRef}>
      <SectionTitle sectionName="Projects" />
      <ProjectCollection />
    </div>
  )
}