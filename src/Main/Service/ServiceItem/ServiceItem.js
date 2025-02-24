import React, { useState } from 'react';
import styles from './ServiceItem.module.css';

const ServiceItem = ({ title }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const animationClass = isHovered ? styles.serviceItemHovered : '';

    return (
        <div className={`${styles.serviceItem} ${animationClass}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <h3>{title}</h3>
        </div>
    )
}

export default ServiceItem;