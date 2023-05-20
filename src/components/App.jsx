import React from 'react';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import ContactForm from './ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';
import { StyledWrapper } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    const contactsParsed = JSON.parse(contacts);

    return contactsParsed;
  });
  const [filter, setFilter] = useState('');

  const addNewContact = data => {
    if (checkContact(data.name)) {
      Notify.failure(`${data.name} is already in contacts`);

      return;
    }

    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    const currentContact = contacts;

    const updateContacts = [...currentContact, newContact];

    setContacts(updateContacts);
  };

  useEffect(() => {
    contacts && localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeFilter = event => {
    const { value } = event.currentTarget;

    setFilter(value);
  };

  const getContact = () => {
    const findContact = contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .trim()
        .includes(filter.toLowerCase().trim());
    });
    return findContact;
  };

  const checkContact = name => {
    const normalizedName = name.toLowerCase().trim();

    const foundName = contacts.find(
      ({ name }) => name.toLowerCase().trim() === normalizedName
    );
    return Boolean(foundName);
  };

  const deleteContact = contactId => {
    const foundDeleteContact = contacts.filter(
      contact => contact.id !== contactId
    );

    return setContacts(foundDeleteContact);
  };

  const foundContact = getContact();

  return (
    <StyledWrapper>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleChangeFilter} />
      {contacts.length > 0 ? (
        <ContactList contacts={foundContact} onClick={deleteContact} />
      ) : (
        <Notification />
      )}
    </StyledWrapper>
  );
};

export default App;
