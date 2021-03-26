export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};
// const contacts = useSelector(state => state.contacts.items);
// const filter = useSelector(state => state.contacts.filter);

// const normalizedFilter = filter.toLowerCase();
// const visibleContacts = contacts.filter(contact =>
//   contact.name.toLowerCase().includes(normalizedFilter),
// );
