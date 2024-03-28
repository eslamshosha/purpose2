import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import product1 from "../../../assets/Main/10.png";
import profile from "../../../assets/Main/profile.png";
import product2 from "../../../assets/Main/11.png";
import product3 from "../../../assets/Main/12.jpg";
import product4 from "../../../assets/Main/13.jpg";
import product5 from "../../../assets/Main/14.jpg";
import product6 from "../../../assets/Main/15.jpg";
import product7 from "../../../assets/Main/16.jpg";
import product8 from "../../../assets/Main/17.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Main from "./../Main";

export default function News() {
  let ceseList = [
    {
      id: "1",
      img: product6,
      channel: "Remote",
      title: "Introduction to generative AI for government professionals",
      time: "6",
      status: "done",
    },
    {
      id: "2",
      img: product7,
      channel: "Remote",
      title: "Introduction to generative AI for government professionals",
      time: "6",
      status: "inProgress",
    },
    {
      id: "3",
      img: product8,
      channel: "Remote",
      title: "Introduction to generative AI for government professionals",
      time: "6",
      status: "notYet",
    },
  ];
  console.log(ceseList.length);

  let swiperArr = [
    { image: product1 },
    { image: product2 },
    { image: product3 },
  ];
  let swiperArr2 = [
    { image: product4 },
    { image: product5 },
    { image: product2 },
  ];

  const NewsSwiperRef = useRef(null);
  const NewsSwiperRef1 = useRef(null);
  return (
    <div className="news">
      <div className="swiper">
        <div className="slider-title">
          <div className="tilte">
            <i className="fa-solid fa-rocket"></i>
            <h3>Quick News</h3>
          </div>
          <div className="navigation-cont">
            <div
              onClick={() => NewsSwiperRef.current.slideNext()}
              className="swiper-button-next"
            >
              <i class="fa-solid fa-arrow-right-long"></i>
            </div>
            <span className="arrow-swiper">Swipe</span>
            <div
              onClick={() => NewsSwiperRef.current.slidePrev()}
              className="swiper-button-prev"
            >
              <i class="fa-solid fa-arrow-left-long"></i>
            </div>
          </div>
        </div>
        <div className="thumbs-product-slider">
          <Swiper
            onBeforeInit={(swiper) => {
              NewsSwiperRef.current = swiper;
            }}
            modules={[Navigation, Thumbs]}
            spaceBetween={"15px"}
            slidesPerView={3}
            loop={true}
            autoplay={true}
            navigation={true}
            slideToClickedSlide={true}
            watchSlidesProgress
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {swiperArr.map((slid) => (
              <SwiperSlide>
                <div className="productImg" key={slid}>
                  <div
                    className="Thumbs-imgContainer"
                    style={{ backgroundImage: `url(${slid.image})` }}
                  >
                    <div className="layout">
                      <div className="date">15 Feb 2024</div>
                      <div className="conent">
                        <p>
                          Elon Musk asks the same question in all job interviews
                          to detect a liar.
                        </p>
                        <div className="seen">
                          <i className="fa-regular fa-eye"></i>{" "}
                          <span>150K</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="news-tags">
        <span className="active">🔥 Trends</span>
        <span>Prompt Generator</span>
        <span>Thinking Method</span>
        <span>Leab 2024</span>
      </div>
      <div className="swiper">
        <div className="slider-title">
          <div className="tilte">
            <i className="fa-solid fa-book"></i>
            <h3>Quick News</h3>
          </div>
          <div className="navigation-cont">
            <div
              onClick={() => NewsSwiperRef.current.slideNext()}
              className="swiper-button-next"
            >
              <i class="fa-solid fa-arrow-right-long"></i>
            </div>
            <div
              onClick={() => NewsSwiperRef.current.slidePrev()}
              className="swiper-button-prev"
            >
              <i class="fa-solid fa-arrow-left-long"></i>
            </div>
          </div>
        </div>

        <div className="thumbs-product-slider">
          <Swiper
            onBeforeInit={(swiper) => {
              NewsSwiperRef1.current = swiper;
            }}
            modules={[Navigation, Thumbs]}
            spaceBetween={"15px"}
            slidesPerView={2}
            loop={true}
            autoplay={true}
            navigation={true}
            slideToClickedSlide={true}
            watchSlidesProgress
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              700: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 2,
              },
              7680: {
                slidesPerView: 2,
              },
            }}
          >
            {swiperArr2.map((slid) => (
              <SwiperSlide>
                <div className="swiper-slide-n">
                  <div
                    className="card-img"
                    style={{ backgroundImage: `url(${slid.image})` }}
                  >
                    <span>Integrations</span>
                    <span>Remote</span>
                  </div>
                  <div className="card-title">
                    Stagger Lee and the ’Erasure’ of Middle-Class African
                    Americans
                  </div>
                  <div className="card-date">
                    <i className="fa-regular fa-clock"></i>
                    <span className="mins">6 min read</span>
                    <p> . </p> <span className="months">Feb14,2024 </span>
                  </div>
                  <div className="top-emp">
                    <div className="container">
                      <div className="emp you">
                        <div className="profil">
                          <div className="img-cont">
                            <img src={profile} alt="profile" />
                          </div>
                          <div className="nam">
                            <h4>Ahmed Sharaby</h4>
                            <span>Product Designer</span>
                          </div>
                        </div>
                        <p>.</p>
                        <div className="scor">Follow</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="list-courss">
        <div className="h3">
          <i className="fa-solid fa-trophy"></i>
          <h3>Your Courses</h3>
        </div>
        <div className="list-courss-cont">
          {ceseList.map((item) => (
            <div className="cours-item">
              <div className="rit">
                {item.id === "1" ? (
                  <i className="fa-solid fa-caret-down"></i>
                ) : (
                  ""
                )}
                <span className="gap-area"></span>
                {item.status === "done" ? (
                  <i className="fa-solid fa-circle-check"></i>
                ) : item.status === "inProgress" ? (
                  <i className="fa-regular fa-circle-dot"></i>
                ) : item.status === "notYet" ? (
                  <i className="fa-solid fa-circle-dot"></i>
                ) : (
                  ""
                )}
                <span className="gap-area"></span>
                {item.id == ceseList.length ? (
                  <i className="fa-solid fa-circle"></i>
                ) : (
                  ""
                )}
              </div>
              <div className="lft">
                <div className="img-cont">
                  <LazyLoadImage src={item.img} alt="product"></LazyLoadImage>
                </div>
                <div className="crs-detals">
                  <span>{item.channel}</span>
                  <p>{item.title}</p>
                  <p className="clock">
                    <i className="fa-regular fa-clock"> </i> {item.time} hours
                    left{" "}
                  </p>
                  {item.status === "inProgress" ? (
                    <div className="prg">
                      <div className="prgrs-don"></div>
                    </div>
                  ) : null}
                </div>
                <div className="finiss">
                  <button className="more-btn">
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                  {item.status === "done" ? (
                    <span className="don-status">Completed</span>
                  ) : item.status === "inProgress" ? (
                    <span className="inprog-status">Resume Course</span>
                  ) : item.status === "notYet" ? (
                    <Link className="notYet-status">Start Now</Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
