import { Contact } from "./Contact/Contact";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { createSelector } from "reselect";

import { fetchContacts } from "../../redux/contacts-operations";
import { selectContacts, selectFilter } from "../../redux/selectors";

export const ContactList = ({ state }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // Access contacts and filter directly from selectors
  const filteredContacts = selectVisibleContacts(state);

  return (
    <ul className="">
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <p>no matches <span>☹</span></p>
      )}
    </ul>
  );
};

// Define the memoized selector for visible contacts
const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);