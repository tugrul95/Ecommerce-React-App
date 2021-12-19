import React from 'react'
// import './App.css';
import { Link } from 'react-router-dom'

const CateroryCard = () => {
    let card = [
        {
            catagory: "Women",
            text: "Winter 2021",
            img: "imges/women.png"
        },
        {
            catagory: "Men",
            text: "Winter 2021",
            img: "imges/men.png"
        },
        {
            catagory: "Fashion",
            text: "New Trand",
            img: "imges/access.png"
        }
    ]
    return (
        <>
            <div className="cat-card-container">
                        <>
                            <Link to="/women">
                                <div className="cat-card">
                                    <div className="cat-card-text">
                                        <h2>Women</h2>
                                        <p>Winter 2021</p>
                                    </div>

                                    <div className="cat-card-img">
                                        <img src='imges/women.png' alt="photo" />
                                    </div>
                                </div>
                            </Link>
                            <Link to="/men">
                                <div className="cat-card">
                                    <div className="cat-card-text">
                                        <h2>Men</h2>
                                        <p>Winter 2021</p>
                                    </div>

                                    <div className="cat-card-img">
                                        <img src="imges/men.png" alt="photo" />
                                    </div>
                                </div>
                            </Link>
                            <Link to="/access">
                                <div className="cat-card">
                                    <div className="cat-card-text">
                                        <h2>Fashion</h2>
                                        <p>New Trend</p>
                                    </div>

                                    <div className="cat-card-img">
                                        <img src="imges/access.png" alt="photo" />
                                    </div>
                                </div>
                            </Link>
                        </>
            </div>
        </>
    )
}

export default CateroryCard
