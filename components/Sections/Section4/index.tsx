import { AndroidIcon, AppleIcon, BackendIcon, CodeIcon, DesignIcon } from '@/components/Icons'
import styles from './style.module.css'
import Item from '@/components/UI/Item'

const Section4 = () => {
    const items = [
        { id: 1, name: 'Backend', secondName: 'Development', icon: BackendIcon, text: 'Lorem ipsum dolor sit amet consectetur. Euismod elit aenean vel enim et amet quam dictumst.' },
        { id: 2, name: 'Android', secondName: 'Development', icon: AndroidIcon, text: 'Lorem ipsum dolor sit amet consectetur. Euismod elit aenean vel enim et amet quam dictumst.', class: 'active' },
        { id: 3, name: 'IOS', secondName: 'Development', icon: AppleIcon, text: 'Lorem ipsum dolor sit amet consectetur. Euismod elit aenean vel enim et amet quam dictumst.' },
        { id: 4, name: 'Web', secondName: 'Development', icon: CodeIcon, text: 'Lorem ipsum dolor sit amet consectetur. Euismod elit aenean vel enim et amet quam dictumst.' },
        { id: 5, name: 'UX/UI', secondName: 'Design', icon: DesignIcon, text: 'Lorem ipsum dolor sit amet consectetur. Euismod elit aenean vel enim et amet quam dictumst.', class: 'active' },
    ]

    return (
        <section className={styles.Section}>
            <div className={styles.Box}>
                <div className={styles.Title}>
                    <h2><span>#</span> Directions</h2>
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

export default Section4