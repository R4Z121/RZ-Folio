import SectionTitle from "../SectionTitle"
import SkillCollection from "./SkillCollection"

export default function Skill ({componentRef}) {
  return (
    <div className="flex flex-col items-center gap-3 p-4 text-white min-h-screen" ref={componentRef}>
      <SectionTitle sectionName="Skills" />
      <SkillCollection />
    </div>
  )
}