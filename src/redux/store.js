import { configureStore } from '@reduxjs/toolkit';
import contacts from './contact/contact-reducer';

const store = configureStore({
  reducer: {
    contacts,
  },
});

export default store;
