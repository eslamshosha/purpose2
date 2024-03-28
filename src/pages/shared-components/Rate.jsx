import React from 'react'
import member1 from "../../assets/Main/team/2.png"
import member2 from "../../assets/Main/team/4.png"
import member3 from "../../assets/Main/team/5.png"

export default function Rate() {
    let comments = [
        { img: member1, username: "محمد علي", rate: 2, comment: "في هذا الشابتر، سيتمكن الطفل من استخدام الأدوات الاساسية للبرنامج ويبدأ بالتعامل شيء فشيء. سيُنشؤون تطبيقات وألعاب للهواتف الذكية، ويبدؤون في البرمجة على الفور، ويخطون أولى خطواتهم في الإبداع الرقمي" },
        { img: member2, username: "ياسر أمين", rate: 4, comment: "في هذا الشابتر، سيتمكن الطفل من استخدام الأدوات الاساسية للبرنامج ويبدأ بالتعامل شيء فشيء. سيُنشؤون تطبيقات وألعاب للهواتف الذكية، ويبدؤون في البرمجة على الفور، ويخطون أولى خطواتهم في الإبداع الرقمي" },
        { img: member3, username: "سمية صافي", rate: 3, comment: "في هذا الشابتر، سيتمكن الطفل من استخدام الأدوات الاساسية للبرنامج ويبدأ بالتعامل شيء فشيء. سيُنشؤون تطبيقات وألعاب للهواتف الذكية، ويبدؤون في البرمجة على الفور، ويخطون أولى خطواتهم في الإبداع الرقمي" },
    ]
    const stars = [5,4,3,2,1];
    return (
        <div className='rate'>
            <div className="all-cont">
                <div className="bars-cont">
                    <div className="rate-bars">
                        <i className="fa-solid fa-star"></i>
                        <div className="progress-of">
                            <span>5</span>
                            <div className="gray">
                                <div className="blue" style={{ width: "75%" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="rate-bars">
                        <i className="fa-solid fa-star"></i>
                        <div className="progress-of">
                            <span>4</span>
                            <div className="gray">
                                <div className="blue" style={{ width: "50%" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="rate-bars">
                        <i className="fa-solid fa-star"></i>
                        <div className="progress-of">
                            <span>3</span>
                            <div className="gray">
                                <div className="blue" style={{ width: "10%" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="rate-bars">
                        <i className="fa-solid fa-star"></i>
                        <div className="progress-of">
                            <span>2</span>
                            <div className="gray">
                                <div className="blue" style={{ width: "0%" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="rate-bars">
                        <i className="fa-solid fa-star"></i>
                        <div className="progress-of">
                            <span>1</span>
                            <div className="gray">
                                <div className="blue" style={{ width: "0%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overall-rate">
                    <h6>4.4</h6>
                    <div className="stars">
                        <i className="fa-solid fa-star-half"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <span>36 التقييمات</span>
                </div>
            </div>
            <div className="users-rates">
                {comments.map((ele) => <div className="discuss" key={ele} key={ele}>
                    <div className="user-section">
                        <div className="image">
                            <img src={ele.img} alt="Team Member" />
                        </div>
                        <div className="username">
                            <h3>{ele.username}</h3>
                            <p>
                                {stars.map((element)=><i className={element<=ele.rate? "fa-solid fa-star": "fa-solid fa-star gray-star" }></i>)}
                            </p>
                        </div>
                    </div>
                    <div className="comment-section">
                        <p>{ele.comment}</p>
                    </div>
                </div>)}
            </div>
        </div>
    )
}


