import React, { useRef, useState } from 'react'
//Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css"

// swiper modules 
import { FreeMode, Pagination } from 'swiper';

import "./history.css"
import icon from "../images/history_icon.png"
import slider1 from "../images/slider1.png"
import slider2 from "../images/slider2.png"

const history = () => {
    return (
        <section className='history__section'>
            <div className='history__container'>
                <div className='history__info'>
                    <p className='number'>01</p>
                    <div className='history__title'>
                        <p className='title'>HISTORY</p>
                        <img className='icon' src={icon} alt="" />
                    </div>
                </div>
                <p className='history__para'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum perspiciatis, eos atque quis ex maxime beatae temporibus natus? Rem soluta nulla praesentium facilis dicta consectetur. Nihil numquam, est nesciunt quae provident ex eligendi, repellat voluptatibus atque veniam ea harum ducimus? Deleniti adipisci nostrum, distinctio suscipit magni enim quidem ratione, reiciendis cumque harum ullam placeat inventore totam modi nihil consequuntur rem tempore nesciunt minima nam. Debitis iure nobis qui autem aliquid?</p>
            </div>


            <div className='swiper__container'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className='slider__img' src={slider1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='slider__img' src={slider2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='slider__img' src={slider1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='slider__img' src={slider2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='slider__img' src={slider1} alt="" /></SwiperSlide>
                    

                </Swiper>
            </div>

        </section>
    )
}

export default history
