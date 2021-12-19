import { useState, React } from 'react'
import { filterData } from '../components/data'
import productData from '../components/data'
import { useCart } from "react-use-cart"
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';

const Shop = (props) => {
    const { addItem } = useCart();
    const [searchTerm, setSearchTerm] = useState('')
    const [filterClass, setFilterClass] = useState('filter-page2')
    const [products, setProducts] = useState(productData.productDataForAll)
    // setProducts(products)
    const showFilterPage = (e) => {
        e.preventDefault()
        if (filterClass === 'filter-page2') {
            setFilterClass('filter-page')
        } else {
            setFilterClass('filter-page2')
        }
    }
    const filterByPrice1 = (event)=>{
        event.preventDefault()
        setProducts(products.filter((curVal)=>curVal.price>=20 && curVal.price<=30))
        setFilterClass('filter-page2')
    }
    const filterByPrice2 = (event)=>{
        event.preventDefault()
        setProducts(products.filter((curVal)=>curVal.price>=30 && curVal.price<=50))
        setFilterClass('filter-page2')             
    }
    const filterByPrice3 = (event)=>{
        event.preventDefault()
        setProducts(products.filter((curVal)=>curVal.price>=50 && curVal.price<=70))
        setFilterClass('filter-page2')
    }
    const filterByPrice4 = (event)=>{
        event.preventDefault()
        setProducts(products.filter((curVal)=>curVal.price>=70 && curVal.price<=90))
        setFilterClass('filter-page2')
    }
    return (
        <div className="product-card-main-container">
            <div className="shop-search-filter">
                <input className='search-bar' type="text" placeholder='search'
                    value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className="product-heading">
                <div>
                    <a onClick={showFilterPage} href="#"><FilterListRoundedIcon/> Filter</a>
                </div>
            </div>
            <div className={filterClass}>
                {filterData.map((val) => {
                    return (
                        <div className='filter-items'>
                            <h2>{val.h2}</h2>
                            <a href=""><p className='filter-text'> {val.p1}</p></a>
                            <a onClick={filterByPrice1} href=""><p className='filter-text'> {val.p2}</p></a>
                            <a onClick={filterByPrice2} href=""><p className='filter-text'> {val.p3}</p></a>
                            <a onClick={filterByPrice3} href=""><p className='filter-text'> {val.p4}</p></a>
                            <a onClick={filterByPrice4} href=""><p className='filter-text'> {val.p5}</p></a>
                        </div>
                    )
                })}
            </div>
            <div className="product-card-container">
                {
                    (searchTerm == '') ? products.map((val, index) => {
                        return (
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
                                }} className="product-btn">Add to cart</a>
                            </div>
                        )
                    }
                    ) :
                    products.filter((curVal) => { return curVal.text.toLowerCase().includes(searchTerm.toLowerCase()) }).map((val, index) => {
                            return (
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
                                    }} className="product-btn">Add to cart</a>
                                </div>
                            )
                        })
                }

            </div>
        </div>
    )
}

export default Shop
