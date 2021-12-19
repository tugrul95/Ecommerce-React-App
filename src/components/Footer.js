import React from 'react'

const Footer = () => {

    let footerItem1 = [
        {
            heading: 'Catagory',
            p1: 'Women',
            p2: 'Men',
            p3: 'Shoes',
            p4: 'Watches',
        },
        {
            heading: 'Help',
            p1: 'Track Order',
            p2: 'Returns',
            p3: 'Shipping',
            p4: 'FAQs',
        }
    ]
    return (
        <>

            <footer id="footer-container">
                <div className="footer-items">
                    {footerItem1.map((val) => {
                        return (
                            <div className="footer-item">
                                <h2>{val.heading}</h2>
                                <p><a href="#">{val.p1}</a></p>
                                <p><a href="#">{val.p2}</a></p>
                                <p><a href="#">{val.p3}</a></p>
                                <p><a href="#">{val.p4}</a></p>
                            </div>
                        )
                    })}
                    <div className="footer-item">
                        <h2>Get In Touch</h2>
                        <p className='get-in-touch' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Consequuntur id recusandae totam tempora, or call us on (+92) 300 2626 594
                        </p>
                    </div>
                    <div className="footer-item">
                        <h2>Newsletter</h2>
                        <input type="email" className="email" placeholder='email@example.com' />
                        <a href="#">Subscribe</a>
                    </div>

                </div>
                {/* <p className='footer-text'>Copyright ©2021 All rights reserved | This template is made with by {' '}
                    <a href="#">MyStore</a>
                </p> */}
            </footer>

        </>
    )
}

export default Footer
