import { Box } from "../../utils/Box";
import { ContactItem } from "./ContactItem";
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
          <ContactItem
            id={id}
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          ></ContactItem>
        ))}
      </Box>
    )}
  </div>
);
