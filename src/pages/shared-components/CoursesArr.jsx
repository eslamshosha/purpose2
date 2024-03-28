import React from 'react'
import dig from "../../assets/explore/01.png"
import dig2 from "../../assets/explore/02.png"
import dig3 from "../../assets/explore/03.png"
import dig4 from "../../assets/explore/04.png"
import dig5 from "../../assets/explore/05.png"
import dig6 from "../../assets/explore/06.png"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom';

export default function CoursesArr() {
    
    let exploreCardArr = [
        {id : 1 , img: dig, lessonType: "البرمجه", color: "#69BF4A", title: "Voice Over", lesonsCount: "32", p: "سيعمل الأطفال على تطوير الألعاب والتطبيقات للهواتف الذكية، حيث يبدؤون بالبرمجة في الحال ويتّخذون خطواتهم الأولى ليكونوا منشئي المحتوى الرقمي." },
        {id : 2 , img: dig2, lessonType: "البرمجه", color: "#645DC7", title: "علم تصميم الروبوتات", lesonsCount: "32", p: "سيعمل الأطفال على تطوير الألعاب والتطبيقات للهواتف الذكية، حيث يبدؤون بالبرمجة في الحال ويتّخذون خطواتهم الأولى ليكونوا منشئي المحتوى الرقمي." },
        {id : 3 , img: dig3, lessonType: "البرمجه", color: "#FFB71B", title: "Scratch", lesonsCount: "32", p: "سيعمل الأطفال على تطوير الألعاب والتطبيقات للهواتف الذكية، حيث يبدؤون بالبرمجة في الحال ويتّخذون خطواتهم الأولى ليكونوا منشئي المحتوى الرقمي." },
        {id : 4 , img: dig4, lessonType: "البرمجه", color: "#25CAD2", title: "تطوير التطبيقات", lesonsCount: "32", p: "سيعمل الأطفال على تطوير الألعاب والتطبيقات للهواتف الذكية، حيث يبدؤون بالبرمجة في الحال ويتّخذون خطواتهم الأولى ليكونوا منشئي المحتوى الرقمي." },
        {id : 5 , img: dig5, lessonType: "البرمجه", color: "#C3AE69", title: "Digital Drawing", lesonsCount: "32", p: "سيعمل الأطفال على تطوير الألعاب والتطبيقات للهواتف الذكية، حيث يبدؤون بالبرمجة في الحال ويتّخذون خطواتهم الأولى ليكونوا منشئي المحتوى الرقمي." },
        {id : 6 , img: dig6, lessonType: "البرمجه", color: "#FF595A", title: "البرمجة والاكواد", lesonsCount: "32", p: "سيعمل الأطفال على تطوير الألعاب والتطبيقات للهواتف الذكية، حيث يبدؤون بالبرمجة في الحال ويتّخذون خطواتهم الأولى ليكونوا منشئي المحتوى الرقمي." },
    ]
    return (
        <div>
            <div className="grid-cont">
                {exploreCardArr.map((ele) => <div className="explore-card" key={ele}>
                    <div className="explr-img"><LazyLoadImage src={ele.img} alt='dig'></LazyLoadImage> <span>{ele.lessonType}</span></div>
                    <div className="card-title">
                        <h4 style={{ color: ele.color }}>{ele.title}</h4>
                        <div className="g-time">
                            <i className="fa-solid fa-graduation-cap"></i>
                            <span>{ele.lesonsCount} درس</span>
                        </div>
                    </div>
                    <p className='card-pargh'>{ele.p}</p>
                    <Link className='card-btn' to={`/main/subjects/`+ele.id} props={ele}>عرض الدورة التدريبية</Link>
                </div>)}
            </div>
        </div>
    )
}
