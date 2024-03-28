import React from 'react'
import CoursesArr from '../../shared-components/CoursesArr'
import dig from "../../../assets/explore/01.png"
import dig2 from "../../../assets/explore/02.png"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom';

export default function LearningBoard() {
    let exploreCardArr = [
        { id: 1, img: dig, lessonType: "البرمجه", color: "#69BF4A", title: "Voice Over", lesonsCount: "32", p: "سيعمل الأطفال على تطوير الألعاب والتطبيقات للهواتف الذكية، حيث يبدؤون بالبرمجة في الحال ويتّخذون خطواتهم الأولى ليكونوا منشئي المحتوى الرقمي." },
        { id: 2, img: dig2, lessonType: "البرمجه", color: "#645DC7", title: "علم تصميم الروبوتات", lesonsCount: "32", p: "سيعمل الأطفال على تطوير الألعاب والتطبيقات للهواتف الذكية، حيث يبدؤون بالبرمجة في الحال ويتّخذون خطواتهم الأولى ليكونوا منشئي المحتوى الرقمي." },
    ]
    return (
        <div className='board'>
            <h2>لوحتي التعليمية</h2>
            <div className="grid-cont">
                {exploreCardArr.map((ele) => <div className="explore-card" key={ele}>
                    <div className="explr-img"><LazyLoadImage src={ele.img} alt='dig'></LazyLoadImage> <span>{ele.lessonType}</span></div>
                    <div className="card-title">
                        <h4 style={{ color: ele.color }}>{ele.title}</h4>
                    </div>
                    <Link className='card-btn' to={`/main/subjects/` + ele.id} props={ele}>واصل التعلم</Link>
                </div>)}
            </div>
        </div>
    )
}