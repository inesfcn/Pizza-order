import React from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <li className="logo" >
                <Link to="/">
                    <img src={logo} alt="pizza logo"/>
                </Link>
            </li>
            <li><Link to="/order">Order</Link></li>
            <li>Contact us</li>
            <div className="login-signup">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign up</Link></li>
            </div>
        </nav>
    )
}

export default Nav;