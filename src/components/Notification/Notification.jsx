import PropTypes from 'prop-types';
// import style from './Notification.module.scss';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  title: {
    marginTop: 20,
    fontSize: 20,
    color: 'red',
  },
});

const Notification = ({ message }) => {
  const classes = useStyles();
  // return <p className={style.title}>{message}</p>;
  return <p className={classes.title}>{message}</p>;
};

Notification.defaultProps = {
  message: '',
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
