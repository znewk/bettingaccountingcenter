import React from 'react';
import styles from '../../styles/logo.module.css'

const Logo: React.FC = () => {
    return (
        <div className={styles.logo}>
            <div className={styles.logoBg}>Ц</div>
            <span className={styles.title}>ЦУС</span>
        </div>
    );
}

export default Logo;
