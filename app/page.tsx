import Header from '@/components/Header'
import styles from './page.module.css'
import Footer from '@/components/Footer'
import Section1 from '@/components/Sections/Section1'
import Section2 from '@/components/Sections/Section2'
import Section3 from '@/components/Sections/Section3'
import Section4 from '@/components/Sections/Section4'
import Section5 from '@/components/Sections/Section5'
import Section6 from '@/components/Sections/Section6'
import Section7 from '@/components/Sections/Section7'

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </main>

      <Footer />
    </>
  )
}
