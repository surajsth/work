import React from 'react'
import img1 from '../Images/img (1).png'
import './Blog.css'
function Feat() {
    return (
        <div className='container'>
            <button className='btn1' type="button">Featured</button>
            <button className="btn2 m-5" type="button" >Recent</button>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="row">
                            <div className="col-4">
                                <img src={img1} alt="" />

                            </div>
                            <div className="col-4">
                                <img src={img1} alt="" />
                            </div>
                            <div className="col-4">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Feat

