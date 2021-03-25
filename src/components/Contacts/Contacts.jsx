// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
// import style from './Contacts.module.scss';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    paddingLeft: 30,
  },
});

//====================Contacts REDUX-HOOKS ===============//

const Contacts = () => {
  const classes = useStyles();

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  console.log('Contacts', contacts);
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
  console.log('visibleContacts', visibleContacts);
  return (
    <ul className={classes.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };

export default Contacts;

//=====================REDUX-{ connect } ===============//
// const Contacts = ({ contacts }) => {
//   const classes = useStyles();
//   return (
//     <ul className={classes.list}>
//       {contacts.map(({ id, name, number }) => (
//         <ContactItem
//           key={id}
//           id={id}
//           name={name}
//           number={number}
//           // onDelete={onDelete}
//         />
//       ))}
//     </ul>
//   );
// };

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };

// const visibleContacts = (contactsArray, filterValue) => {
//   const normalizedFilter = filterValue.toLowerCase();
//   return contactsArray.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };
// const mapStateToProps = state => ({
//   contacts: visibleContacts(state.contacts.items, state.contacts.filter),
//   // contacts: state.contacts.items,// все контакты, если не использовать фильтрацию
// });

// export default connect(mapStateToProps)(Contacts);
