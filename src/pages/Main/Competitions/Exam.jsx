import React from 'react'
import CompetitoonsProfil from './CompetitoonsProfil'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import img1 from '../../../assets/Main/3.jpg'
import ExamQandA from '../../shared-components/ExamQandA'

export default function Exam() {

    return (
        <div className='competitions profile exam'>
            <div className="right-side">
                <div className="img-cont"><LazyLoadImage src={img1}></LazyLoadImage></div>
                <div className="exam-title"><h3>مسابقة Javascript</h3></div>
                <ExamQandA></ExamQandA>
            </div>
            <CompetitoonsProfil></CompetitoonsProfil>
        </div>
    )
}
