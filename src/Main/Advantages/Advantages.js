import React from 'react';
import styles from './Advantages.module.css';
import Text from "../Text/Text";

const Advantages = () => {
    return (
        <section className={styles.advantages}>
            <div className={styles.text}>
                <Text>
                    <p>
                        Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть их них даже друзьями.
                    </p>
                    А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.
                </Text>
            </div>
        </section>
    )
}

export default Advantages;