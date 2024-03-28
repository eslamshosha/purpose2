import React from 'react'
import img1 from '../../../assets/Main/blog/1.jpg'
import img2 from '../../../assets/Main/blog/2.jpg'
import img3 from '../../../assets/Main/blog/3.png'
import img4 from '../../../assets/Main/blog/4.jpg'
import img5 from '../../../assets/Main/blog/5.jpg'
import mem2 from '../../../assets/Main/team/2.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

export default function BlogArr() {
    let blogs = [
        { id: "1", img: img1, userImg: mem2, title: "أعظم سادة الشطرنج", p: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى ", username: "أحمد عبد الله ", date: "20 يوليو " },
        { id: "2", img: img2, userImg: mem2, title: "الشخصيات الاجتماعية", p: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى ", username: "أحمد عبد الله ", date: "20 يوليو " },
        { id: "3", img: img3, userImg: mem2, title: "إنشاء محتوى", p: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى ", username: "أحمد عبد الله ", date: "20 يوليو " },
        { id: "4", img: img4, userImg: mem2, title: "لماذا الفضول مهم جدا", p: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى ", username: "أحمد عبد الله ", date: "20 يوليو " },
        { id: "5", img: img5, userImg: mem2, title: "الخوارزميات", p: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى ", username: "أحمد عبد الله ", date: "20 يوليو " },
    ]
    return (
        <div className='blog-arr'>
            <div className="blogs">
                {blogs.map((blog) =>
                    <Link to={"id="+blog.id}>
                        <div className="blog-card">
                            <div className="img-cont"> <LazyLoadImage src={blog.img} alt='chess'></LazyLoadImage></div>

                            <div className="blog-title">
                                <h4>{blog.title}</h4>
                                <i className="fa-solid fa-arrow-up"></i>
                            </div>
                            <p>{blog.p}</p>
                            <div className="user">
                                <div className="img-cont1"><LazyLoadImage src={blog.userImg}></LazyLoadImage></div>
                                <div className="uername">
                                    <h5>{blog.username}</h5>
                                    <span>{blog.date}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}
