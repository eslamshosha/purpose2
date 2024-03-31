import React from 'react'
import profile from "../../assets/Main/profile.png";
import profile2 from "../../assets/Main/profile.png";

import { Link } from 'react-router-dom';

export default function MainNavBar() {

    function showSideBar() {
        if (document.getElementById('side-bar').classList == 'side-bar side-bar-small' && window.innerWidth >= 991) {
            document.getElementById('side-bar').classList.remove('side-bar-small');
            document.getElementById('side-bar').style.transform = 'translateX(0px)';
            document.getElementById("all").style.paddingInlineStart = "272px";
        }
        else if (window.innerWidth < 991 && !document.getElementById('side-bar').classList.contains("side-openes")) {
            document.getElementById('side-bar').classList.add('side-openes');
            document.getElementById('overlay').style.display = "block"
            document.getElementById('side-bar').style.insetInlineStart = '0';
            document.getElementById('pageContent').style.transform = 'translateX(-272px)';
            document.getElementById('side-bar').style.transform = 'translateX(-0)';
            document.getElementById("all").style.paddingInlineStart = "0px";

        }
        else if (window.innerWidth < 991 && document.getElementById('side-bar').classList.contains("side-openes")) {
            document.getElementById('all').classList.remove('all-lagre');
            document.getElementById('pageContent').style.transform = 'translateX(0)';
            document.getElementById('side-bar').style.insetInlineStart = '-272px';
            document.getElementById('side-bar').classList.remove('side-openes');
            document.getElementById('overlay').style.display = "none"
        }
        else {
            document.getElementById('side-bar').classList.add('side-bar-small');
            document.getElementById('all').classList.remove('all-lagre');
            document.getElementById("all").style.paddingInlineStart = "122px";
            
            
        }
    }
    function displaySecond() {
        document.getElementById("secondNavBar").style.insetInlineEnd = "0";
        document.getElementById("profile-notif").style.display = "none";
        document.getElementById("open-second").style.display = "block";
        document.getElementById('side-bar').classList.add('side-bar-small');
        document.getElementById('all').classList.remove('all-lagre');
        document.getElementById('overlay').style.display = "block"
        document.getElementById('pageContent').style.transform = 'translateX(350px)';
    }
    return (
        <div className='main-navbar'>
            <header>
                <div className="top-header">

                    <div className="nav-left">
                        <div className="show-icons" id='show-icons' onClick={showSideBar}>
                            <button className="menu-bars fixall" id="menu-id">
                                <i className="fa-solid fa-bars"></i>
                            </button>
                        </div>

                    </div>
                    <div className="nav-right">
                        <div className="main-input-cont">
                            <form action="">
                                <button><i className="fa-solid fa-magnifying-glass"></i></button>
                                <input placeholder="البحث عن كورس" type="search" />
                            </form>
                        </div>
                        <div className="profile-notif" id='profile-notif'>
                            <div className="nav-profile">
                                <div className="menu">
                                    <div className="user-cont dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className="img-cont" 
                                        // onClick={displaySecond}
                                        >
                                            <img src={profile} alt='profile' />
                                        </div>
                                    </div>
                                    <ul className="profile-menu dropdown-menu" aria-labelledby="dropdownMenuLink" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                        <li>
                                            <Link to={'/main/profile'} className="dropdown-item"> الملف الشخصى </Link>
                                        </li>
                                        <li>
                                            <Link to={'/main/friends'} className="dropdown-item"> الأصدقاء </Link>
                                        </li>
                                        <li>
                                            <Link to={'/main/settings'} className="dropdown-item">الإعدادات</Link>
                                        </li>
                                        <li>
                                            <Link href="#!" className="dropdown-item"> تسجيل الخروج </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="notifi">
                    <div className="user-profile dropdown">
                        <div className="user-cont dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className="i-cont">
                                <i className="fa-regular fa-bell"></i>
                                <div className="pop2">
                                    2
                                </div>
                            </div>
                        </div>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                            <h2>Recent Notification</h2>
                            <li>
                                <Link to="/main/friends" className="dropdown-item">
                                    <div className="top-emp">
                                        <div className="container">
                                            <div className="emp">
                                                <div className="profil">
                                                    <div className="img-cont">
                                                        <img src={profile2} alt="profile" />
                                                        <div className="star">
                                                            <i className="fa-solid fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <div className="nam">
                                                        <h4>Sarah Saunders</h4>
                                                        <p><span>Sarah Saunders </span> Collab Design</p>
                                                    </div>
                                                </div>
                                                <div className="timme">8h</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/main/friends" className="dropdown-item">
                                    <div className="top-emp">
                                        <div className="container">
                                            <div className="emp">
                                                <div className="profil">
                                                    <div className="img-cont">
                                                        <img src={profile2} alt="profile" />
                                                        <div className="star">
                                                            <i className="fa-solid fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <div className="nam">
                                                        <h4>Sarah Saunders</h4>
                                                        <p><span>Sarah Saunders </span> Collab Design</p>
                                                    </div>
                                                </div>
                                                <div className="timme">8h</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/main/friends" className="dropdown-item">
                                    <div className="top-emp">
                                        <div className="container">
                                            <div className="emp">
                                                <div className="profil">
                                                    <div className="img-cont">
                                                        <img src={profile2} alt="profile" />
                                                        <div className="star">
                                                            <i className="fa-solid fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <div className="nam">
                                                        <h4>Sarah Saunders</h4>
                                                        <p><span>Sarah Saunders </span> Collab Design</p>
                                                    </div>
                                                </div>
                                                <div className="timme">8h</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/main/friends" className="dropdown-item">
                                    <div className="top-emp">
                                        <div className="container">
                                            <div className="emp">
                                                <div className="profil">
                                                    <div className="img-cont">
                                                        <img src={profile2} alt="profile" />
                                                        <div className="star">
                                                            <i className="fa-solid fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <div className="nam">
                                                        <h4>Sarah Saunders</h4>
                                                        <p><span>Sarah Saunders </span> Collab Design</p>
                                                    </div>
                                                </div>
                                                <div className="timme">8h</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/main/friends" className="dropdown-item">
                                    <div className="top-emp">
                                        <div className="container">
                                            <div className="emp">
                                                <div className="profil">
                                                    <div className="img-cont">
                                                        <img src={profile2} alt="profile" />
                                                        <div className="star">
                                                            <i className="fa-solid fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <div className="nam">
                                                        <h4>Sarah Saunders</h4>
                                                        <p><span>Sarah Saunders </span> Collab Design</p>
                                                    </div>
                                                </div>
                                                <div className="timme">8h</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/main/friends" className="dropdown-item">
                                    <div className="llinks">
                                        See all incoming activity
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                        </div>
                    </div>

                </div>
            </header>
        </div>
    )
}
