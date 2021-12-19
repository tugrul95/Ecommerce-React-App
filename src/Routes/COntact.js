import React, { useState } from 'react'

const COntact = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        msg: '',
    })
    const getUserData = (e) => {
        let name = e.target.name
        let value = e.target.value
        setUserData({ ...userData, [name]: value })
    }
    const postData = async (e) => {
        e.preventDefault()
        const { name, email, msg } = userData // object destructuring
        if (name && email && msg) {
            const res = await fetch('https://mystoredb-790e2-default-rtdb.firebaseio.com/contactform.json',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    msg,
                }),
            }
        )
        if (res) {
            alert(`Thanks ${name} for write message for us`)
        }
        setUserData({
            name: '',
            email: '',
            msg: ''
        })
        } else {
            alert('Please fill every field')
        }
        
    }
    return (
        <div id="contact-container">
            <form method='POST'>
                <div class="contact-box">
                    <input value={userData.name} autoComplete="off" onChange={getUserData} type="text" id="name" name="name" placeholder="Enter Full Name" />
                    <input value={userData.email} type="email" autoComplete='off' onChange={getUserData} id="email" name="email" placeholder="Enter Your Email" />
                    <textarea value={userData.msg} name="msg" autoComplete='off' onChange={getUserData} id="textarea" cols="30" rows="15"
                        placeholder="Write a Message For Us"></textarea>
                    <input type="submit" onClick={postData} value="Submit" id="submit" />
                </div>
            </form>
        </div>
    )
}

export default COntact
