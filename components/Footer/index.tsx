import Logo from "../Logo"
import styles from './style.module.css'

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div>
                <Logo />

                <p>© 2023 SpringCode. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
