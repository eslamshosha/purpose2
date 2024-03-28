import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import shape from "../../assets/Main//shape.png";
import sue2 from "../../assets/sur2.png";
import sue from "../../assets/sue.png";

export default function Footer() {
  return (
    <div>
      <div className="join">
        <span className="footer-bg">
            purpose
        </span>
        <img src={sue2} alt="sue2" className="wave" />
        <div className="join-container">
          <div className="text-center">
            <div className="join-title">
              <h4>انضم معنا وكون جزء منا</h4>
              <img src={sue} alt="sue" className="sue" />
            </div>
          </div>
          <div className="join-body">
            <div className="join-right-side">
              <input type="text" placeholder="حدد وقت الفصل " />
              <input type="text" placeholder="اسم ولي الامر" />
              <input type="text" placeholder="البريد الالكتروني لولي الامر" />
              <input type="number" placeholder="رقم الجوال" />
              <input type="text" placeholder="عمر الطفل" />
              <input type="text" placeholder="الدولة" />
            </div>
            <div className="join-left-side">
              <div className="uper-left">
                <div className="uper-pargh">
                  <i className="fa-solid fa-info"></i>
                  <p>
                    رسوم التسجيل في الدورة - $41 USD قابلة للاسترداد بالكامل،
                    وتشمل درسين تجريبيين
                  </p>
                </div>
                <div className="uper-pargh">
                  <i className="fa-solid fa-info"></i>
                  <p>
                    ثم $86 USD كل شهر لمدة 9 أشهر تبدأ المدفوعات الشهرية بعد
                    انتهاء الفترة التجريبية
                  </p>
                </div>
              </div>
              <div className="lower-left">
                <LazyLoadImage src={shape} alt="shape"></LazyLoadImage>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
