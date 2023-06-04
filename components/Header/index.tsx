"use client"

import { useState } from "react"
import { ArrowDownIcon } from "../Icons"
import Logo from "../Logo"
import styles from './style.module.css'
import Button from "@/components/UI/Buttons/HeaderButton"

const Header = () => {
    const [active, setActive] = useState(false)
    const [lang, setLang] = useState('En')
    const langList = [
        { id: 1, name: 'En', link: '' },
        { id: 2, name: 'Ru', link: '' },
    ]

    return (
        <header className={styles.Header}>
            <Logo />

            <ul>
                <li>Team</li>
                <li>About</li>
                <li>Directions</li>
                <li>Portfolio</li>
                <li>Jobs</li>

                <div className={`${styles.Lang} ${active ? styles.Active : ''}`}>
                    <div className={styles.Select} onClick={() => setActive(!active)}>
                        {lang}
                        <ArrowDownIcon className={styles.Icon} />
                    </div>

                    <div className={styles.List}>
                        {langList.map(lang => (
                            <div key={lang.id}>{lang.name}</div>
                        ))}
                    </div>
                </div>
            </ul>

            <Button>Contact us</Button>
        </header>
    )
}

export default Header