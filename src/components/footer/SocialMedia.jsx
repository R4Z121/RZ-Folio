import { getSocialMediaData } from "../../utils/data";
import SocialMediaItem from "./SocialMediaItem";

export default function SocialMedia () {
  const socialMediaData = getSocialMediaData();
  return (
    <div className="flex sm:justify-center md:justify-start gap-5 p-2 sm:pl-0">
      {
        socialMediaData.map(data => (
          <SocialMediaItem key={data.name} data={data} />
        ))
      }
    </div>
  )
}