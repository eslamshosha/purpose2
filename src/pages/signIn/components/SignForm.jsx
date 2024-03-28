import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Logo from "../../../assets/logo.png";
import google from "../../../assets/g.webp";
import { Link } from 'react-router-dom';

export default function SignForm() {
    return (<>
        
        <div className='sign-form-cont'>
            <LazyLoadImage alt='logo' src={Logo} className='sign-logo'/>
            <form >
                <div className="form-cont">
                    <div className="form-group">
                        <label>اسم المستخدم</label>
                        <input type="text" placeholder='الرجاء ادخال اسم المستخدم' className='form-input'
                        />

                    </div>
                    <div className="form-group">
                        <label>كلمة المرور
                        </label>
                        <input type="password"  placeholder='الرجاء ادخال كلمة المرور' className='form-input' />
                    </div>
                    <button type="submit" className='submit-btn'>تسجيل الدخول</button>
                    <div className="break-line">
                        <span>او</span>
                    </div>
                </div>
            </form>
            <div className="social-container">
                <button className="social-btn">
                    <i className="fa-brands fa-facebook"></i>
                    <span>تسجيل بواسطة فيسبوك</span>
                </button>
                <button className="social-btn">
                    <img src={google} alt='google'></img>
                    <span>تسجيل بواسطة جوجل</span>
                </button>
            </div>
                <div className="register-link">
                    <span>
                        ليس لديك حساب ؟
                    </span>
                    <Link to={"/signup"} className='creat-account-link'> إنشاء حساب</Link>
                </div>

        </div>
    </>
    )
}
