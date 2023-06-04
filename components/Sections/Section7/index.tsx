import { EmailIcon, GitHubIcon, TelegramIcon } from '@/components/Icons'
import styles from './style.module.css'
import Contacts from '@/components/UI/Contacts'
import Input from '@/components/UI/Input'
import Textarea from '@/components/UI/Textarea'
import Button from '@/components/UI/Buttons/FormButton'

const Section7 = () => {
    const items = [
        { id: 1, name: '@SpringCode', icon: GitHubIcon, },
        { id: 2, name: '@SpringCode', icon: TelegramIcon, },
        { id: 3, name: 'info@springCode', icon: EmailIcon, },
        { id: 4, name: '@SpringCode', icon: TelegramIcon, },
    ]

    return (
        <section className={styles.Section}>
            <div className={styles.Box}>
                <div className={styles.Title}>
                    <h2><span>#</span> contacts</h2>
                </div>

                <div className={styles.MiniBox}>
                    <div className={styles.Contacts}>
                        {items.map(item => (
                            <Contacts key={item.id} item={item} />
                        ))}
                    </div>

                    <form>
                        <Input label='Name*' placeholder='Enter your name' />
                        <Input label='Email*' placeholder='example@gmail.com' />
                        <Input label='Company*' placeholder='Enter your company name' />
                        <Textarea label='Message' placeholder='Tell us about your project. Describe the idea of your app. How will it help your customers?' />
                        <Button>Contact us</Button>
                    </form>
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

export default Section7