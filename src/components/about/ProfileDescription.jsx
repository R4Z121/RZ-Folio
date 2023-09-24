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
    <div className="flex flex-col gap-6 items-center md:items-start max-w-96">
      <div className="flex flex-col gap-6 items-center md:items-start">
        <h3 className="text-xl sm:text-2xl lg:text-4xl text-center md:text-start ">{detail.title}</h3>
        <p className="text-sm sm:text-base text-center md:text-start">{detail.description}</p>
      </div>
      <div className="flex justify-center gap-4 w-full md:justify-start">
        <ProfileCard imageSource={medalLogo} title="Experiences" description={`${detail.experience}+ years`} />
        <ProfileCard imageSource={suitcaseLogo} title="Completed" description={`${detail.completeProjects}+ projects`} />
      </div>
      <LinkedButton img={downloadLogo} altImg="download-icons" content="Download CV" clickEvent={() => downloadCvHandler(downloadRef)} />
      <a href={cvFile} className="hidden" ref={downloadRef} download></a>
    </div>
  )
}