import React, { useState } from 'react'
import Finished from '../Main/Recommended/Finished'
import { TextField } from '@mui/material'
import CoursesArr from '../shared-components/CoursesArr'
import RecommendedLeftSide from '../Main/Recommended/RecommendedLeftSide'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import userPic from '../../assets/Main/team/2.png'
import userPic1 from '../../assets/Main/team/1.png'
import userPic2 from '../../assets/Main/team/4.png'
import userPic3 from '../../assets/Main/team/3.png'
import userPic6 from '../../assets/Main/team/6.png'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Modal from 'react-bootstrap/Modal';
import dig from "../../assets/explore/01.png"
import dig2 from "../../assets/explore/02.png"
import dig3 from "../../assets/explore/03.png"
import dig4 from "../../assets/explore/04.png"
import dig5 from "../../assets/explore/05.png"
import dig6 from "../../assets/explore/06.png"
import { Link } from 'react-router-dom';

export default function SocialHome() {
    let coursesArr = [
        { id: 1, img: dig, lessonType: "البرمجه", color: "#69BF4A", title: "Voice Over", lesonsCount: "32", p: "سيعمل الأطفال على تطوير الألعاب والتطبيقات للهواتف الذكية، حيث يبدؤون بالبرمجة في الحال ويتّخذون خطواتهم الأولى ليكونوا منشئي المحتوى الرقمي." },
        { id: 2, img: dig2, lessonType: "البرمجه", color: "#645DC7", title: "علم تصميم الروبوتات", lesonsCount: "32", p: "سيعمل الأطفال على تطوير الألعاب والتطبيقات للهواتف الذكية، حيث يبدؤون بالبرمجة في الحال ويتّخذون خطواتهم الأولى ليكونوا منشئي المحتوى الرقمي." },
        { id: 3, img: dig3, lessonType: "البرمجه", color: "#FFB71B", title: "Scratch", lesonsCount: "32", p: "سيعمل الأطفال على تطوير الألعاب والتطبيقات للهواتف الذكية، حيث يبدؤون بالبرمجة في الحال ويتّخذون خطواتهم الأولى ليكونوا منشئي المحتوى الرقمي." },
        { id: 4, img: dig4, lessonType: "البرمجه", color: "#25CAD2", title: "تطوير التطبيقات", lesonsCount: "32", p: "سيعمل الأطفال على تطوير الألعاب والتطبيقات للهواتف الذكية، حيث يبدؤون بالبرمجة في الحال ويتّخذون خطواتهم الأولى ليكونوا منشئي المحتوى الرقمي." },
        { id: 5, img: dig5, lessonType: "البرمجه", color: "#C3AE69", title: "Digital Drawing", lesonsCount: "32", p: "سيعمل الأطفال على تطوير الألعاب والتطبيقات للهواتف الذكية، حيث يبدؤون بالبرمجة في الحال ويتّخذون خطواتهم الأولى ليكونوا منشئي المحتوى الرقمي." },
        { id: 6, img: dig6, lessonType: "البرمجه", color: "#FF595A", title: "البرمجة والاكواد", lesonsCount: "32", p: "سيعمل الأطفال على تطوير الألعاب والتطبيقات للهواتف الذكية، حيث يبدؤون بالبرمجة في الحال ويتّخذون خطواتهم الأولى ليكونوا منشئي المحتوى الرقمي." },
    ]

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let posts = [
        { id: "3", userImg: userPic, p: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.", username: "أحمد عبد الله ", date: "20 يوليو " },
        { id: "2", userImg: userPic2, p: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.", username: "أحمد عبد الله ", date: "20 يوليو " },
        { id: "1", userImg: userPic, p: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.", username: "أحمد عبد الله ", date: "20 يوليو " },
    ]
    let comments = [
        { username: "سهى أحمد", userImg: userPic1, p: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى  " },
        { username: "علي أشرف", userImg: userPic, p: " هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى  " },
        { username: "خولة الأمير", userImg: userPic6, p: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى  " },
        { username: "أحمد على", userImg: userPic2, p: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى  " },
        { username: "أمينه مصطفى", userImg: userPic3, p: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى  " }
    ]

    return (
        <div className='recom-container'>
            <div className='recom-right-side social-right-side'>
                <Finished />
                <div className="posts">
                    <div className="write-post">
                        <div className="img-cont"><LazyLoadImage src={userPic2}></LazyLoadImage></div>
                        <input type="text" placeholder='شارك ما يدور في ذهنك' onClick={handleShow} />
                        <div className="modle-container">
                            <Modal className='main-modal' show={show} onHide={handleClose}>
                                <Modal.Body>
                                    <div className="post-pop-container">
                                        <div className="pop-title">
                                            <div></div>
                                            <h3>اضافة منشور</h3>
                                            <i className="fa-regular fa-circle-xmark" onClick={handleClose}></i>
                                        </div>
                                        <div className="post-pop-text">
                                            <div className="user">
                                                <div className="img-cont"><LazyLoadImage src={userPic2}></LazyLoadImage></div>
                                                <h4>أحمد على</h4>
                                            </div>
                                            <textarea placeholder='شارك ما يدور في ذهنك...'></textarea>
                                        </div>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                    {posts.map((post) =>
                        <div className="post">
                            <div className="post-user">
                                <div className="user-date">
                                    <div className="img-cont"><LazyLoadImage src={post.userImg}></LazyLoadImage></div>
                                    <div className="name-date">
                                        <h3>{post.username}</h3>
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <i className="fa-solid fa-ellipsis dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> </i>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="/#">Action</a></li>
                                        <li><a className="dropdown-item" href="/#">Another action</a></li>
                                        <li><a className="dropdown-item" href="/#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="post-text">
                                <p>{post.p}</p>
                            </div>
                            <Accordion>
                                <AccordionSummary expandIcon={<></>} aria-controls="panel1-content" id="panel1-header">
                                    <i className="fa-regular fa-comment"></i>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="comments">
                                        <div className="write-post">
                                            <div className="img-cont"><LazyLoadImage src={post.userImg}></LazyLoadImage></div>
                                            <input type="text" placeholder='اترك تعليقاً' />
                                            <i className="fa-regular fa-paper-plane"></i>
                                        </div>
                                        <div className="comments-Arr">
                                            {comments.map((comment) =>
                                                <div className="comment">
                                                    <div className="img-cont"><LazyLoadImage src={comment.userImg}></LazyLoadImage></div>
                                                    <div className="comment-user-text">
                                                        <h4>{comment.username}</h4>
                                                        <p>{comment.p}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    )}
                </div>
            </div>
            <div className="recom-left-side">
                <RecommendedLeftSide></RecommendedLeftSide>
                <div className="av-courses">
                    <div className="avilable-head">
                        <div className="text1">
                            <h4>الكورسات المقترحة</h4>
                            <span>جميع الدورات 15 دورة</span>
                        </div>
                        <Link to='/main/recommended'>مشاهدة الكل</Link>
                    </div>
                    {
                        coursesArr.map((course) =>
                            <div className="counrse-cont">
                                <div className="img-cont"><LazyLoadImage src={course.img}></LazyLoadImage></div>
                                <div className="title-count">
                                    <h5 style={{color:course.color}}>{course.title}</h5>
                                    <span>{course.lesonsCount} درس</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
