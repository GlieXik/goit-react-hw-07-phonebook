import styled from "styled-components";

export const ContactsList = styled("ul")`
  width: 250px;
  background-color: #f1f1f1;
`;
export const ContactsItem = styled("li")`
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: rgb(232, 243, 254);
  }
`;
