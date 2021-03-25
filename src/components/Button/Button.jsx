import PropTypes from 'prop-types';
import style from './Button.module.scss';

const Button = ({ title, type, onDelete }) => {
  return (
    <button
      className={type === 'button' ? style.buttonButton : style.button}
      type={type}
      onClick={onDelete}
    >
      {title}
    </button>
  );
};

Button.defaultProps = {
  title: 'button',
  type: 'button',
  // id: '',
  onDelete: () => {},
};

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  // id: PropTypes.string,
  onDelete: PropTypes.func,
};

export default Button;
