import React, { useState } from 'react'
import GirlImage from "../../assets/Girl.png"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import icon1 from "../../assets/icon1.png"
import man from "../../assets/man.jpg"
import grp from "../../assets/grp.png"
import fill from "../../assets/a.png"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ImageSide() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="col col-lg-6 col-12 h-100">
                <div className="img-side-container">
                    <LazyLoadImage className='main-img' src={GirlImage}></LazyLoadImage>
                    <LazyLoadImage src={icon1} className='icon1'></LazyLoadImage>
                    <div className="icon2 ">
                        <div className="envelopi">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="textt ">
                            <span className='icon2-title'>تهانينا!</span>
                            <span className='icon2-pargh'>لقد تم التسجيل بالكورس</span>
                        </div>
                        <span className='icon-success'> <i className="fa-solid fa-circle-check"></i></span>
                    </div>
                    <div className="icon3">
                        <div className="calenderi">
                            <i className="fa-solid fa-calendar-days"></i>
                        </div>
                        <div className="textt ">
                            <span className='icon2-title'>250K</span>
                            <span className='icon2-pargh'>عدد الطلاب</span>
                        </div>
                    </div>
                    <div className="icon4">
                        <div className="man">
                            <img src={man} alt='man'></img>
                            <div className="live1"></div>
                        </div>
                        <div className="textt ">
                            <span className='icon2-title'>تطوير البرمجيات</span>
                            <span className='icon2-pargh'>اليوم 12:00 صباحا</span>
                            <button onClick={handleShow}>انضم الينا</button>
                            <Modal className='main-modal' show={show} onHide={handleClose}>
                                <Modal.Body>
                                    <div className="pop-container">
                                        <button onClick={handleClose} className='close'>
                                            <i className="fa-regular fa-circle-xmark">
                                            </i>
                                        </button>
                                        <div className="pop-img">
                                            <img src={grp} alt='sign-type'/>
                                        </div>
                                        <div className="pop-sign">
                                            <h3>بين المدرسة و الجامعة اختار المناسب لك </h3>
                                            <div className="check-group">
                                                <label className="check-label">
                                                    <input type="radio" name="type" />
                                                    <span className="check-text">طالب مدرسي</span>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="check-group">
                                                <label className="check-label">
                                                    <input type="radio" name="type"/>
                                                    <span className="check-text">طالب جامعي</span>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="btnn">
                                                <button className='moadel-btn'>اختيار</button>
                                                <LazyLoadImage src={fill} className='fill'></LazyLoadImage>
                                            </div>
                                        </div>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
