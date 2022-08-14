import { ContactsItem } from "./Contacts.styled";
import { Box } from "../../utils/Box";
import { AiFillDelete } from "react-icons/ai";
export const Contacts = ({ contacts, onDeleteContact }) => (
  <div>
    <Box as="ul" width="250px" bg="white">
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <span>
            {name} : {number}{" "}
          </span>
          <button onClick={() => onDeleteContact(id)}>
            <AiFillDelete />
          </button>
        </ContactsItem>
      ))}
    </Box>
  </div>
);
