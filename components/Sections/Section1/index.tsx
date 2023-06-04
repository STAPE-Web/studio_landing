import styles from './style.module.css'

const Section1 = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Box}>
                <h1>Create innovative things <br /> with Spring<span>Code</span></h1>
                <p>With our studio, you can cover any need for development. We provide development for various platforms (Web, Android, IOS)</p>
            </div>

            <div className={styles.Background}>
                <div />
                <div />
                <div />
            </div>
        </section>
    )
}

export default Section1