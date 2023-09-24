import { getContactData } from "../../utils/data";
import ContactItem from "./ContactItem";

export default function Contact () {
  const contactData = getContactData();
  return (
    <div className="flex flex-col gap-2">
      {
        contactData.map(data => (
          <ContactItem key={data.name} data={data} />
        ))
      }
    </div>
  )
}