import React from 'react'

export default function Finished() {
    return (
        <div>
            <div className="courses-progress">
                <div className="finished">
                    <span className='title'>الكورسات المنتهيه</span>
                    <i className="fa-solid fa-location-arrow"></i>
                    <span className='count'>4</span>
                </div>
                <div className="finished">
                    <span className='title'>الكورسات المسجلة</span>
                    <i className="fa-solid fa-location-arrow"></i>
                    <span className='count'>2</span>
                </div>
                <div className="finished">
                    <span className='title'>الكورسات قيد الدراسه</span>
                    <i className="fa-solid fa-location-arrow"></i>
                    <span className='count'>1</span>
                </div>
            </div>
        </div>
    )
}
