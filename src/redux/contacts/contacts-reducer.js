// import { combineReducers } from 'redux';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  addContact,
  filterContacts,
  deleteContact,
} from '../../redux/contacts/contacts-actions';

// import {
//   ADD_CONTACTS,
//   DELETE_CONTACTS,
//   FILTER_CONTACTS,
// } from './contacts-types';

// const initialState = JSON.parse(window.localStorage.getItem('contacts')) ?? [];
const initialState = [];
const items = createReducer(initialState, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});
const filter = createReducer('', {
  [filterContacts]: (state, action) => action.payload.trim(),
});

// const items = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACTS:
//       return [...state, payload];

//     case DELETE_CONTACTS:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case FILTER_CONTACTS:
//       return payload.trim();
//     // return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
