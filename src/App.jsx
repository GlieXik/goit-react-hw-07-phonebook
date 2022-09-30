import { GlobalStyle } from "./utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import { Phonebook } from "./components/Phonebook/Phonebook";
import { useEffect } from "react";
import { Contacts } from "./components/Contacts/Contacts";

import { Filter } from "./components/Filter/Filter";
import { Box } from "./utils/Box";
import { useDispatch, useSelector } from "react-redux";
import { getError, getIsLoading } from "./redux/selectors";
import { fetchContacts } from "./redux/operations";
export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Box display="flex" alignItems="center" flexDirection="column">
          <h1>Phonebook</h1>
          <Phonebook />
          <h2>Contacts</h2>
          {isLoading && !error && <b>Request in progress...</b>}
          <Filter />
          <Contacts />
        </Box>
      </ThemeProvider>
    </>
  );
};
