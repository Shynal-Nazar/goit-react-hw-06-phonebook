import { Container, Title } from './App.styled';
import PhonebookSection from './phonebook/Phonebook';
import ContactList from './contacts/ContactsList';
import Filter from './filter/Filter';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <Title>PHONEBOOK APP</Title>
      <PhonebookSection />
      <Title>Contacts</Title>
      <Filter />
      <ContactList filteredContacts={getFilteredContacts()} />
    </Container>
  );
};
