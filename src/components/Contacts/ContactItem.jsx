import { ContactsItem } from "./Contacts.styled";
import { AiFillDelete } from "react-icons/ai";
import { deleteTask } from "../../redux/contatcsSlice";
import { useDispatch } from "react-redux";
export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ContactsItem key={id}>
        <span>
          {name} : {number}
        </span>
        <button onClick={() => dispatch(deleteTask(id))}>
          <AiFillDelete />
        </button>
      </ContactsItem>
    </>
  );
};
