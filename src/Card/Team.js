import React from 'react'
import './Blog.css'
import img from '../Images/img.png'
function Team() {
    return (
        <div>
            <div className="container">
                <h5>Team Members</h5>
                <h1>Our Best Team Members</h1>
                <div className="row">
                    <div className="col-4">
                        <div className="card align-items-center" >
                            <img src={img} className='Image rounded-circle h-50 w-50 mt-4' alt="" />
                            <div className="card-body">
                                <h5 className="card-title">TEAM NAME</h5>
                                <p className="card-text text-center">Position</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card align-items-center">
                            <img src={img} className='Image rounded-circle h-50 w-50 mt-4' alt="" />
                            <div className="card-body">
                                <h5 className="card-title">TEAM NAME</h5>
                                <p className="card-text text-center">Position</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card align-items-center">
                            <img src={img} className='Image rounded-circle h-50 w-50 mt-4' alt="" />
                            <div className="card-body">
                                <h5 className="card-title">TEAM NAME</h5>
                                <p className="card-text text-center ">Position</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team