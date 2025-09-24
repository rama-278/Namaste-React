import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                    <img className="logo" src="logo.png" alt="App Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/Contact">Contact Us</Link> </li>
                    <li> <i className="fa-solid fa-cart-shopping"></i></li>
                    <button className="login"
                        onClick={() => {
                            btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
                        }
                        }
                    >
                        {btnNameReact}
                        
                    </button>
                </ul>
            </div>

        </div>
    )
};
export default Header;