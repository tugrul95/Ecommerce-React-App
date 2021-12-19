import React from 'react'
import { Link } from 'react-router-dom'

const SingupPage = () => {
    return (
        <div className="main-signup-container">
            <div className='singup-container'>
                <div className="singup-img-part">
                    <img src="imges/10.png" alt="photo" />
                </div>
                <div className="singup-details-part">
                    <div className="singup-details-part-items">
                        <div className="signupHeading">
                            <h1>Sign Up</h1>
                        </div>
                        <div className="signup-fulname signup-input-fields">
                            <label htmlFor="FulName">Full Name</label>
                            <input type="text" name="fulName" id="FulName" />
                        </div>
                        <div className="signup-email signup-input-fields">
                            <label htmlFor="Email">Email</label>
                            <input type="email" name="email" id="Email" />
                        </div>
                        <div className="signup-username signup-input-fields">
                            <label htmlFor="userName">Username</label>
                            <input type="text" name="userName" id="userName" />
                        </div>
                        <div className="signup-pass signup-input-fields">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <div className="signup-confirmPass signup-input-fields">
                            <label htmlFor="confirmPass">Confirm Password</label>
                            <input type="password" name="confirmPass" id="confirmPass" />
                        </div>
                        <div className="signup-btns">
                            <div className="signup-check-box-btn">
                                <input type="checkbox" name="check" id="check" />
                                <label htmlFor="check">I agree terms and condition</label>
                            </div>
                            <div className="sign-btn">
                            <Link className="comman-btn" to="/home">Sign Up</Link>
                            <Link className="comman-btn signIn" to="/">Sign In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingupPage
