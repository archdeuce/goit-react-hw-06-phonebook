import { generate } from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/Add', ({ name, number }) => ({
  payload: {
    id: generate(),
    name,
    number,
  },
}));

const deleteContact = createAction('contact/Delete');
const changeFilter = createAction('contact/ChangeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
