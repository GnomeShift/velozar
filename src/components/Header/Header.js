import React from 'react';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo />
                <Navigation />
                <Button text="Связаться" />
            </div>
        </header>
    )
}

export default Header;