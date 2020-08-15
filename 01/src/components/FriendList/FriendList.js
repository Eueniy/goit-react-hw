import React from 'react';
import styles from './friendList.module.css';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

export default function FriendList({ friends = [] }) {
  return (
    <>
      <ul className={styles.friendList}>
        {friends.map(friend => (
          <li className={styles.item} id={friend.id}>
            <FriendListItem {...friend} />
          </li>
        ))}
      </ul>
    </>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ).isRequired,
};
