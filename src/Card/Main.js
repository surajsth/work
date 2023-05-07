import React from 'react'

import './Blog.css'
function Main() {
    return (
        <div>
            <div className="container" >
                <div className="row">
                    <div className="col-3">
                        <h6>Property location</h6>
                        <select>
                            <option value="">Any</option>
                            <option value="">Any1</option>
                            <option value="">Any2</option>
                            <option value="">Any3</option>
                        </select>
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <h6>Property location</h6>
                            <div className="col-9">
                                <select>
                                    <option value="">Any</option>
                                    <option value="">Any1</option>
                                    <option value="">Any2</option>
                                    <option value="">Any3</option>
                                </select>
                            </div>
                            <div className="col-2 searh">
                                <img src="https://img.icons8.com/ios-filled/18//null/search--v1.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="mgmt">
                    1st property Management
                </p>
                <p className="mgmt">
                    Company in Nepal
                </p>
                <div >
                    <button>Rent Now</button>
                </div>
            </div>
        </div>
    )
}

export default Main