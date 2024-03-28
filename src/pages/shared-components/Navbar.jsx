import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
export default function Navbar() {

    const [barMenu, setbarMenu] = useState(false);
    const barToggle = () => {
        setbarMenu(!barMenu);
    };

    return (
        <header>
            {/* {barMenu ? <BodyStyle /> : ""} */}
            <div className="nav-bar">
                <div className="nav-container">
                    <div className="nav-links">
                        <Link to="/"><LazyLoadImage alt='logo' src={Logo} className='nav-logo' to="/"/></Link>
                        <div className={`navgition ${barMenu ? "openMenu" : ""}`}>
                            <div className="nav-head">
                            </div>
                            <ul className='list-unstyled'>
                                <li><Link to={"/main/recommended"}>الدورات</Link></li>
                                <li><Link to={"/main/recommended"}>كيفية الدراسه</Link></li>
                                <li><Link to={"/main/blog/id=1"}>المدرسين</Link></li>
                                <li><Link to={"/main/blog/id=1"}>نبذة</Link></li>
                            </ul>
                            <div className="regester-links-btns">
                                <Link to={"/signin"} className='btn-grn'>تسجيل الدخول</Link>
                                <Link to={"/signup"} className='btn-solid-blu'>انشاء حساب</Link>
                            </div>
                        </div>
                    </div>
                    <div className="regester-links-btns">
                        <Link to={"/signin"} className='btn-grn'>تسجيل الدخول</Link>
                        <Link to={"/signup"} className='btn-solid-blu'>انشاء حساب</Link>
                    </div>
                    <div className="show-icons">
                        <button
                            onClick={barToggle}
                            className={`menu-bars ${barMenu ? "open-bars" : ""}`}
                            id="menu-id" >
                            <div className="hamburger-lines">
                                <span className="line line1"></span>
                                <span className="line line2"></span>
                                <span className="line line3"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div >
        </header >
    )
}



