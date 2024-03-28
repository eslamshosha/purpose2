import React from 'react'
import a from "../../assets/a.png"

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import CoursesArr from '../shared-components/CoursesArr';


export default function Explore() {

    return (
        <section className="explore">
            <div className="container-fluid">
                <div className="explore-cont">
                    <div className="h-cont">
                        <h2>استكشف آخر دوراتنا</h2>
                        <LazyLoadImage src={a} alt='sue'></LazyLoadImage>
                    </div>
                    <div className="explore-pargh">
                        <h3>اعثر على الدورة المناسبة لطفلك مع درسين تجريبيين</h3>
                        <p>نحن نؤمن بأهمية دور المعلم ودعم المجموعة وقوة التفاعل في الوقت الحقيقي لإلهام إبداع الأطفال.</p>
                    </div>
                    <CoursesArr></CoursesArr>
                </div>
            </div>
        </section>
    )
}
