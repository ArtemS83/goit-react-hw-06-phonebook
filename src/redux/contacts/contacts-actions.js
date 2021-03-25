import {
  ADD_CONTACTS,
  DELETE_CONTACTS,
  FILTER_CONTACTS,
} from './contacts-types';
import { v4 as uuid } from 'uuid';

// export const addContact = contact => ({
//   type: ADD_CONTACTS,
//   payload: contact,
// });
export const addContact = contact => ({
  type: ADD_CONTACTS,
  payload: {
    id: uuid(),
    name: contact.name,
    number: contact.number,
  },
});

export const deleteContact = contactId => ({
  type: DELETE_CONTACTS,
  payload: contactId,
});

export const filterContacts = value => ({
  type: FILTER_CONTACTS,
  payload: value,
});

// export default { addContact, deleteContact, filterContacts };
