import { useNavigate } from 'react-router-dom'
import '../App.css'

export default function FrontImage() {

    const navigate = useNavigate();
    function handleShopClick() {
        navigate('shop')
    }

    return (
        <div className="hero-banner position-relative">
            <img
                src="/heroBanner.jpg"
                alt="Davox Hero"
                className="hero-img"
            />
            <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                <h1 className="display-4 fw-bold">Welcome to Davox</h1>
                <p className="lead">Elevate your style with modern menswear</p>
                <button className="btn mt-3" style={{ background: '#fdf6e3' }} onClick={handleShopClick}>Shop Now</button>
            </div>
        </div>
    )
}