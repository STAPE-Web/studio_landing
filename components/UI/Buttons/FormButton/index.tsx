import styles from './style.module.css'

const Button = (props: any) => {
    return (
        <div {...props} className={styles.Button}>
            {props.children}
        </div>
    )
}

export default Button