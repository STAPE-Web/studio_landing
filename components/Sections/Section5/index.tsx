"use client"

import { AndroidIcon, AppleIcon, DesignIcon } from '@/components/Icons'
import styles from './style.module.css'
import Portfolio from '@/components/UI/Portfolio'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from 'react';

const Section5 = () => {
    const [viewSlides, setViewSlides] = useState(3)

    const items = [
        { id: 1, name: 'Work', secondName: '#1', icon: AndroidIcon, image: '/section5_1.png' },
        { id: 2, name: 'Work', secondName: '#2', icon: DesignIcon, image: '/section5_2.png' },
        { id: 3, name: 'Work', secondName: '#3', icon: AppleIcon, image: '/section5_3.png' },
        { id: 4, name: 'Work', secondName: '#4', icon: AndroidIcon, image: '/section5_1.png' },
        { id: 5, name: 'Work', secondName: '#5', icon: DesignIcon, image: '/section5_2.png' },
        { id: 6, name: 'Work', secondName: '#6', icon: AppleIcon, image: '/section5_3.png' },
    ]

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 850) {
                setViewSlides(1)
            } else if (window.innerWidth >= 850 && window.innerWidth < 1400) {
                setViewSlides(2)
            } else {
                setViewSlides(3)
            }
        })

        if (window.innerWidth < 850) {
            setViewSlides(1)
        } else if (window.innerWidth >= 850 && window.innerWidth < 1400) {
            setViewSlides(2)
        } else {
            setViewSlides(3)
        }
    }, [])

    return (
        <section className={styles.Section}>
            <div className={styles.Box}>
                <div className={styles.Title}>
                    <h2><span>#</span> Portfolio</h2>
                </div>

                <div className={styles.MiniBox}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={viewSlides}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            renderBullet: function (index, className) {
                                return '<span class="' + className + '"></span>';
                            },
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className={styles.Swiper}
                    >
                        {items.map(item => (
                            <SwiperSlide key={item.id} className={styles.SwiperSlide}>
                                <Portfolio item={item} />
                            </SwiperSlide>
                        ))}

                        <div className={styles.Empty} />
                    </Swiper>
                </div>
            </div>

            <div className={styles.Background}>
                <div />
                <div />
            </div>
        </section>
    )
}

export default Section5