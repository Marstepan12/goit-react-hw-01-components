import css from './FriendList.module.css'
import PropTypes from 'prop-types';

function FriendList({ children }) {
  return <ul className={css.friends_list}>{children}</ul>;
}

FriendList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FriendList;