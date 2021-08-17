import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [show, setshow] = useState(false)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-black">
            <div className="container ">
                <NavLink className="navbar-brand fs-2 text-white " to="/">Navbar</NavLink>
                <button className="navbar-toggler bg-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation" onClick={() => setshow(!show)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto m-2 ">
                        <li className="nav-item ">
                            <NavLink className="nav-link fs-5 m-1 text-white" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fs-5 m-1 text-white" to="/Service">Service</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fs-5 m-1 text-white" to="/About">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fs-5 m-1 text-white" to="/contact">Contact</NavLink>
                        </li>

                        <NavLink to="/SignUp" className="btn btn-light m-2 " type="button" aria-pressed="true">Sign-Up</NavLink>
                        {/* <NavLink to="/SignUp" className="btn btn-light m-2 " type="button" aria-pressed="true">Sign-Up</NavLink> */}

                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
