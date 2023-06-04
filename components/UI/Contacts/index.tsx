import { FC } from "react";
import styles from './style.module.css'

interface Props {
    item: {
        id: number;
        name: string;
        icon: Function;
    }
}

const Contacts: FC<Props> = ({ item }) => {
    return (
        <div className={styles.Contacts}>
            <p>{item.name}</p>

            <item.icon className={styles.Icon} />
        </div>
    )
}

export default Contacts