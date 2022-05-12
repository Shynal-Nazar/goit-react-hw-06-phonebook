import { Container, Title } from './App.styled';
import PhonebookSection from './phonebook/Phonebook';
import ContactList from './contacts/ContactsList';
import Filter from './filter/Filter';

export const App = () => {
  return (
    <Container>
      <Title>PHONEBOOK APP</Title>
      <PhonebookSection />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
};
