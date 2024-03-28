import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Logo from "../../../assets/logo.png";
import google from "../../../assets/g.webp";
import schoolStudent from "../../../assets/SchoolStident.png"
import unStudent from "../../../assets/unStudent.png"
import { Link } from 'react-router-dom';
import { Radio } from '@mui/material';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';





export default function SignupForm() {
    let isSignup = true;
    const options = [];
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];
    for (let i = 3; i < 30; i++) {
        options.push({ value: i, label: i });
    }
    const countriesOptions = [];
    for (let i = 0; i < countries.length; i++) {
        countriesOptions.push({ value: countries[i], label: countries[i] });
    }
    const [selectedOption, setSelectedOption] = useState(null);
    const [countriesOptionsArr, setCountriesOptionsArr] = useState(null);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="signup-cont">
            <div className="signupHeader">
                <div className="register-link">
                    <span>
                        هل لديك حساب ؟
                    </span>
                    <Link to={"/signin"} className='creat-account-link'> تسجيل الدخول</Link>
                </div>
                <LazyLoadImage alt='logo' src={Logo} className='sign-logo' />
            </div>
            <div className="welcome-text">
                <span>مرحبا بك في</span>
                <h2>PUROSE</h2>
            </div>

            <div className='sign-form-cont signup'>
                <form >
                    <div className="sign-type-cont">
                        <label className='sign-type'>
                            <input className='StudentType' type='radio' name='StudentType' />
                            <div className="Student-image">
                                <LazyLoadImage src={schoolStudent} alt='Student'></LazyLoadImage>
                            </div>
                            <span>طالب جامعي</span>
                        </label>
                        <label className='sign-type'>
                            <input className='StudentType' type='radio' name='StudentType' />
                            <div className="Student-image">
                                <LazyLoadImage src={unStudent} alt='Student'></LazyLoadImage>
                            </div>
                            <span>طالب مدرسي</span>
                        </label>
                    </div>
                    <div className="form-cont">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group childName">
                                    <input type="text" className='form-input' />
                                    <span>اسم الطفل</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group dadName">
                                    <input type="text" className='form-input ' />
                                    <span>اسم ولى الامر</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <input type="text" placeholder='البريد الالكتروني' className='form-input' />
                        </div>
                        <div className="form-group">
                            <input type="number" placeholder='رقم الجوال' className='form-input' />
                        </div>
                        <div className="form-group">
                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                placeholder="عمر الطفل"
                            />
                        </div>
                        <div className="form-group">
                            <Select
                                defaultValue={countriesOptionsArr}
                                onChange={setCountriesOptionsArr}
                                options={countriesOptions}
                                placeholder="الدولة"
                            />
                        </div>
                        <div className="policies">
                            <div className="register-link">
                                <div className="agree">
                                    <label className="custom-checkbox">
                                        <input type="checkbox"></input>
                                        <span className="check-mark"><i className="fas fa-check"></i></span>
                                    </label>
                                    
                                </div>
                                <div className="policc">
                                    <span>
                                        إنشاء حساب يعني أنك موافق على
                                    </span>
                                    <Link to={"#"} className='creat-account-link' onClick={handleShow}> شروط الخدمة وسياسة الخصوصية</Link>
                                </div>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>شروط الخدمة وسياسة الخصوصية</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        نحن ملتزمون بالحفاظ على سرية بياناتك الشخصية المالية غير العامة. وتتضمن هذه المعلومات معلومات بطاقة الائتمان الخاصة بك أو معلومات طرق الدفع الأخرى. من الآن فصاعدًا، سوف نشير إلى تلك المعلومات اختصارًا باسم "المعلومات الشخصية" من أجل مساحة هذه السياسة.قد نحتاج إلى مشاركة "معلوماتك الشخصية" في ظل ظروف معينة: بحيث يمكننا إمدادك بأفضل خدمة ممكنة، أو تشغيل شركتنا، أو الامتثال للطلبات القانونية. سوف نتناول هذه الظروف بمزيد من التفصيل في موضع لاحق بهذا المستند. *يرجى قراءة سياسة الخصوصية هذه. ستساعدك سياسة الخصوصية على معرفة ما نشاركه من معلومات، وما لا نشاركه، بالإضافة إلى كيفية الحفاظ على سلامة معلوماتك.* إن شركة Meta Payments مستقلة عن شركة Meta Platforms, Inc.‎ ولن تشارك Meta Payments معلوماتك الشخصية مع أي جهة، بما في ذلك شركة Meta Platform أو أي شركات تابعة أخرى، باستثناء الحالات التي سنذكرها لاحقًا في هذه السياسة. تتلقى Meta Payments قدرًا محدودًا من المعلومات الشخصية منك -- وهي تحديدًا أرقام بطاقات الائتمان أو معلومات طرق الدفع الأخرى. للحصول على معلومات حول سياسات الخصوصية العامة لشركة Meta Platforms, Inc.‎، يرجى زيارة https://www.facebook.com/policy.
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button className='submit-btn' onClick={handleClose}>
                                            أعى ذلك
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                        <button type="submit" className='submit-btn'> إنشاء حساب</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
