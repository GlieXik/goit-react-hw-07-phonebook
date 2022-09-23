import { GlobalStyle } from "./utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import { Phonebook } from "./components/Phonebook/Phonebook";

import { Contacts } from "./components/Contacts/Contacts";

import { Filter } from "./components/Filter/Filter";
import { Box } from "./utils/Box";

export const App = () => {
  // const getVisibleContacts = () => {
  //   const normalizeFilter = filter.toLowerCase();

  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizeFilter)
  //   );
  // };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Box display="flex" alignItems="center" flexDirection="column">
          <h1>Phonebook</h1>
          <Phonebook />
          <h2>Contacts</h2>
          <Filter />
          <Contacts />
        </Box>
      </ThemeProvider>
    </>
  );
};
