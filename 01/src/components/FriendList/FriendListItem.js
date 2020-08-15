import React from 'react';
import styles from './friendList.module.css';
import PropTypes from 'prop-types';

export default function FriendListItem(friends) {
  return (
    <>
      <span
        className={friends.isOnline ? styles.status : styles.statusFalse}
      ></span>
      <img
        className={styles.avatar}
        src={friends.avatar}
        alt={friends.name}
        width="48"
      />
      <p className={styles.name}>{friends.name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  alt: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
