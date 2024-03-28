import React from 'react'
import { Link } from 'react-router-dom';

export default function MainCaptions() {
    return (
        <>
            <div className="col col-lg-6 col-12">
                <div className='main-caption'>
                <h1>دورات البرمجة والابداع للأطفال</h1>
                <span className='ta3alam'>تعلم </span>  <span className='ta5ayal'>تخيل </span> <span className='barmg'>برمج</span>
                <p>دع طفلك يبعث الحياة في أفكاره! نقوم بتدريس وتطوير التطبيقات والروبوتات وتحرير الفيديو والكثير، كل ذلك لتحسين مهارات الأطفال في حل المشكلات والعمل الجماعي.</p>
                </div>
                <div className="home-text-btns">
                    <Link to={"main/recommended"}><button className='btn-solid-prpl'>استكشاف الدورات التدريبية</button></Link>
                    <Link to={"main/subjects"} className='ply'><span><i className="fa-regular fa-circle-play"></i>  آلية العمل</span></Link>
                </div>
            </div>
        </>
    )
}
