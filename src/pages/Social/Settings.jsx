import React from 'react'
import img1 from "../../assets/profile/2.png"
import { LazyLoadImage } from 'react-lazy-load-image-component'
export default function Settings() {
    return (
        <div className='settings'>
            <h2>الاعدادات</h2>
            <div className="settings-cont">
                <div className="img-cont-main">
                    <div className="img-cont">
                        <LazyLoadImage src={img1}></LazyLoadImage>
                    </div>
                </div>
                <div className="settings-title">
                    <h3>المعلومات العامة</h3>
                    <div className="btns">
                        <div className="save-btn ">حفظ</div>
                        <div className="cancel-btn ">الغاء</div>
                    </div>
                </div>
                <div className="inputs">
                    <div className="child-dad-cont">
                        <div className="form-group childName">
                            <input type="text" className='form-input' />
                            <span>اسم الطفل</span>
                        </div>
                        <div className="form-group dadName">
                            <input type="text" className='form-input' />
                            <span>اسم ولى الأمر</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className='form-input' placeholder='ahmdmahmoud@gmail.com' />
                    </div>
                    <div className="form-group">
                        <input type="text" className='form-input' placeholder='+972599123456' />
                    </div>
                    <div className="form-group">
                        <input type="text" className='form-input' placeholder='6 - 10 سنوات' />
                    </div>
                    <div className="form-group">
                        <input type="text" className='form-input' placeholder='فلسطين' />
                    </div>
                </div>
                <div className="out-cont">
                    <p className='out'><span>تسجيل الخروج</span><i className="fa-solid fa-right-from-bracket"></i></p>
                </div>
            </div>
        </div>
    )
}
