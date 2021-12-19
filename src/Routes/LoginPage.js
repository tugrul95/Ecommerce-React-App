import React from 'react'

const Login = () => {
    return (
        <div className="login-page-main-container">
            <div className="login-page-container">
                <div className="login-heading">
                    <h1>Log in to MyStore</h1>
                </div>
                <div className="login-inputs-fields">
                    <input type="text" name="email" id="email" placeholder='Username or Email' />
                    <input type="password" name="pass" id="pass" placeholder='Password' />
                    <a className='comman-btn login-btn' href="/home">Continue With Email</a>
                </div>
                <div className='break-line'>
                    <hr /> <span>or</span> <hr />
                </div>
                <div className="login-with-google">
                    <a className='comman-btn login-btn ' href="">Continue With Google</a>
                </div>
                <a className='signup-link' href="/signup">for mystore acccount signup here</a>
            </div>
        </div>
    )
}

export default Login