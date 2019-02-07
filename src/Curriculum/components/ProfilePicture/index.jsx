import React from 'react';
import styles from './ProfilePicture.module.css';

const ProfilePicture = () => (
    <div className={styles.container}>
        <img
            className={styles.profilePicture}
            src="/images/profile1.png"
            alt="Profile"
        />
    </div>
);

export default ProfilePicture;
