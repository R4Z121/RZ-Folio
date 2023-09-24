import JumboImage from "./JumboImage";
import JumboText from "./JumboText";
import { getJumboData } from "../../utils/data";
import imgSource from "../../assets/img/jumbo-image.png";

export default function Jumbo({componentRef,linkedRef,linkedRefHandler}) {
  const {jumboTitle, jumboSubtitle, jumboDescription} = getJumboData();

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 pt-20 sm:pt-28 sm:gap-5 sm:justify-center lg:justify-start" ref={componentRef}>
      <JumboImage imageSource={imgSource} alt="picture of M. Rizky Azizi" />
      <JumboText title={jumboTitle} subtitle={jumboSubtitle} desc={jumboDescription} linkedRef={linkedRef} linkedRefHandler={linkedRefHandler} />
    </div>
  )
}