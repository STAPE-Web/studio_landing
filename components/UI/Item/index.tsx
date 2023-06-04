import { FC } from "react";
import styles from './style.module.css'
import { ArrowRightIcon } from "@/components/Icons";

interface Props {
    item: {
        id: number;
        name: string;
        secondName: string;
        icon: Function;
        text: string;
        class?: string;
    }
}

const Item: FC<Props> = ({ item }) => {
    return (
        <div className={`${styles.Item} ${item.class === 'active' ? styles.Active : ''}`}>
            <div className={styles.Title}>
                <p><span>{item.name}</span> {item.secondName}</p>

                <item.icon className={styles.Icon} />
            </div>

            <p>{item.text}</p>

            <div className={styles.Line} />

            <div className={styles.More}>
                <p>More Information</p>

                <ArrowRightIcon className={styles.Icon} />
            </div>
        </div>
    )
}

export default Item