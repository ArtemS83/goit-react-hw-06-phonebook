import { useState } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-actions';
// import PropTypes from 'prop-types';
// import { v4 as uuid } from 'uuid';
import Button from '../Button';
import style from './ContactsInputForm.module.scss';

//====================ContactsInputForm REDUX-HOOKS ===============//

const ContactsInputForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleInputChange = ({ target }) => {
    const { value, name } = target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleAddContact = e => {
    e.preventDefault();

    if (!number || !name) {
      alert(`Name or Number not entered `);
      return;
    }

    const normalizedName = name.toLowerCase().trim();
    const isExistingUser = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName,
    );

    if (isExistingUser) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <form className={style.form} onSubmit={handleAddContact}>
      <label className={style.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter contact"
          onChange={handleInputChange}
        />
      </label>
      <label className={style.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          placeholder="Enter number phone"
          onChange={handleInputChange}
        />
      </label>
      <Button title="Add contact" type="submit" />
    </form>
  );
};

// ContactsInputForm.propTypes = {
//   onSubmitForm: PropTypes.func.isRequired,
//   contacts: PropTypes.array.isRequired,
// };

export default ContactsInputForm;

//=====================REDUX-{ connect } ===============//

// const ContactsInputForm = ({ contacts, onSubmitForm }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleInputChange = ({ target }) => {
//     const { value, name } = target;
//     name === 'name' ? setName(value) : setNumber(value);
//   };

//   const handleAddContact = e => {
//     e.preventDefault();
//     if (!number || !name) {
//       alert(`Name or Number not entered `);
//       return;
//     }

//     const normalizedName = name.toLowerCase().trim();
//     const isExistingUser = contacts.find(
//       contact => contact.name.toLowerCase() === normalizedName,
//     );

//     if (isExistingUser) {
//       alert(`${name} is already in contacts`);
//       return;
//     }
//     // const newContact = {
//     //   id: uuid(),
//     //   name,
//     //   number,
//     // };
//     // onSubmitForm(newContact);

//     onSubmitForm({ name, number });
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form className={style.form} onSubmit={handleAddContact}>
//       <label className={style.label}>
//         Name
//         <input
//           type="text"
//           name="name"
//           value={name}
//           placeholder="Enter contact"
//           onChange={handleInputChange}
//         />
//       </label>
//       <label className={style.label}>
//         Number
//         <input
//           type="tel"
//           name="number"
//           value={number}
//           placeholder="Enter number phone"
//           onChange={handleInputChange}
//         />
//       </label>
//       <Button title="Add contact" type="submit" />
//     </form>
//   );
// };

// ContactsInputForm.propTypes = {
//   onSubmitForm: PropTypes.func.isRequired,
//   contacts: PropTypes.array.isRequired,
// };

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });
// const mapDispatchToProps = dispatch => ({
//   onSubmitForm: contact => dispatch(addContact(contact)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsInputForm);
