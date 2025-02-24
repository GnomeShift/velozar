import React, {useEffect, useState} from 'react';
import styles from './Service.module.css';
import ServiceItem from './ServiceItem/ServiceItem';

const Service = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const servicesSection = document.querySelector(`.${styles.services}`);
            if (servicesSection) {
                const sectionTop = servicesSection.offsetTop;
                const windowBottom = window.scrollY + window.innerHeight;
                if (windowBottom > sectionTop) {
                    setIsVisible(true);
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const animationClass = isVisible ? styles.servicesVisible : '';

    return (
        <section className={styles.servicesSection}>
            <div className={`${styles.services} ${animationClass}`}>
                <ServiceItem title="Годовое ТО" />
                <ServiceItem title="Выравнивание колес" />
                <ServiceItem title="Настройка переключателей" />
            </div>
        </section>
    )
}

export default Service;