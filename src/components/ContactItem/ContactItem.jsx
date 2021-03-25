import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import Button from 'components/Button';
import { MdPhoneAndroid } from 'react-icons/md';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 500,
  },
  name: {
    marginRight: 8,
    marginLeft: 6,
  },
  number: {
    color: 'rgb(79, 119, 238)',
  },
});

//====================Filter REDUX-HOOKS ===============//

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const hendelDeleteContact = () => dispatch(deleteContact(id));

  const classes = useStyles();
  return (
    <li className={classes.item}>
      <MdPhoneAndroid />
      <span className={classes.name}>{name}:</span>
      <span className={classes.number}>{number}</span>
      <Button title="Delete" onDelete={hendelDeleteContact} />
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  // onDelete: PropTypes.func.isRequired,
};

export default ContactItem;

//=====================REDUX-{ connect } ===============//

// const ContactItem = ({ name, number, id, onDelete }) => {
//   const classes = useStyles();
//   return (
//     <li className={classes.item}>
//       <MdPhoneAndroid />
//       <span className={classes.name}>{name}:</span>
//       <span className={classes.number}>{number}</span>
//       <Button title="Delete" id={id} onDelete={onDelete} />
//     </li>
//   );
// };

// ContactItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = dispatch => ({
//   onDelete: id => dispatch(deleteContact(id)),
// });
// export default connect(null, mapDispatchToProps)(ContactItem);
