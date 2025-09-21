import { useState } from "react";


const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                    <img className="logo" src="logo.png" alt="App Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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