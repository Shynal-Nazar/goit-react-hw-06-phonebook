import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const ContactSplice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      const newContact = {
        id: nanoid(),
        name: action.payload.nameInput,
        number: action.payload.numberInput,
      };
      const contactInState = state.contacts.some(
        contact =>
          contact.name.toLowerCase() === action.payload.nameInput.toLowerCase()
      );
      if (contactInState) {
        alert(`${action.payload.nameInput} is already in contacts!`);
        return;
      }

      state.contacts.splice(0, 0, newContact);
    },

    handleChangeFilter(state, action) {
      state.filter = action.payload;
    },

    handleRemove(state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, handleRemove, handleChangeFilter } =
  ContactSplice.actions;
