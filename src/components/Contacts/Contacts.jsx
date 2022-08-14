import { ContactsItem } from "./Contacts.styled";
import { Box } from "../../utils/Box";
import { AiFillDelete } from "react-icons/ai";
export const Contacts = ({ contacts, onDeleteContact }) => (
  <div>
    {contacts.length === 0 ? (
      <Box
        p={4}
        width="250px"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
      >
        <b>{"Empty List".toUpperCase()}</b>
      </Box>
    ) : (
      <Box as="ul" width="250px">
        {contacts.map(({ id, name, number }) => (
          <ContactsItem key={id}>
            <span>
              {name} : {number}
            </span>
            <button onClick={() => onDeleteContact(id)}>
              <AiFillDelete />
            </button>
          </ContactsItem>
        ))}
      </Box>
    )}
  </div>
);
