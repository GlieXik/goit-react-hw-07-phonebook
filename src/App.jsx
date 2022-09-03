import { GlobalStyle } from "./utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import { Phonebook } from "./components/Phonebook/Phonebook";
import { useState, useEffect } from "react";

import { Contacts } from "./components/Contacts/Contacts";
import { nanoid } from "nanoid";
import { Filter } from "./components/Filter/Filter";
const LOCAL_KEY = "Constacts";
export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem(LOCAL_KEY)) ?? [
        { id: nanoid(), name: "Banatan", number: "233-43-43" },
        { id: nanoid(), name: "Kane", number: "433-43-43" },
      ]
    );
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (data) => {
    const contact = {
      id: nanoid(),
      ...data,
    };
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(data.name + " is already in contacts");
    } else {
      setContacts((prevState) => [contact, ...prevState]);
    }
  };

  const deleteContact = (conID) => {
    setContacts(contacts.filter(({ id }) => id !== conID));
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Phonebook add={onAddContact} />
        <h2>Contacts</h2>
        <Filter onChange={changeFilter} value={filter} />
        <Contacts
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      </ThemeProvider>
    </>
  );
};
