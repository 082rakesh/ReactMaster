import '../css/App.css';
import { Link } from 'react-router-dom';
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
                    <Link to={'/'} className='link'>Home</Link>
                    <Link to={'/about'} className='link'>About Us</Link>
                    <Link to={'./contact'} className='link'>Contact Us</Link>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;