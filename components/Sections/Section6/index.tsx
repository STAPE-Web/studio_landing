import { AppleIcon, BackendIcon, CodeIcon } from '@/components/Icons'
import styles from './style.module.css'
import Item from '@/components/UI/Item'

const Section6 = () => {
    const items = [
        { id: 1, name: 'Python', secondName: 'Developer', icon: BackendIcon, text: 'Lorem ipsum dolor sit amet consectetur. Euismod elit aenean vel enim et amet quam dictumst.' },
        { id: 2, name: 'IOS', secondName: 'Developer', icon: AppleIcon, text: 'Lorem ipsum dolor sit amet consectetur. Euismod elit aenean vel enim et amet quam dictumst.' },
        { id: 3, name: 'React.js', secondName: 'Developer', icon: CodeIcon, text: 'Lorem ipsum dolor sit amet consectetur. Euismod elit aenean vel enim et amet quam dictumst.' },
    ]

    return (
        <section className={styles.Section}>
            <div className={styles.Box}>
                <div className={styles.Title}>
                    <h2><span>#</span> Jobs</h2>
                </div>

                <div className={styles.MiniBox}>
                    {items.map(item => (
                        <Item key={item.id} item={item} />
                    ))}
                </div>
            </div>

            <div className={styles.Background}>
                <div />
                <div />
                <div />
            </div>
        </section>
    )
}

export default Section6