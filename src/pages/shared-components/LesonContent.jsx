import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function LesonContent() {
    let recordrdLeson = [
        { lessonName: "الدرس الأول", count: "21", duration: '45', lesonContent: "المقدمة" },
        { lessonName: "الدرس الثانى", count: "21", duration: '45', lesonContent: "2المقدمة" },
        { lessonName: "الدرس الثالث", count: "21", duration: '45', lesonContent: "3المقدمة" },
        { lessonName: "الدرس الرابع", count: "21", duration: '45', lesonContent: "4المقدمة" },
        { lessonName: "الدرس الخامس", count: "21", duration: '45', lesonContent: "5المقدمة" },
    ]
    return (
        <>
            <h3>محتويات الدورة</h3>
            {
                recordrdLeson.map((ele) => <div className="leson" key={ele}>
                    <Accordion>
                        <AccordionSummary expandIcon={<i className="fa-solid fa-circle-chevron-down"></i>} aria-controls="panel1-content" id="panel1-header">
                            <div className="accordion-head">
                                <div className='display-flex'><span className='leson-name'>{ele.lessonName}</span></div>
                                <div className='display-flex'><i className="fa-regular fa-newspaper"></i><span className='leson-count'> {ele.count} درس </span></div>
                                <div className='display-flex'><i className="fa-regular fa-clock"></i><span className='time'> {ele.duration} دقيقة</span></div>
                            </div>
                            <div className="recorded-leson-info">
                                <span>{ele.lesonContent}</span>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="leson-content">
                                <div className="content-details done">
                                    <div className="icon">
                                        <i className="fa-regular fa-circle-check"></i>
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span className='dash'></span>
                                    </div>
                                    <div className="lsn-title">
                                        <h5>الدرس الاول</h5>
                                        <h6>20 دقيقة</h6>
                                    </div>
                                </div>
                                <div className="content-details done">
                                    <div className="icon">
                                        <i className="fa-regular fa-circle-check"></i>
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span className='dash'></span>
                                    </div>
                                    <div className="lsn-title">
                                        <h5>الدرس الثانى</h5>
                                        <h6>20 دقيقة</h6>
                                    </div>
                                </div>
                                <div className="content-details done">
                                    <div className="icon">
                                        <i className="fa-regular fa-circle-check"></i>
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span className='dash'></span>
                                    </div>
                                    <div className="lsn-title">
                                        <h5>الدرس الثالث</h5>
                                        <h6>20 دقيقة</h6>
                                    </div>
                                </div>
                                <div className="content-details">
                                    <div className="icon">
                                        <i className="fa-regular fa-circle-check"></i>
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span className='dash'></span>
                                    </div>
                                    <div className="lsn-title">
                                        <h5>الدرس الرابع</h5>
                                        <h6>20 دقيقة</h6>
                                    </div>
                                </div>
                                <div className="content-details">
                                    <div className="icon">
                                        <i className="fa-regular fa-circle-check"></i>
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span className='dash'></span>
                                    </div>
                                    <div className="lsn-title">
                                        <h5>الدرس الخامس</h5>
                                        <h6>20 دقيقة</h6>
                                    </div>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>)
            }
        </>
    )
}
