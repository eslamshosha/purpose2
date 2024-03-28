import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img from "../../assets/profile/1.jpg";
import img2 from "../../assets/profile/2.png";
import img3 from "../../assets/profile/3.png";
import img4 from "../../assets/profile/4.jpg";
import img5 from "../../assets/profile/5.jpg";
import img6 from "../../assets/profile/6.jpg";
import img7 from "../../assets/profile/7.jpg";
import img8 from "../../assets/profile/8.jpg";
import img9 from "../../assets/profile/9.jpg";
import ProfileInformation from "./ProfileInformation";
import { Link } from "react-router-dom";

export default function PersonalProfile() {
  let hawafez = [1, 2, 3];
  let projects = [
    {
      img: img4,
      userImg: img2,
      username: "أكرم عبد الواحد",
      seen: 1,
      liks: 20,
      title: "الذكاء الاصطناعي",
    },
    {
      img: img5,
      userImg: img2,
      username: "أكرم عبد الواحد",
      seen: 1,
      liks: 20,
      title: "الذكاء الاصطناعي",
    },
    {
      img: img6,
      userImg: img2,
      username: "أكرم عبد الواحد",
      seen: 1,
      liks: 20,
      title: "الذكاء الاصطناعي",
    },
    {
      img: img7,
      userImg: img2,
      username: "أكرم عبد الواحد",
      seen: 1,
      liks: 20,
      title: "الذكاء الاصطناعي",
    },
    {
      img: img8,
      userImg: img2,
      username: "أكرم عبد الواحد",
      seen: 1,
      liks: 20,
      title: "الذكاء الاصطناعي",
    },
    {
      img: img9,
      userImg: img2,
      username: "أكرم عبد الواحد",
      seen: 1,
      liks: 20,
      title: "الذكاء الاصطناعي",
    },
  ];
  return (
    <div className="profile">
      <div className="right-side">
        <div className="img-cont">
          <LazyLoadImage src={img}></LazyLoadImage>
        </div>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              الملف الشخصي
            </button>
            <button
              className="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              الحوافز
            </button>
            <button
              className="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              واجهة المشاريع
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="tab-info">
              <div className="about-me">
                <div className="about-head">
                  <h4>نبذة عني</h4>
                  <button>
                    اضافة نبذة <i className="fa-solid fa-circle-plus"></i>
                  </button>
                </div>
                <div className="about-body">
                  <p>
                    أهلا وسهلا بكم في الملف التعريفي الخاص بي أكرم عبد الواحد
                    مهندس مدني ومصمم واجهات (UI/UX)، متخصص في تصميم تطبيقات
                    الهواتف الذكية بنظام التشغيل Android & iOS وصفحات الويب
                    بجميع أشكالها مع مراعاة المعايير القياسية والاساسية التي
                    تتناسب مع جميع الأجهزة وعمل التحليل المناسب لأي مشروع. تصميم
                    صفحات الويب على مبدأ (Z pattern and F pattern ) تفضل بزيارة
                    معرض أعمالي. واذا كان لديك أي استفسار لا تتردد أبدا بالتحدث
                    معي في أي وقت تحياتي..
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade show "
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="">
              <div className="tab-container">
                {hawafez.map((hafez) => (
                  <div className="ps-cont">
                    <div className="img-cont">
                      <LazyLoadImage src={img3}></LazyLoadImage>
                    </div>
                    <div className="text">
                      <h3>استراتيجية التسويق</h3>
                      <p>
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد
                        تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد
                        مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى
                        زيادة...
                      </p>
                    </div>
                    <div className="tabss">
                      <p>
                        <span>
                          {" "}
                          <i className="fa-solid fa-book"></i> 21 درس{" "}
                        </span>{" "}
                        |{" "}
                        <span>
                          {" "}
                          <i className="fa-solid fa-chart-simple"></i> متوسط{" "}
                        </span>
                      </p>
                      <span className="coped">مكتملة</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade show projects"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <Link to="addProject">
              <div className="add-project">
                <i className="fa-solid fa-plus"></i>
                <span> اضافة مشروع </span>
              </div>
            </Link>
            <div className="">
              <div className="cards-cont">
                {projects.map((project) => (
                  <div className="card-info">
                    <div className="img-cont">
                      <LazyLoadImage src={project.img}></LazyLoadImage>
                    </div>
                    <div className="user-react">
                      <div className="user">
                        <div className="img-cont">
                          <LazyLoadImage src={project.userImg}></LazyLoadImage>
                        </div>
                        <span>{project.username}</span>
                      </div>
                      <span className="pro-static">
                        <span>{project.seen}</span> <i className="fa-regular fa-eye"></i>
                        <span>{project.liks}</span> <i className="fa-regular fa-heart"></i>
                      </span>
                    </div>
                    <h4>{project.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProfileInformation></ProfileInformation>
    </div>
  );
}
