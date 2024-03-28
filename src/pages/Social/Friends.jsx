import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import img from '../../assets/Main/team/1.png'
import img2 from '../../assets/Main/team/2.png'
import img3 from '../../assets/Main/team/3.png'
import img4 from '../../assets/Main/team/4.png'
import img5 from '../../assets/Main/team/5.png'
import img6 from '../../assets/Main/team/6.png'
import img7 from '../../assets/Main/team/7.png'
import { Link } from 'react-router-dom';

export default function Friends() {
    let friends = [
        { img: img, username: "أحمد محمد", address: "فلسطين - غزة" },
        { img: img3, username: "أحمد محمد", address: "فلسطين - غزة" },
        { img: img2, username: "أحمد محمد", address: "فلسطين - غزة" },
        { img: img4, username: "أحمد محمد", address: "فلسطين - غزة" },
        { img: img5, username: "أحمد محمد", address: "فلسطين - غزة" },
        { img: img6, username: "أحمد محمد", address: "فلسطين - غزة" },
        { img: img7, username: "أحمد محمد", address: "فلسطين - غزة" },
        { img: img, username: "أحمد محمد", address: "فلسطين - غزة" },
        { img: img2, username: "أحمد محمد", address: "فلسطين - غزة" },
        { img: img3, username: "أحمد محمد", address: "فلسطين - غزة" },
        { img: img4, username: "أحمد محمد", address: "فلسطين - غزة" },
        { img: img5, username: "أحمد محمد", address: "فلسطين - غزة" },
    ]
    return (
        <div className='friends'>
            <h2>الأصدقاء</h2>
            <div className="friends-cont">
                {friends.map((friend) =>
                    <div className="friend-cont">
                        <div className="user">
                            <div className="img-cont">
                                <LazyLoadImage src={friend.img}></LazyLoadImage>
                            </div>
                            <div className="user-text">
                                <h3>{friend.username}</h3>
                                <h4>{friend.address}</h4>
                            </div>
                        </div>
                        <Link className="send-msg" to="../messages">
                            ارسال رسالة
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
