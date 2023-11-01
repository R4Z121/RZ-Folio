import LinkedButton from "../LinkedButton";
import ProfileCard from "./ProfileCard";
import downloadLogo from "../../assets/icons/download.svg";
import suitcaseLogo from "../../assets/icons/suitcase.svg";
import medalLogo from "../../assets/icons/medal.svg";
import cvFile from "../../assets/pdf/cv - r4z121.pdf";

import { getProfileDescription } from "../../utils/data";
import { useRef } from "react";

export default function ProfileDescription() {
  const downloadRef = useRef(null);
  const detail = getProfileDescription();
  const downloadCvHandler = (ref) => {
    ref.current.click();
  }

  return (
    <div className="flex flex-col gap-6 items-center sm:items-start max-w-96 lg:max-w-2xl sm:w-1/2">
      <div className="flex flex-col gap-3 items-center sm:items-start">
        <h3 className="text-base xs:text-lg md:text-2xl lg:text-3xl text-center sm:text-start font-bold">{detail.title}</h3>
        <p className="text-xs xs:text-sm md:text-base lg:text-lg text-center sm:text-start">{detail.description}</p>
      </div>
      <div className="flex justify-center gap-4 w-full sm:justify-start">
        <ProfileCard imageSource={medalLogo} title="Experiences" description={`${detail.experience}+ years`} />
        <ProfileCard imageSource={suitcaseLogo} title="Completed" description={`${detail.completeProjects}+ projects`} />
      </div>
      <LinkedButton img={downloadLogo} altImg="download-icons" content="Download CV" clickEvent={() => downloadCvHandler(downloadRef)} />
      <a href={cvFile} className="hidden" ref={downloadRef} download></a>
    </div>
  )
}