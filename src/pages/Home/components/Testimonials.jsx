import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import clint1 from "../../../assets/testimonials/1.jpg"
import clint2 from "../../../assets/testimonials/2.jpg"



export default function Testimonials() {
    let swiperArr = [
        { img: clint1, p: "هذا النص يمكن ان يتم تركيبه على أي تصميم دون مشكلة فلن يبدو  وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم" },
        { img: clint2, p: "هذا النص يمكن ان يتم تركيبه على أي تصميم دون مشكلة فلن يبدو  وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم" },
        { img: clint1, p: "هذا النص يمكن ان يتم تركيبه على أي تصميم دون مشكلة فلن يبدو  وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم" },
        { img: clint2, p: "هذا النص يمكن ان يتم تركيبه على أي تصميم دون مشكلة فلن يبدو  وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم" },
    ]
    return (
        <section className='testimonials'>
            <div className="container-fluid">
                <div className="testimonials-title">
                    <h2>آراء طلابنا </h2>
                    <p>تعامالنا مع الأطفال كأنهم أطفالنا فقد حلق بيئة تنافسية جميلة بين الطلاب</p>
                </div>
                <div className="testimonials-slide">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={40}
                        slidesPerView={2}
                        loop={true}
                        pagination={{ clickable: true }}
                        // navigation={true}
                        breakpoints={{
                            720: {
                                slidesPerView: 2,
                                spaceBetween: 40
                            },
                            540: {
                                slidesPerView: 1,
                                spaceBetween: 30
                            },
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                        }}
                    >
                        {swiperArr.map((slid) => <SwiperSlide>
                            <div className="testimonials-card" key={slid}>
                                <img className="testimonials-img" alt="img" src={slid.img} />
                                <div className="testimonials-caption" >
                                    <p className="testimonials-pargh">{slid.p}</p>
                                </div>
                            </div>
                        </SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
