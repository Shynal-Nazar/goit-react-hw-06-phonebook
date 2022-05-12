import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  items: [],
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
      const contactInState = state.items.some(
        item =>
          item.name.toLowerCase() === action.payload.nameInput.toLowerCase()
      );
      if (contactInState) {
        alert(`${action.payload.nameInput} is already in contacts!`);
        return;
      }

      state.items.splice(0, 0, newContact);
    },

    handleChangeFilter(state, action) {
      state.filter = action.payload;
    },

    handleRemove(state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, handleRemove, handleChangeFilter } =
  ContactSplice.actions;
