import '../css/App.css';
const HeaderComponent = () => {
    return (
        <div className='header'> 
        <div className='logo-container'>
        <img className='logo'
            src='https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/door-company-logo.jpg'
            />
        </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>                    
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;