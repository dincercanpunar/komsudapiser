import React from 'react';
import Header from './layout/Header';

import styles from './layout.module.css';

function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <Header />
            {
                children
            }
        </div>
    )
}

export default Layout;