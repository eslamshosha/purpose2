import React from 'react'
import logo from "../../assets/logo.png"
import kn from "../../assets/Kn.png"
import { Link, NavLink } from 'react-router-dom'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';



export default function SideBar(e) {
    // function closeSideBar() {
    //     if (document.getElementById('side-bar').classList ==='side-bar') {
    //         // document.getElementById('overlay').style.display = "block"
    //         document.getElementById('side-bar').classList.add('side-bar-small');
    //         document.getElementById('all').classList.remove('all-lagre');
    //         document.getElementById('xClose').classList.add('d-none');
    //     }
    //     else{
    //         document.getElementById('side-bar').classList.remove('side-bar-small');
    //         document.getElementById('all').classList.add('all-lagre');
    //     }
    // }


    return (
        <div className="side-bar side-bar-small" id='side-bar' >
            <div className="side-bar-head">
            <Link to="/">
                <h2>Purpose</h2>
                <img src={logo} alt="Purpose" />
            </Link>
                {/* <i className="fa-solid fa-x"id='xClose' onClick={closeSideBar}></i> */}
            </div>
            <div className="side-nav-links">
                <ul className='' id='nav-ul'>
                    <li className=' nav-li' id='active'><NavLink to={'recommended'} className='a-p'><i className="fa-solid fa-house"></i> <span>الرئيسية</span></NavLink></li>
                    <li className='nav-li accordion-li'>
                        <div>
                            <Accordion>
                                <AccordionSummary expandIcon={<i className="fa-solid fa-circle-chevron-down"></i>} aria-controls="panel1-content" id="panel1-header">
                                    <Typography><div className="a-p"><i className="fa-solid fa-share-nodes"></i> <span>شبكة التواصل</span></div></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <li className='in-li'><NavLink className='a-p' to={'socialHome'}><i className="fa-solid fa-house"></i> <span>الرئيسية</span></NavLink></li>
                                        <li className='in-li'><NavLink className='a-p' to={'profile'}><i className="fa-regular fa-user"></i> <span>الملف الشخصي</span></NavLink></li>
                                        <li className='in-li'><NavLink className='a-p' to={'friends'}><i className="fa-solid fa-people-group"></i> <span>الأصدقاء</span></NavLink></li>
                                        <li className='in-li'><NavLink className='a-p' to={'messages'}><i className="fa-regular fa-message"></i> <span>المسجات</span></NavLink></li>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </li>
                    <li className='nav-li'><NavLink className='a-p' to={'subjects'}><i className="fa-solid fa-chart-bar"></i> <span>المواد</span></NavLink></li>
                    <li className='nav-li'><NavLink className='a-p' to={'recorded'}><i className="fa-brands fa-chromecast"></i> <span>الحصص المسجله</span></NavLink></li>
                    <li className='nav-li'><NavLink className='a-p' to={'Live'}><i className="fa-solid fa-graduation-cap"></i> <span>الحصص المباشرة</span></NavLink></li>
                    <li className='nav-li'><NavLink className='a-p' to={'blog/id=1'}><i className="fa-solid fa-microphone-lines"></i> <span>المدونة</span></NavLink></li>
                    <li className='nav-li'><NavLink className='a-p' to={'assessment'}><i className="fa-solid fa-list-ol"></i><span>الامتحانات</span></NavLink></li>
                    <li className='nav-li'><NavLink className='a-p' to={'news'}><i className="fa-regular fa-newspaper"></i><span>الأخبار</span></NavLink></li>
                    <li className='nav-li'><NavLink className='a-p' to={'competitions'}><i className="fa-solid fa-trophy"></i> <span>المسابقات</span></NavLink></li>
                    <li className='nav-li'><NavLink className='a-p' to={'board'}><i className="fa-solid fa-chalkboard-user"></i> <span>لوحتى التعليمية</span></NavLink></li>
                </ul>
            </div>
            {/* <div className="side-nav-footer">
                <Link to={'leaderboard'}className="side-ancor">لوحة الصدارة</Link>
                <LazyLoadImage src={kn} alt='knowlage'></LazyLoadImage>
                <Link to="/main/subjects/" className="sagel">سجل معنا بالدورات</Link>
            </div> */}
        </div>
    )
}
