import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactsItem';
import { ContactsSection, ContactsList } from './Contact.styled';
import { handleRemove } from 'redux/contactsSplice';
import { useDispatch } from 'react-redux';

const ContactList = ({ filteredContacts }) => {
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

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
