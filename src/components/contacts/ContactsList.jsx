import React from 'react';
import ContactListItem from './ContactsItem';
import { ContactsSection, ContactsList } from './Contact.styled';
import { handleRemove } from 'redux/contactsSplice';
import { useDispatch, useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();
  const dispatch = useDispatch();
  return (
    filteredContacts.length > 0 && (
      <ContactsSection>
        <ContactsList>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              onClickRemove={() => dispatch(handleRemove(id))}
            />
          ))}
        </ContactsList>
      </ContactsSection>
    )
  );
};

export default ContactList;
