import SectionTitle from "../SectionTitle"
import SkillCollection from "./SkillCollection"

export default function Skill () {
  return (
    <div className="flex flex-col items-center gap-7 p-4 text-white">
      <SectionTitle sectionName="Skills" />
      <SkillCollection />
    </div>
  )
}