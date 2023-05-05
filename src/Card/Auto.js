import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import './Blog.css'
import logo from '../Images/logo.png'
function Auto() {
    return (
        <div className='container'>
            <h5>Partners</h5>
            <h1>We work with our best Partners.</h1>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={4}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={logo} className='Image align-items-center' alt="" />
                    <p className='patner text-center'>Patner name</p>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={logo} className='Image align-items-center' alt="" />
                    <p className='patner text-center'>Patner name</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={logo} className='Image align-items-center' alt="" />
                    <p className='patner text-center'>Patner name</p>
                </SwiperSlide>
                <SwiperSlide><img src={logo} className='Image align-items-center' alt="" />
                    <p className='patner text-center'>Patner name</p></SwiperSlide>
                <SwiperSlide><img src={logo} className='Image align-items-center' alt="" />
                    <p className='patner text-center'>Patner name</p></SwiperSlide>
                <SwiperSlide><img src={logo} className='Image align-items-center' alt="" />
                    <p className='patner text-center'>Patner name</p></SwiperSlide>
                <SwiperSlide><img src={logo} className='Image align-items-center' alt="" />
                    <p className='patner text-center'>Patner name</p></SwiperSlide>
                <SwiperSlide><img src={logo} className='Image align-items-center' alt="" />
                    <p className='patner text-center'>Patner name</p></SwiperSlide>
                <SwiperSlide><img src={logo} className='Image align-items-center' alt="" />
                    <p className='patner text-center'>Patner name</p></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Auto