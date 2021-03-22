import PropTypes from 'prop-types';
import style from './Button.module.scss';

const Button = ({ title, type, id, onDelete }) => {
  const hendelClick = () => onDelete(id);
  return (
    <button
      className={type === 'button' ? style.buttonButton : style.button}
      type={type}
      onClick={hendelClick}
    >
      {title}
    </button>
  );
};

Button.defaultProps = {
  title: 'button',
  type: 'button',
  id: '',
  onDelete: () => {},
};

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  onDelete: PropTypes.func,
};

export default Button;
