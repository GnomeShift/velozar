import React from 'react'
import styles from './Navigation.module.css'
import NavItem from "./NavItem/NavItem";

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navList}>
                <NavItem text="О нас" link="#about"></NavItem>
                <NavItem text="Услуги" link="#service"></NavItem>
                <NavItem text="Аренда" link="#rental"></NavItem>
            </ul>
        </nav>
    )
}

export default Navigation;