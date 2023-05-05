import React from 'react'
import img1 from '../Images/img (1).png'
import './Blog.css'
function Blog() {
    return (
        <div>
            <div className="container">
                <h5>Blog</h5>
                <h1>Watch Our Latest Blog.</h1>
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <img src={img1} className='Image h-100 w-100  align-items-center' alt="" />
                            <div className="card-body">
                                <img src="https://img.icons8.com/ios-filled/20/000000/guest-male--v1.png" /> <b>Author</b>
                                <img src="https://img.icons8.com/material-sharp/20/000000/clock.png" className='m-4' /> <b>1st Jan 2023</b>
                                <p className="card-text">Apartment for sale with high quality finishing NewYork</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src={img1} className='Image h-100 w-100  align-items-center' alt="" />
                            <div className="card-body">
                                <img src="https://img.icons8.com/ios-filled/20/000000/guest-male--v1.png" /> <b>Author</b>
                                <img src="https://img.icons8.com/material-sharp/20/000000/clock.png" className='m-4' /> <b>1st Jan 2023</b>
                                <p className="card-text">Apartment for sale with high quality finishing NewYork</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src={img1} className='Image h-100 w-100  align-items-center' alt="" />
                            <div className="card-body" style={{ color: "#1a9f00" }}>
                                <img src="https://img.icons8.com/ios-filled/20/000000/guest-male--v1.png" /> <b>Author</b>
                                <img src="https://img.icons8.com/material-sharp/20/000000/clock.png" className='m-4' /> <b>1st Jan 2023</b>
                                <p className="card-text" style={{ color: "black" }}>Apartment for sale with high quality finishing NewYork</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog