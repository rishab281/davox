import { NavLink } from 'react-router-dom'
import './Header.css'
export default function Header() {
    return(
        <div className="custom-navbar container-fluid px-0">
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#fdf6e3'}}>
            <div className="container-fluid">
                <NavLink className='navbar-brand me-auto mb-lg-0 text-white fs-1'  to={''}>
                    <img src="/logo.png"  alt="logo" className="img-fluid me-0" style={{ maxHeight: '70px' }} />
                    <img src="/logoName.png"  alt="logoName" className="img-fluid ms-0" style={{ maxHeight: '70px' }} />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-2">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link fs-5 ${isActive ? 'active-link' : ''}`} to={'shop'} end>Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link fs-5 ${isActive ? 'active-link' : ''}` } to={'about'} end>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link fs-5 ${isActive ? 'active-link' : ''}`} to={'contact'} end>Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link fs-5 ${isActive ? 'active-link' : ''}`} to={'login'} end>SignIn</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link fs-5 ${isActive ? 'active-link' : ''}`} to={'profile'} end>Profile</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}