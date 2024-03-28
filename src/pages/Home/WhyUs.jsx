import React from 'react'
import sue from "../../assets/sue.png"
import sue2 from "../../assets/sur2.png"
import chat from "../../assets/chat.png"
import chat1 from "../../assets/chat1.png"
import chat2 from "../../assets/chat2.png"
import { LazyLoadImage } from 'react-lazy-load-image-component'



export default function WhyUs() {
    let cardArr = [
        { img: chat2, h2: "مغامرة تعليمية", p: "طفلك لديه عقل فضولي؟ نحن نقدم مجموعة متنوعة من الدورات التي ستضمن مشاركة طفلك أثناء تعلم مهارة جديدة" },
        { img: chat1, h2: "التعلم بالممارسة", p: "عندما يصنع الأطفال شيئا يتمحسون! تنقسم معظم دوراتنا الى مشاريع يمكن للأطفال مشاركتها مع العائلة والأصدقاء" },
        { img: chat, h2: "التغذية الراجعة", p: "الفصول الدراسية هي وقت للأسئلة والتعاون! خلال الجلسات المباشرة عبر الانترنت سيعمل طفلك على المشاريع وسيحصل على المساعدة من مدربه المختص" },

    ]
    return (

        <>
            <section className="whyus">
                <div className="container-fluid">
                    <LazyLoadImage src={sue2} className='bg-t' alt='background'></LazyLoadImage>
                    <div className="h-cont">
                        <h2>لماذا عليك اختيار PURPOSE</h2>
                        <LazyLoadImage src={sue} alt='sue'></LazyLoadImage>
                    </div>
                    <div className="grid-container">
                        {cardArr.map((ele) => <div className="g-card" key={ele}>
                            <div className="imgs">
                                <LazyLoadImage src={ele.img} alt='chat'></LazyLoadImage>
                            </div>
                            <h3>{ele.h2}</h3>
                            <p>{ele.p}</p>
                        </div>)}
                    </div>
                </div>
            </section>
        </>
    )
}
