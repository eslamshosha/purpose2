import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import mem1 from "../../../assets/Main/team/1.png"
import mem2 from "../../../assets/Main/team/2.png"
import mem3 from "../../../assets/Main/team/3.png"
import mem5 from "../../../assets/Main/team/5.png"
import mem4 from "../../../assets/Main/team/4.png"

export default function Leaderboard() {
    let members = [
        {img:mem1,name:"دينا أسعد"},
        {img:mem2,name:"حمادا خالد"},
        {img:mem3,name:"محمد سعيد"},
        {img:mem4,name:"شهد محمود"},
        {img:mem5,name:"دينا أسعد"},
    ]
    return (
        <div className='leaderboard'>
            <h2>لوحة الصدارة</h2>
            <div className="searchB">
                <input type="text" />
                <Link to=""><i className="fa-solid fa-magnifying-glass"></i> <span> بحث </span> </Link>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr className="">
                            <th>الاسم</th>
                            <th>عدد الساعات المنجزة</th>
                            <th>إجمالي النقاط</th>
                            <th>الكورسات المنجزة</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member)=>
                            <tr>
                            <td className="align-middle">
                                <div className="cont">
                                    <div className="img-cont"><LazyLoadImage src={member.img}></LazyLoadImage></div>
                                    <div className="text">
                                        <h3>{member.name}</h3>
                                        <span>Graphic Designer</span>
                                    </div>
                                </div>
                            </td>
                            <td> 106 ساعة 15 دقيقة  </td>
                            <td> <i className="fa-brands fa-bitcoin"></i> 520 </td>
                            <td className='diff-color'> ...bash, SQl, yaml, java, bash, c#, markdown</td>
                        </tr>
                        )}
                        

                    </tbody>
                </table>
            </div>
        </div>
    )
}
