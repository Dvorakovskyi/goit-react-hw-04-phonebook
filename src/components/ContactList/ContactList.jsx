import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';

const ContactList = ({ contacts, onClick }) => {
  return (
    <section>
      <ul>
        {contacts.map(({ id, number, name }) => (
          <ContactItem
            contacts={contacts}
            key={id}
            name={name}
            number={number}
            onClick={() => onClick(id)}
          />
        ))}
      </ul>
    </section>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
