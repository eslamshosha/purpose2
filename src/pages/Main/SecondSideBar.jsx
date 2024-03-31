import React from 'react'
import profile from "../../assets/Main/profile.png";
import profile2 from "../../assets/Main/profile2.png";
import brain from "../../assets/Main/brain.png";
import calender from "../../assets/Main/calender.png";
import comment from "../../assets/Main/comment.png";
import course from "../../assets/Main/course.png";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function SecondSideBar() {
    //const [barMenu, setbarMenu] = useState(false);
    // const barToggle = () => {
    //     setbarMenu(!barMenu);
    // }
    function closeSecond() {
        document.getElementById("secondNavBar").style.display = "none";
        document.getElementById("profile-notif").style.display = "flex";
        document.getElementById("open-second").style.display = "none";
        document.getElementById('overlay').style.display = "none"
        // document.getElementById('all').classList.remove('all-lagre');
        // document.getElementById('pageContent').style.transform = 'translateX(0px)';
        // document.getElementById('secondNavBar').style.transform = 'translateX(-350px)';
    }
    return (
        <div className='secondNavBar' id='secondNavBar'>
            <div className="profile-notif">
                <div className="nav-profile">
                    <div className="img-cont">
                        <img src={profile} alt='profile' />
                    </div>
                    <div className="username">
                        <h3>Ahmed Sharaby</h3>
                        <h5>Premium</h5>
                    </div>
                    <div className="menu">
                        <div className="user-cont dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-angle-down"></i>
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
            <div className="progrs">

                <div className="prog-bar">
                    <div className="progress yellow">
                        <span className="progress-left">
                            <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                            <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">
                            <div className="brain-cont">
                                <img src={brain} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text">
                    <h2>40%</h2>
                    <p>Expansion path</p>
                </div>
            </div>
            <div className="comps">
                <div className="comp-cont2">
                    <div className="img-cont cont-blue">
                        <img src={calender} alt="calender" />
                    </div>
                    <p>Meeting</p>
                    <span>2</span>
                </div>
                <div className="comp-cont2">
                    <div className="img-cont cont-yello">
                        <img src={course} alt="course" />
                    </div>
                    <p>Courses</p>
                    <span>10</span>
                </div>
                <div className="comp-cont2">
                    <div className="img-cont cont-green">
                        <img src={comment} alt="Comments" />
                    </div>
                    <p>Comments</p>
                    <span>68</span>
                </div>
            </div>
            <div className="top-emp">
                <div className="container">
                    <h3>Top Employees</h3>
                    <p>Keep up to be TOP</p>
                    <div className="emp you">
                        <div className="profil">
                            <div className="img-cont">
                                <img src={profile} alt="profile" />
                            </div>
                            <div className="nam">
                                <h4>You</h4>
                                <span>Product Designer</span>
                            </div>
                        </div>
                        <div className="scor"> 40 XP</div>
                    </div>
                    <div className="emp">
                        <div className="profil">
                            <div className="img-cont">
                                <img src={profile2} alt="profile" />
                                <div className="star">
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div className="nam">
                                <h4>Muad Omari</h4>
                                <span>Co-Founder</span>
                            </div>
                        </div>
                        <div className="scor"> 500 XP</div>
                    </div>
                    <div className="emp">
                        <div className="profil">
                            <div className="img-cont">
                                <img src={profile2} alt="profile" />
                                <div className="star">
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div className="nam">
                                <h4>Muad Omari</h4>
                                <span>Co-Founder</span>
                            </div>
                        </div>
                        <div className="scor"> 500 XP</div>
                    </div>
                    <div className="emp">
                        <div className="profil">
                            <div className="img-cont">
                                <img src={profile2} alt="profile" />
                                <div className="star">
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div className="nam">
                                <h4>Muad Omari</h4>
                                <span>Co-Founder</span>
                            </div>
                        </div>
                        <div className="scor"> 500 XP</div>
                    </div>
                </div>
            </div>
            <div className="open-second " id='open-second' onClick={closeSecond}>
                <i className="fa-solid fa-chevron-left"></i>
            </div>
        </div>
    )
}
