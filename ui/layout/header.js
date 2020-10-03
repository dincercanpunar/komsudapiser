import React from 'react'
import Link from 'next/link';

import styles from './header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <Link href="/">
                    <div className={styles.logo}>
                        <img 
                            alt="Logo" 
                            src="/logo.png"
                        />
                    </div>
                </Link>
                <div>
                    Signup
                </div>
            </nav>
        </header>
    )
}

export default Header;