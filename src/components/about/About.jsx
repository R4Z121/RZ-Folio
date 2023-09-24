import ProfileImage from "./ProfileImage";
import SectionTitle from "../SectionTitle";
import ProfileDescription from "./ProfileDescription";
import profilePicture from "../../assets/img/profile-image.png";

export default function About({componentRef}) {
  return (
    <div className="flex flex-col items-center gap-12 p-4 text-white" ref={componentRef}>
      <SectionTitle sectionName="About Me" />
      <div className="flex flex-col md:grid md:grid-cols-2 md:justify-center gap-6 items-center md:gap-12 md:items-start lg:gap-28">
        <ProfileImage imageSource={profilePicture} imageAlt="profile-picture-of-rizky-azizi" />
        <ProfileDescription />
      </div>
    </div>
  )
}