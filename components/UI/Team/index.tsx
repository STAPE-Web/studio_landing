import Image from "next/image";
import { FC } from "react";
import styles from './style.module.css'

interface Props {
    item: {
        id: number;
        image: string;
        name: string;
        secondName: string;
        icon: Function;
        class?: string;
    }
}

const Team: FC<Props> = ({ item }) => {
    return (
        <div className={`${styles.Team} ${item.class === 'active' ? styles.Active : ''}`}>
            <Image src={item.image} className={styles.Image} priority width={250} height={250} alt="" />

            <div className={styles.Bar}>
                <p>{item.name} <span>{item.secondName}</span></p>

                <item.icon className={styles.Icon} />
            </div>
        </div>
    )
}

export default Team