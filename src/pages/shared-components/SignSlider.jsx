import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


export default function SignSlider(props) {

    return (
        <div className={props.isSignupPage ? "sign-slider signup-page" : "sign-slider"}>
            <Swiper
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                // navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                }}
            >
                {props.swiperArr.map((slid) => <SwiperSlide>
                    <div className="imgContainer" key={slid}>
                        <div className="slider-imgContainer">
                            <LazyLoadImage className="slider-img" alt="img" src={slid.image} />
                            <div className="slider-caption" >
                                <h2 className="slider-title ">{slid.title}</h2>
                                <p className="slider-pargh">{slid.pargh}</p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>)}


            </Swiper>
        </div>

    );
}