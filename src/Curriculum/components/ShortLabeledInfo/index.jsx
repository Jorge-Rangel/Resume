import React from 'react';
import styles from './ShortLabeledInfo.module.css';

const ShortLabeledInfo = ({ title, info }) => (
    <div>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.labeledInfo}>
            {info.map(({ label, value }) => (
                <React.Fragment key={label}>
                    <span><strong>{label}</strong></span>
                    {value && <span>{value}</span>}
                </React.Fragment>
            ))}
        </div>
    </div>
);

export default ShortLabeledInfo;
