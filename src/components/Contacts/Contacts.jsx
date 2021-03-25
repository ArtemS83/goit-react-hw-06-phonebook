import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactItem from '../ContactItem';
// import style from './Contacts.module.scss';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    paddingLeft: 30,
  },
});

const Contacts = ({ contacts }) => {
  const classes = useStyles();
  return (
    <ul className={classes.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          // onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const visibleContacts = (contactsArray, filterValue) => {
  const normalizedFilter = filterValue.toLowerCase();
  return contactsArray.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};
const mapStateToProps = state => ({
  contacts: visibleContacts(state.contacts.items, state.contacts.filter),
  // contacts: state.contacts.items,// все контакты, если не использовать фильтрацию
});

export default connect(mapStateToProps)(Contacts);
