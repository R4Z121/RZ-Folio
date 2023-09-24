import FooterSectionTitle from "./FooterSectionTitle"
import Contact from "./Contact"
import SocialMedia from "./SocialMedia"

export default function Footer ({componentRef}) {
  return (
    <div className="bg-app-dark-red flex flex-col" ref={componentRef}>
      <div className="grid grid-cols-1 sm:flex sm:justify-between lg:pl-28 lg:pr-28 gap-5 p-5 md:p-10 text-white">
        <div className="flex flex-col gap-3 sm:gap-8 p-2">
          <FooterSectionTitle sectionTitle="Get in Touch" />
          <Contact />
        </div>
        <div className="flex flex-col gap-7 sm:gap-8 p-2">
          <FooterSectionTitle sectionTitle="Social Media" />
          <SocialMedia />
        </div>
      </div>
      <footer className="flex justify-center items-center p-5 text-white mt-10">
        <p className="text-sm text-center">Copyright © 2022 All rights reserved</p>
      </footer>
    </div>
  )
}