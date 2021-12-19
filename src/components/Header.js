import React from 'react'
import { Link } from 'react-router-dom'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
const Header = () => {
    return (
        <>
            <div className="custom-header">
                <div className="header-item">
                    <div className="custom-brand">
                        <Link to="/home"><h2>MyStore</h2></Link>
                    </div>
                    <ul className="custom-nav">
                        <Link to="/home"><li>Home</li></Link>
                        <Link to="/shop"><li>Shop</li></Link>
                        <Link to="/blog"><li>Blog</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                        <Link className='cart-icons' to="/cart"><li><LocalMallOutlinedIcon/></li></Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
