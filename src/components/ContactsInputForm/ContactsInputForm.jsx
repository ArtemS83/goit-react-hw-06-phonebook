import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import Button from '../Button';
import style from './ContactsInputForm.module.scss';

const ContactsInputForm = ({ contacts, onSubmitForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
    const newContact = {
      id: uuid(),
      name,
      number,
    };
    onSubmitForm(newContact);
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

ContactsInputForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactsInputForm;
