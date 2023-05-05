import React from 'react'
import img from '../Images/img.png'
import './Blog.css'
function Client() {
    return (
        <div>
            <div className="container">
                <span><h5>Testimonials</h5></span>
                <h1>What our Clients say <span>?</span></h1>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row  mt-5 mx-4">
                                    <div className="col-5 m-4">
                                        <img src={img} alt="image" className='w-100 h-70' />
                                    </div>
                                    <div className="col-6 mt-5 m-3">
                                        <p style={{ fontSize: "18px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas nulla voluptates. Facilis odit quaerat sint vel error vero impedit quod aliquam libero corporis, minus hic natus delectus sit facere.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas nulla voluptates. Facilis odit quaerat sint vel error vero impedit quod aliquam libero corporis, minus hic natus delectus sit facere
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas nulla voluptates. Facilis odit quaerat sint vel error vero impedit quod aliquam libero corporis, minus hic natus delectus sit facere</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row  mt-5 mx-4">
                                    <div className="col-5 m-4">
                                        <img src={img} alt="image" className='w-100 h-70' />
                                    </div>
                                    <div className="col-6 mt-5 m-3">
                                        <p style={{ fontSize: "19px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas nulla voluptates. Facilis odit quaerat sint vel error vero impedit quod aliquam libero corporis, minus hic natus delectus sit facere.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas nulla voluptates. Facilis odit quaerat sint vel error vero impedit quod aliquam libero corporis, minus hic natus delectus sit facere
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas nulla voluptates. Facilis odit quaerat sint vel error vero impedit quod aliquam libero corporis, minus hic natus delectus sit facere</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row  mt-5 mx-4">
                                    <div className="col-5 m-4">
                                        <img src={img} alt="image" className='w-100 h-70' />
                                    </div>
                                    <div className="col-6 mt-5 m-3">
                                        <p style={{ fontSize: "20px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas nulla voluptates. Facilis odit quaerat sint vel error vero impedit quod aliquam libero corporis, minus hic natus delectus sit facere.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas nulla voluptates. Facilis odit quaerat sint vel error vero impedit quod aliquam libero corporis, minus hic natus delectus sit facere
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas nulla voluptates. Facilis odit quaerat sint vel error vero impedit quod aliquam libero corporis, minus hic natus delectus sit facere</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Client