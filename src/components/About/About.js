import React from 'react';
import styles from './About.module.css';
import Title from '../Title/Title';
import Text from '../Text/Text';

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.text}>
                <Title text="Веломастерская “Велозар”" />
                <Text>
                    Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить
                    свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг
                    приносил Вам только радость и удовольствие от езды.
                </Text>
            </div>
            <div className={styles.dino} />
        </section>
    )
}

export default About;