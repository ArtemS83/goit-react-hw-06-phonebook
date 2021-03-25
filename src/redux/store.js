// import { createStore, combineReducers } from 'redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactsReducer from './contacts/contacts-reducer';
import contacts from './contacts/contacts-reducer';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

const store = configureStore({
  reducer: {
    contacts,
  },
});
// const store = createStore(rootReducer, composeWithDevTools()); // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

export default store;
