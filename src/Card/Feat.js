import React, { useState } from 'react'
import img1 from '../Images/img (1).png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import './Blog.css'
function Feat() {
    const [swiperRef, setSwiperRef] = useState(null);
    return (
        <div className='container'>
            <button className='btn1' type="button">Featured</button>
            <button className="btn2 m-5" type="button" >Recent</button>
            <div className="cont">
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card">
                            <img src={img1} className='Image h-100 w-100  align-items-center' alt="" />
                            <div className="card-body">
                                <h3><b>$960,000</b></h3>
                                <p className="card-text">Apartment for sale with high quality finishing NewYork</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <img src={img1} className='Image h-100 w-100  align-items-center' alt="" />
                            <div className="card-body">
                                <h3><b>$960,000</b></h3>
                                <p className="card-text">Apartment for sale with high quality finishing NewYork</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="card">
                        <img src={img1} className='Image h-100 w-100  align-items-center' alt="" />
                        <div className="card-body">
                            <h3><b>$960,000</b></h3>
                            <p className="card-text">Apartment for sale with high quality finishing NewYork</p>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="card">
                        <img src={img1} className='Image h-100 w-100  align-items-center' alt="" />
                        <div className="card-body">
                            <h3><b>$960,000</b></h3>
                            <p className="card-text">Apartment for sale with high quality finishing NewYork</p>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Feat

