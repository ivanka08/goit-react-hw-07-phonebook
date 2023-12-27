
import { Contact } from "./Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchContacts } from "../../redux/contacts-operations";

export const ContactList = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(store => store.contacts.items);
  const filter = useSelector(store => store.filter);

  const filterContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizedValue = filter.toLowerCase();
    const filteredContactsArray = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue));
    
    return filteredContactsArray;
  }

  const filteredContacts = filterContacts();

  return <ul className="">
    {filteredContacts.length > 0 ? filteredContacts.map((contact =>
      <Contact key={contact.id} contact={contact}/>
    )) : <p> no matches <span>☹</span></p>}
  </ul>
}



