import { createAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: uuid(),
    name,
    number,
  },
}));
// export const addContact = createAction('contacts/add');
export const filterContacts = createAction('contacts/filter');
export const deleteContact = createAction('contacts/delete');

// export const addContact = contact => ({
//   type: ADD_CONTACTS,
//   payload: {
//     id: uuid(),
//     name: contact.name,
//     number: contact.number,
//   },
// });

// export const deleteContact = contactId => ({
//   type: DELETE_CONTACTS,
//   payload: contactId,
// });

// export const filterContacts = value => ({
//   type: FILTER_CONTACTS,
//   payload: value,
// });
