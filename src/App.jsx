import { GlobalStyle } from "./utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import { Phonebook } from "./components/Phonebook/Phonebook";
import React from "react";
import { Component } from "react";
import { Contacts } from "./components/Contacts/Contacts";
import { nanoid } from "nanoid";
import { Filter } from "./components/Filter/Filter";
const LOCAL_KEY = "Constacts";
export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: "Banatan", number: "233-43-43" },
      { id: nanoid(), name: "Kane", number: "433-43-43" },
    ],
    name: "",
    filter: "",
  };
  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(this.state.contacts));
    }
  }
  onAddContact = (data) => {
    if (
      this.state.contacts.find(
        (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(data.name + " is already in contacts");
    } else {
      this.setState((prevState) => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }

    const contact = {
      id: nanoid(),
      ...data,
    };
  };
  deleteContact = (conID) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== conID),
    }));
  };
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  render() {
    const visibleContact = this.getVisibleContacts();
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Phonebook add={this.onAddContact} />
          <h2>Contacts</h2>
          <Filter onChange={this.changeFilter} value={this.state.filter} />
          <Contacts
            contacts={visibleContact}
            onDeleteContact={this.deleteContact}
          />
        </ThemeProvider>
      </>
    );
  }
}
