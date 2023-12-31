import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline }) {
  return (
      <li className={css.item}>
      <span
              style={{ backgroundColor: isOnline ? 'green' : 'red' }}
              className={css.status}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
