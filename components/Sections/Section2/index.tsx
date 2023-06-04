import { AndroidIcon, AppleIcon, CodeIcon } from '@/components/Icons'
import styles from './style.module.css'
import Team from '@/components/UI/Team'

const Section2 = () => {
    const items = [
        { id: 1, image: '/section2_1.png', name: 'Worker', secondName: '#1', icon: AndroidIcon },
        { id: 2, image: '/section2_2.png', name: 'Worker', secondName: '#2', icon: CodeIcon, class: 'active' },
        { id: 3, image: '/section2_3.png', name: 'Worker', secondName: '#3', icon: AppleIcon },
    ]

    return (
        <section className={styles.Section}>
            <div className={styles.Box}>
                <div className={styles.Title}>
                    <h2><span>#</span> Team</h2>
                </div>

                <div className={styles.MiniBox}>
                    {items.map(item => (
                        <Team key={item.id} item={item} />
                    ))}
                </div>
            </div>

            <div className={styles.Background}>
                <div />
                <div />
            </div>
        </section>
    )
}

export default Section2