"use client"

import { FC, useRef } from "react"
import styles from './style.module.css'

interface Props {
    label: string;
    placeholder: string;
}

const Input: FC<Props> = ({ label, placeholder }) => {
    const inputRef = useRef<any>(null)

    function focusInput() {
        inputRef.current?.focus()
    }

    return (
        <div className={styles.Input} onClick={() => focusInput()}>
            <p>{label}</p>
            <input type="text" placeholder={placeholder} ref={inputRef} />
        </div>
    )
}

export default Input