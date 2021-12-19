import React from 'react'
import { useCart } from "react-use-cart"

const SCart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) {
        return <h1 className="feature-container">Your Cart is Empty</h1>
    }
    else {
        return (
            <>
                <div className="feature-container">
                    <div className="product-details">
                        <table>
                            <thead>
                                <tr className='product-table-header'>
                                    <th><span>Product</span></th>
                                    <th><span>Price </span></th>
                                    <th><span>Quantity </span></th>
                                    <th><span>Remove</span></th>
                                </tr>
                            </thead>
                            {
                                items.map((item, index) => {
                                    return (
                                        <>
                                            <tbody>
                                                <tr className="product-stuff" key={index}>
                                                    <td><img src={item.img} alt="photo" /><p>{item.text}</p></td>
                                                    <td><p>${item.price}</p></td>
                                                    <td>
                                                        <span className="product-no">
                                                            <span className='varies' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</span>
                                                            <span className='quantity'><input type="text" placeholder={item.quantity} /></span>
                                                            <span className='varies' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</span>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <a className="comman-btn" onClick={() => removeItem(item.id)} style={{ top: '0vw' }}>Remove</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </>
                                    )
                                })
                            }
                            <tr className="product-btns">
                                <td><h3>Total: ${cartTotal}</h3></td>
                                <td><a>Apply Coupon</a></td>
                                <td><a onClick={() => emptyCart()}>Clear Cart</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default SCart
