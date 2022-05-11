import { configureStore } from '@reduxjs/toolkit';
import { ContactSplice } from './contactsSplice';

export const store = configureStore({
  reducer: {
    contacts: ContactSplice.reducer,
  },
});
