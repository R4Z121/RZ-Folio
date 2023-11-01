import ProfileImage from "./ProfileImage";
import SectionTitle from "../SectionTitle";
import ProfileDescription from "./ProfileDescription";
import profilePicture from "../../assets/img/profile-image.png";

export default function About({componentRef, linkedRef, linkedRefHandler}) {
  return (
    <div className="flex flex-col items-center gap-5 sm:gap-7 p-3 text-white h-screen" ref={componentRef}>
      <SectionTitle sectionName="About Me" />
      <div className="flex flex-col sm:flex-row sm:justify-center gap-3 items-center sm:gap-12 sm:items-start">
        <ProfileImage imageSource={profilePicture} imageAlt="profile-picture-of-rizky-azizi" />
        <ProfileDescription linkedRef={linkedRef} linkedRefHandler={linkedRefHandler} />
      </div>
    </div>
  )
}