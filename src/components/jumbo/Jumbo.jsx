import JumboImage from "./JumboImage";
import JumboText from "./JumboText";
import { getJumboData } from "../../utils/data";
import imgSource from "../../assets/img/jumbo-image.png";

export default function Jumbo({componentRef,linkedRef,linkedRefHandler}) {
  const {jumboTitle, jumboSubtitle, jumboDescription} = getJumboData();

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 pt-20 sm:pt-0 lg:pt-8 sm:gap-5 sm:justify-center lg:justify-start min-h-screen" ref={componentRef}>
      <JumboImage imageSource={imgSource} alt="picture of M. Rizky Azizi" />
      <JumboText title={jumboTitle} subtitle={jumboSubtitle} desc={jumboDescription} linkedRef={linkedRef} linkedRefHandler={linkedRefHandler} />
    </div>
  )
}