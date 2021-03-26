// import { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import Section from 'components/Section';
import ContactsInputForm from 'components/ContactsInputForm';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';
import Notification from 'components/Notification';
import { getContacts } from 'redux/contacts/contacts-selectors';

//====================ContactsPage REDUX-HOOKS ===============//

const App = () => {
  // const contacts = useSelector(state => state.contacts.items);
  const contacts = useSelector(getContacts);
  return (
    <>
      <Section title="Phonebook">
        <ContactsInputForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter text="Find contacts by name" />
            <Contacts />
          </>
        ) : (
          <Notification message="No contacts" />
        )}
      </Section>
    </>
  );
};

export default App;

// //====================ContactsPage REDUX-{ connect } ===============//

// const App = ({ contacts }) => {
//   // const [contacts, setContacts] = useState(  //--------------
//   //   JSON.parse(window.localStorage.getItem('contacts')) ?? [],
//   // );
//   // const [filter, setFilter] = useState('');//------

//   // const handleSubmitForm = contact => {//--------
//   // setContacts(prevState => [contact, ...prevState]);
//   // setFilter('');
//   // };

//   // const handleFilter = value => setFilter(value.trim());//----

//   // const handleVisibleContacts = () => {//----------
//   //   const normalizedFilter = filter.toLowerCase();
//   //   return contacts.filter(contact =>
//   //     contact.name.toLowerCase().includes(normalizedFilter),
//   //   );
//   // };

//   // const handleDeleteContact = id =>//---------
//   //   setContacts(prevState => prevState.filter(contact => contact.id !== id));//-----

//   // componentdidMount

//   // useEffect(() => {
//   //   setContacts(JSON.parse(window.localStorage.getItem('contacts')) ?? []);
//   // }, []); // []-запускается только при первом рендере и больше никогда,
//   // если не добавить условие( ?? []),
//   // то при отсутствии localStorage запишет null в setContacts, что вызовет ошибку

//   // componentdidUpdate
//   // useEffect(() => {
//   //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
//   // }, [contacts]); // [contacts]-запускается при изменении contacts

//   return (
//     <>
//       <Section title="Phonebook">
//         <ContactsInputForm
//         // contacts={contacts}
//         // onSubmitForm={handleSubmitForm}
//         />
//       </Section>
//       <Section title="Contacts">
//         {contacts.length > 0 ? (
//           <>
//             <Filter
//               text="Find contacts by name"
//               // filter={filter}
//               // onInputFindChange={handleFilter}
//             />
//             <Contacts
//             // contacts={handleVisibleContacts()}
//             // onDelete={handleDeleteContact}
//             />
//           </>
//         ) : (
//           <Notification message="No contacts" />
//         )}
//       </Section>
//     </>
//   );
// };

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });

// export default connect(mapStateToProps)(App);
