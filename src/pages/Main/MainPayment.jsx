import React from "react";
import master from "../../assets/Main//master.png";
import dig from "../../assets/explore/02.png";
import stripe from "../../assets/Main//stripe.png";
import visa from "../../assets/Main//visa.png";
import paypal from "../../assets/Main//paypal.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Thumbs  } from "swiper/modules";
import { useRef, useState } from "react";
import product1 from "../../assets/product-slider/01.png";
import product2 from "../../assets/product-slider/02.png";
import product3 from "../../assets/product-slider/03.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


export default function MainPayment() {
  const NewsSwiperRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  let leson = {
    id: 1,
    img: dig,
    lessonType: "البرمجه",
    color: "#69BF4A",
    title: "Meta Quest Pro",
    lesonsCount: "32",
    p: "في هذه الدورة، سيتمكن أطفالك من تحويل الوقت الضائع أمام الشاشة إلى وقت إيجابي. سيُنشؤون تطبيقات وألعاب للهواتف الذكية، ويبدؤون في البرمجة على الفور، ويخطون أولى خطواتهم في الإبداع الرقمي.",
  };
  let swiperArr = [
    {
      image: product1,
    },
    {
      image: product2,
    },
    {
      image: product3,
    },
  ];
  return (
    <div className="payment">
      <div className="payment-title">
        <h3>
          Meta Quest Pro
          {/* <span>{leson.title}</span> */}
        </h3>
        <p>{leson.p}</p>
      </div>
      <div className="payment-body">
        <div className="payment-right-side">
          <h4>اجمالي الدفع: 41$</h4>
          <div className="visa-check">
            <Accordion>
              <AccordionSummary
                expandIcon={<></>}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div className="check">
                  <div className="i-cont">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
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
                      <input type="text" placeholder="اسمك" />
                    </div>
                  </div>
                  <div className="col2">
                    <span>تاريخ الانتهاء</span>
                    <div className="inp-cont">
                      <input type="text" placeholder="YYYY" /> /{" "}
                      <input type="text" placeholder="MM" />
                    </div>
                  </div>
                </div>
                <div className="grid-col2">
                  <div className="col1">
                    <span>CVV</span>
                    <div className="inp-cont">
                      <input type="text" placeholder="123" />
                    </div>
                  </div>
                  <div className="col2">
                    <span>رقم البطاقة الائتمانية</span>
                    <div className="inp-cont">
                      <input type="text" placeholder="1234 4567 7899 4563" />
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<></>}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <div className="check">
                  <div className="i-cont">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <span>Paypal</span>
                </div>
                <div className="payment-methods">
                  <img src={paypal} alt="Visa" />
                </div>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <div className="btnleft-cont">
              <div className="noting"></div>
              <button>
                <i className="fa-solid fa-arrow-left"> </i> أكمل الدفع
              </button>
            </div>
          </div>
        </div>
        <div className="payment-leson-info">
          <div className="product-slider">
            <Swiper
              modules={[ Pagination, Navigation, Thumbs]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={true}
              thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
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
              {swiperArr.map((slid) => (
                <SwiperSlide>
                  <div className="productImg" key={slid}>
                    <div className="product-imgContainer">
                      <LazyLoadImage
                        className="product-img"
                        alt="img"
                        src={slid.image}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="thumbs-product-slider">
            <Swiper
              onBeforeInit={(swiper) => {
                NewsSwiperRef.current = swiper;
              }}
              modules={[ Navigation, Thumbs]}
              spaceBetween={"15px"}
              slidesPerView={2.3}
              loop={true}
              autoplay={true}
              navigation={true}
              slideToClickedSlide={true}
              watchSlidesProgress
              onSwiper={setThumbsSwiper}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2.3,
                },
              }}
            >
              {swiperArr.map((slid) => (
                <SwiperSlide>
                  <div className="productImg" key={slid}>
                    <div className="Thumbs-imgContainer">
                      <LazyLoadImage
                        className="product-img"
                        alt="img"
                        src={slid.image}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              onClick={() => NewsSwiperRef.current.slidePrev()}
              className="swiper-button-prev"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div
              onClick={() => NewsSwiperRef.current.slideNext()}
              className="swiper-button-next"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
          <div className="leson-info-ttl">
            <h4>{leson.title}</h4>
            <span className="span-hint bg-sky ">أدوات</span>
            <span className="span-hint bg-purple">جميع الفئات</span>
          </div>
          <div className="leson-info-options">
            <ul>
              <li>مدة الدورة: 32 أسبوع، 9أشهر</li>
              <li>
                الجدول: تبدأ أغسطس 28,2022 - مايو 28,2023 كل أحد من 3:50 م الى
                4:50 م
              </li>
              <li>المكان: على الانترنت</li>
            </ul>
          </div>
          <div className="result">
            <span>الإجمالي اليوم:</span>
            <span>41.00$</span>
          </div>
        </div>
      </div>
    </div>
  );
}
