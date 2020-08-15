import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export default function Profile(user) {
  const { avatar, name, tag, location, stats } = user;
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={avatar} alt={name + ' avatar'} class={styles.avatar} />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.statsItem}>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{stats.followers}</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{stats.views}</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
      stats: PropTypes.arrayOf({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
    }),
  ),
};
