import { ContactsItem } from "./Contacts.styled";
import { AiFillDelete } from "react-icons/ai";
export const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <>
    <ContactsItem key={id}>
      <span>
        {name} : {number}
      </span>
      <button onClick={onDeleteContact}>
        <AiFillDelete />
      </button>
    </ContactsItem>
  </>
);
