import React from 'react'
import styles from './NavItem.module.css'

const NavItem = ({ text, link }) => {
    return (
        <li className={styles.navItem}>
            <a href={link}>{text}</a>
        </li>
    )
}

export default NavItem;