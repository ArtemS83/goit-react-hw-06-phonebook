import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
// import style from './Contacts.module.scss';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    paddingLeft: 30,
  },
});

const Contacts = ({ contacts, onDelete }) => {
  const classes = useStyles();
  return (
    <ul className={classes.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
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

export default Contacts;
