import { generate } from 'shortid';
import types from './contact-types';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: generate(),
    name,
    number,
  },
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
