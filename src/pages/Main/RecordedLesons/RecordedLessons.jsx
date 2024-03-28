import React from 'react'

import vedio from '../../../assets/Main/1.mp4'
import LesonContent from './../../shared-components/LesonContent';
import Discussions from '../../shared-components/Discussions';
import Rate from './../../shared-components/Rate';
import ExamQandA from '../../shared-components/ExamQandA';

export default function RecordedLessons() {

    return (
        <>
            <div className="recorded">
                <div className="recorded-right-side">
                    <div className="video-container">
                        <video controls>
                            <source src={vedio} type="video/mp4" />
                            <source src="movie.ogg" type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">معلومات الدورة</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">الاسئلة الاكثر شيوعا</button>
                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">المناقشات</button>
                            <button className="nav-link" id="nav-profile2-tab" data-bs-toggle="tab" data-bs-target="#nav-profile2" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">التقييم</button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="course-info-container">
                                <div className="subject-info-cont">
                                    <div className="training-info">
                                        <h4>وصف المساق</h4>
                                        <p>في هذا الشابتر، سيتمكن الطفل من استخدام الأدوات الاساسية للبرنامج ويبدأ بالتعامل شيء فشيء. سيُنشؤون تطبيقات وألعاب للهواتف الذكية، ويبدؤون في البرمجة على الفور، ويخطون أولى خطواتهم في الإبداع الرقمي</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade show " id="nav-profile" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="course-info-container">
                                <div className="subject-info-cont">
                                    <div className="training-info">
                                        <h4>01 ما هي مبادئ البرمجة ؟</h4>
                                        <p>في هذا الشابتر، سيتمكن الطفل من استخدام الأدوات الاساسية للبرنامج ويبدأ بالتعامل شيء فشيء. سيُنشؤون تطبيقات وألعاب للهواتف الذكية، ويبدؤون في البرمجة على الفور، ويخطون أولى خطواتهم في الإبداع الرقمي</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade show " id="nav-contact" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="course-info-container">
                                <div className="subject-info-cont">
                                    <div className="training-info">
                                        <Discussions></Discussions>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade show " id="nav-profile2" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="course-info-container">
                                <div className="subject-info-cont">
                                    <div className="training-info">
                                        <Rate />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recorded-left-side">
                    <LesonContent></LesonContent>
                </div>
            </div>
            {/* <div className="exam">
                <h4>اختبار قصير</h4>
                <ExamQandA></ExamQandA>
            </div> */}
        </>

    )
}
