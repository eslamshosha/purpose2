import React from 'react'
import master from "../../assets/Main//master.png"
import dig from "../../assets/explore/02.png"
import stripe from "../../assets/Main//stripe.png"
import visa from "../../assets/Main//visa.png"
import paypal from "../../assets/Main//paypal.png"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Payment() {
    let leson = { id: 1, img: dig, lessonType: "البرمجه", color: "#69BF4A", title: "Voice Over", lesonsCount: "32", p: "سيعمل الأطفال على تطوير الألعاب والتطبيقات للهواتف الذكية، حيث يبدؤون بالبرمجة في الحال ويتّخذون خطواتهم الأولى ليكونوا منشئي المحتوى الرقمي." };

    return (

        <div className="payment">
            <div className="payment-title">
                <h3>الدورة: <span>{leson.title}</span></h3>
                <p>{leson.p}</p>
            </div>
            <div className="payment-body">
                <div className="payment-right-side">
                    <h4>اجمالي الدفع: 41$</h4>
                    <div className="visa-check">
                        <Accordion>
                            <AccordionSummary expandIcon={<></>} aria-controls="panel1-content" id="panel1-header">
                                <div className="check">
                                    <div className="i-cont"><i className="fa-solid fa-circle-check"></i></div>
                                    <span>الفيزا كارد</span>
                                </div>
                                <div className="payment-methods">
                                    <img src={master} alt="master Card" />
                                    <img src={stripe} alt="Visa" />
                                    <img src={visa} alt="Visa" />
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="grid-col1">
                                    <div className="col1">
                                        <span>اسم صاحب البطاقة</span>
                                        <div className="inp-cont">
                                            <input type="text" placeholder='اسمك' />
                                        </div>
                                    </div>
                                    <div className="col2">
                                        <span>تاريخ الانتهاء</span>
                                        <div className="inp-cont">
                                            <input type="text" placeholder='YYYY' /> / <input type="text" placeholder='MM' />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-col2">
                                    <div className="col1">
                                        <span>CVV</span>
                                        <div className="inp-cont">
                                            <input type="text" placeholder='123' />
                                        </div>
                                    </div>
                                    <div className="col2">
                                        <span>رقم البطاقة الائتمانية</span>
                                        <div className="inp-cont">
                                            <input type="text" placeholder='1234 4567 7899 4563' />
                                        </div>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<></>} aria-controls="panel2-content" id="panel2-header">
                                <div className="check">
                                    <div className="i-cont"><i className="fa-solid fa-circle-check"></i></div>
                                    <span>Paypal</span>
                                </div>
                                <div className="payment-methods">
                                    <img src={paypal} alt="Visa" />
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                        <div className="btnleft-cont">
                            <div className="noting"></div>
                            <button><i className="fa-solid fa-arrow-left"> </i> أكمل الدفع</button>
                        </div>
                    </div>
                </div>
                <div className="payment-leson-info">
                    <div className="leson-img">
                        <LazyLoadImage src={leson.img}></LazyLoadImage>
                    </div>
                    <div className="leson-info-ttl">
                        <h4>{leson.title}</h4>
                        <span className="bg-sky span-hint">البرمجه</span>
                        <span className="bg-pink span-hint">الاطفال</span>
                        <span className="bg-purple span-hint">10-17 سنه</span>
                    </div>
                    <div className="leson-info-options">
                        <ul>
                            <li>مدة الدورة: 32 أسبوع، 9أشهر</li>
                            <li>الجدول: تبدأ أغسطس 28,2022 - مايو 28,2023 كل أحد من 3:50 م الى 4:50 م</li>
                            <li>المكان: على الانترنت</li>
                        </ul>
                    </div>
                    <div className="leson-cash">
                        <div className="uper-left">
                            <div className="uper-pargh">
                                <i className="fa-solid fa-info"></i>
                                <div className="text-cont"><p>رسوم التسجيل في الدورة - $41 USD</p>
                                    <span>قابلة للاسترداد بالكامل، وتشمل درسين تجريبيين</span></div>
                            </div>
                            <div className="uper-pargh">
                                <i className="fa-solid fa-info"></i>
                                <div className="text-cont">
                                    <p>ثم $86 USD كل شهر لمدة 9 أشهر </p>
                                    <span>تبدأ المدفوعات الشهرية بعد انتهاء الفترة التجريبية</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="result">
                        <span>الإجمالي اليوم:</span>
                        <span>41.00$</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
