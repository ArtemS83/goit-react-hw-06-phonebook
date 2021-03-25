import {
  ADD_CONTACTS,
  DELETE_CONTACTS,
  FILTER_CONTACTS,
} from './contacts-types';

export const addContact = contact => ({
  type: ADD_CONTACTS,
  payload: contact,
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
