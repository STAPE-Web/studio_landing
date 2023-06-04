import styles from './style.module.css'

const Section3 = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Box}>
                <div className={styles.Title}>
                    <h2><span>#</span> About us</h2>
                </div>

                <div className={styles.MiniBox}>
                    <h2>Spring<span>Code</span> - we create <span>mobility</span> in your business!</h2>

                    <div className={styles.Cards}>
                        <div>Lorem ipsum dolor sit amet consectetur. Pulvinar pharetra ut <span>pellentesque</span> enim at. <span>Volutpat</span> ornare pellentesque tellus posuere ac fringilla vestibulum.</div>
                        <div>Lorem ipsum <span>dolor</span> sit amet consectetur. Pulvinar pharetra ut pellentesque enim at.</div>
                        <div>Lorem ipsum dolor sit amet consectetur. <span>Pulvinar</span> pharetra ut pellentesque enim at.</div>
                    </div>
                </div>
            </div>

            <div className={styles.Background}>
                <div />
                <div />
            </div>
        </section>
    )
}

export default Section3