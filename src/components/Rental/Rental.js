import React from 'react'
import styles from './Rental.module.css';
import Title from '../Title/Title';
import Text from '../Text/Text';

const Rental = () => {
    return (
        <section className={styles.rental}>
            <div className={styles.text}>
                <Title text="Прокат велосипедов" />
                <Text>
                    У нас вы можете взять на прокат хорошо настроенные и обслуженные велосипеды. Как раз мы находимся в
                    прекрасном парке!
                </Text>
            </div>
            <div className={styles.image} />
        </section>
    )
}

export default Rental;