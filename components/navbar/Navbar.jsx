import React from 'react'
import "./navbar.scss"

function Navbar() {
    return (
        <div className='navbar'>
            <div className="left">
                <p>myfitness.com</p>
            </div>
            <div className="center">
                <ul className="links">
                    
                    <li>Shop</li>

                    <li>Tracker</li>
                    <li>Workouts</li>

                    <li>Community</li>

                    <li>Blogs</li>
                </ul>
            </div>
            <div className="right">
                <div className="btn">
                    <div className="login">Log In</div>
                    
                    <div className="signup">Sign Up</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar