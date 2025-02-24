import React from 'react';
import styles from './Offer.module.css';
import Title from '../Title/Title';
import Text from '../Text/Text';

const Offer = () => {
    return (
        <section className={styles.offer}>
            <div className={styles.text}>
                <Title text="Что мы предлагаем" />
                <Text>
                    В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и
                    настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать
                    многих проблем и дорогого ремонта. Все работы выполняем качественно и с душой.
                </Text>
            </div>
            <div className={styles.image} />
        </section>
    )
}

export default Offer;