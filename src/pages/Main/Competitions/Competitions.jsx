import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import img1 from '../../../assets/profile/1.jpg'
import img2 from '../../../assets/profile/4.jpg'
import img3 from '../../../assets/profile/5.jpg'
import img4 from '../../../assets/profile/6.jpg'
import img5 from '../../../assets/profile/7.jpg'
import img6 from '../../../assets/profile/8.jpg'
import img7 from '../../../assets/profile/9.jpg'
import mem1 from "../../../assets/Main/team/1.png"
import mem2 from "../../../assets/Main/team/2.png"
import mem3 from "../../../assets/Main/team/3.png"
import mem5 from "../../../assets/Main/team/5.png"
import mem4 from "../../../assets/Main/team/4.png"
import CompetitoonsProfil from './CompetitoonsProfil';
import { Link } from 'react-router-dom';

export default function Competitions() {
    let competitions = [
        { img: img1, name: "مسابقة Javascript", points: "120" },
        { img: img2, name: "مسابقة UI design", points: "60" },
        { img: img3, name: "مسابقة الذكاء الاصطناعي", points: "60" },
        { img: img4, name: "مسابقة figma tool", points: "90" },
        { img: img5, name: "مسابقة Javascript", points: "110" },
        { img: img6, name: "مسابقة UI design", points: "130" },
        { img: img7, name: "مسابقة figma tool", points: "60" },
    ]
    return (
        <div className='competitions'>
            <div className="right-side">
                <div className="competitions-title">
                    <h2>المسابقات</h2>
                </div>
                <div className="comps-cont">
                    {competitions.map((competition) =>
                        <Link className="comp-cont" to='exam'>
                            <div className="img-cont"><LazyLoadImage src={competition.img}></LazyLoadImage></div>
                            <div className="comp-title">
                                <h3>{competition.name}</h3>
                                <span><i className="fa-brands fa-bitcoin"></i>{competition.points}</span>
                            </div>
                            <div className="mem2">
                                <div className="img-cont2">+8</div>
                                <div className="img-cont2"><LazyLoadImage src={mem1}></LazyLoadImage></div>
                                <div className="img-cont2"><LazyLoadImage src={mem2}></LazyLoadImage></div>
                                <div className="img-cont2"><LazyLoadImage src={mem3}></LazyLoadImage></div>
                                <div className="img-cont2"><LazyLoadImage src={mem4}></LazyLoadImage></div>
                                <div className="img-cont2"><LazyLoadImage src={mem5}></LazyLoadImage></div>
                                <div className="img-cont2"><LazyLoadImage src={mem2}></LazyLoadImage></div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
            <CompetitoonsProfil/>
        </div>
    )
}
