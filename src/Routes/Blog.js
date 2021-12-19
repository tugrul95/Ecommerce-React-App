import React from 'react'

const Blog = (props) => {
    return (
        <>
            <div className="blog-container">
                <div className="blogs-main">
                </div>
                <div className="blog-items">
                    <div className="blogs">
                        {props.blogData.map((val) => {
                            return (
                                <div>
                                    <div className="blog-img">
                                        <img src={val.img} alt="" />
                                    </div>
                                    <div className="blog-text">
                                        <h3>{val.h3}</h3>
                                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                                        <p>By Admin |StreetStyle, Fashion, Couple |8 Comments <a href="#">continue reading</a></p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className="blog-side-bar">
                        <div className="blog-search">
                            <input type="text" placeholder="search" />
                        </div>
                        <div className="blog-cat">
                            <h3>Categories</h3>
                            <div className='blog-cat-item'>
                                <div><p>Fashion</p></div>
                                <div><p>Beauty</p></div>
                                <div><p>Free Style</p></div>
                                <div><p>Life Style</p></div>
                                <div><p>DIY and Craft</p></div>
                            </div>
                        </div>
                        <div className="archive">
                            <h3>Archive</h3>
                            <div className='archive-item'>
                                <div><p>July 2020</p> <p>(9)</p></div>
                                <div><p>August 2020</p> <p>(20)</p></div>
                                <div><p>September 2020</p> <p>(15)</p></div>
                                <div><p>October 2020</p> <p>(40)</p></div>
                                <div><p>November 2020</p> <p>(25)</p></div>
                                <div><p>December 2020</p> <p>(17)</p></div>
                            </div>
                        </div>
                        <div className="tags">
                            <h3>Tags</h3>
                            <div><a>fashion</a>
                            <a>style</a>
                            <a>new style</a>
                            <a>latest style</a></div>
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default Blog
