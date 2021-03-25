import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contacts-actions';
import style from './Filter.module.scss';

const Filter = ({ text, filter, onInputFindChange }) => {
  const handleInputFindChange = ({ target }) => {
    const { value } = target;
    onInputFindChange(value);
  };

  return (
    <>
      <p className={style.title}>{text}</p>
      <input
        className={style.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleInputFindChange}
      />
    </>
  );
};

Filter.defaultProps = {
  text: '',
  filter: '',
};

Filter.propTypes = {
  text: PropTypes.string,
  filter: PropTypes.string,
  onInputFindChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
  onInputFindChange: value => dispatch(filterContacts(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
