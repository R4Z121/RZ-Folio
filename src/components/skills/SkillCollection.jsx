import SkillCard from "./SkillCard";
import { getSkillData } from "../../utils/data";

export default function SkillCollection () {
  const skillData = getSkillData();
  return (
    <div className="flex w-full justify-center p-5">
      <div className="grid grid-cols-3 xs:grid-cols-5 gap-3 sm:gap-4 md:grid-cols-6 md:gap-5 lg:gap-8">
        {skillData.map(data => (
          <SkillCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  )
}