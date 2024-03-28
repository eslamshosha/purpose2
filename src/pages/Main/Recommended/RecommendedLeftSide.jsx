import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dig4 from "../../../assets/explore/04.png"

export default function RecommendedLeftSide() {
    return (
        <div>
            <div className="clender">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                </LocalizationProvider>
            </div>
            <div className="nextLes">
                <div className="next-title">
                    <h4>المحاضرات القادمة</h4>
                    <span>الاحد 25-06-2022</span>
                </div>
                <div className="nextLes-body brdr-l-red">
                    <div className='img-container'><LazyLoadImage src={dig4} alt='nextCourse'></LazyLoadImage></div>
                    <div className="time">
                        <h3>الدرس الثاني: الأساسيات</h3>
                        <span>8:00 ص - 9:00 م</span>
                    </div>
                </div>
                <div className="nextLes-body brdr-l-welo">
                    <div className='img-container'><LazyLoadImage src={dig4} alt='nextCourse'></LazyLoadImage></div>
                    <div className="time">
                        <h3>الدرس الثاني: الأساسيات</h3>
                        <span>8:00 ص - 9:00 م</span>
                    </div>
                </div>
            </div>
            <div className="nextLes">
                <div className="next-title">
                    <h4><Link to="/main/board">لوحتي التعليمية</Link></h4>
                </div>
                <div className="nextLes-body brdr-l-red">
                    <div className='img-container'><LazyLoadImage src={dig4} alt='nextCourse'></LazyLoadImage></div>
                    <div className="time prgrs">
                        <h3>تطوير التطبيقات</h3>
                        <div className='contains-progress'>
                            <div className="progress ">
                                <div className="progress-bar " style={{ width: " 50%" }} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span>50%</span>
                        </div>
                    </div>
                </div>
                <div className="nextLes-body brdr-l-welo">
                    <div className='img-container'><LazyLoadImage src={dig4} alt='nextCourse'></LazyLoadImage></div>
                    <div className="time prgrs">
                        <h3>تطوير التطبيقات</h3>
                        <div className='contains-progress'>
                            <div className="progress ">
                                <div className="progress-bar " role="progressbar" style={{ width: " 50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span>50%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
