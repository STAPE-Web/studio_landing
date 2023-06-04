"use client"

import { FC, useRef } from "react"
import styles from './style.module.css'

interface Props {
    label: string;
    placeholder: string;
}

const Textarea: FC<Props> = ({ label, placeholder }) => {
    const inputRef = useRef<any>(null)

    function focusInput() {
        inputRef.current?.focus()
    }

    return (
        <div className={styles.Textarea} onClick={() => focusInput()}>
            <p>{label}</p>
            <textarea placeholder={placeholder} ref={inputRef}></textarea>
        </div>
    )
}

export default Textarea