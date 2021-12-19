import React from 'react'
import { useCart } from "react-use-cart"

const Catagory = (props) => {
    const { addItem } = useCart();
    if (!props.men && !props.accessory) {
        return (
            <div className='product-card-container' style={{ marginTop: '10vw' }}>
                {
                    props.women.map((val, index) => {
                        return (
                            <>
                                <div key={index} className="product-card">
                                    <div className="product-img">
                                        <img src={val.img} alt="" />
                                    </div>
                                    <div className="product-text">
                                        <p>{val.text}<br />${val.price}</p>
                                    </div>
                                    <a onClick={() => {
                                        alert(`${val.text} added in your cart`)
                                        addItem(val)
                                    }} className="product-btn"> Add to cart </a>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        )
    }
    else if (!props.women && !props.accessory) {
        return (
            <div className='product-card-container' style={{ marginTop: '10vw' }}>
                {
                    props.men.map((val, index) => {
                        return (
                            <>
                                <div key={index} className="product-card">
                                    <div className="product-img">
                                        <img src={val.img} alt="" />
                                    </div>
                                    <div className="product-text">
                                        <p>{val.text}<br />${val.price}</p>
                                    </div>
                                    <a onClick={() => {
                                        alert(`${val.text} added in your cart`)
                                        addItem(val)
                                    }} className="product-btn"> Add to cart </a>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        )
    }
    else if (!props.women && !props.men) {
        return (
            <div className='product-card-container' style={{ marginTop: '10vw' }}>
                {
                    props.accessory.map((val, index) => {
                        return (
                            <>
                                <div key={index} className="product-card">
                                    <div className="product-img">
                                        <img src={val.img} alt="" />
                                    </div>
                                    <div className="product-text">
                                        <p>{val.text}<br />${val.price}</p>
                                    </div>
                                    <a onClick={() => {
                                        alert(`${val.text} added in your cart`)
                                        addItem(val)
                                    }} className="product-btn"> Add to cart </a>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        )
    }
}

export default Catagory
