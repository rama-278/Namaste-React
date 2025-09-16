const Header = () => {
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
                    <li>cart</li>
                </ul>
            </div>

        </div>
    )
};
export default Header;