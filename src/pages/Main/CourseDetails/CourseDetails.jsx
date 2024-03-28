import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import dig from "../../../assets/explore/02.png";
import line from "../../../assets/Main/Line-8.png";
import tab from "../../../assets/Main/tab.png";
import mem1 from "../../../assets/Main/team/1.png";
import mem2 from "../../../assets/Main/team/2.png";
import mem3 from "../../../assets/Main/team/3.png";
import mem4 from "../../../assets/Main/team/4.png";
import mem5 from "../../../assets/Main/team/5.png";
import master from "../../../assets/Main//master.png";
import stripe from "../../../assets/Main//stripe.png";
import visa from "../../../assets/Main//visa.png";
import paypal from "../../../assets/Main//paypal.png";
import shape from "../../../assets/Main//shape.png";
import sue2 from "../../../assets/sur2.png";
import sue from "../../../assets/sue.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Payment from "../../shared-components/Payment";
import { Link } from "react-router-dom";

export default function CourseDetails(props) {
  let teamMembers = [
    {
      img: mem1,
      name: "أميرة محمد",
      jobTitle: "مدرسة جافا سكريبت",
      p: "تعلم الاطفال مبادئ البرمجة من سن 10-12، تخرجت من الجامعة الامريكية قبل 3 سنوات",
    },
    {
      img: mem2,
      name: "علي أمير",
      jobTitle: "مدرس ++C",
      p: "يعلم الاطفال مبادئ البرمجة من سن 10-15، تخرج من الجامعة الامريكية قبل 3 سنوات",
    },
    {
      img: mem3,
      name: "سعاد امان",
      jobTitle: "مدرسة جافا",
      p: "تعلم الاطفال مبادئ البرمجة من سن 10-12، تخرجت من الجامعة الامريكية قبل 3 سنوات",
    },
    {
      img: mem4,
      name: "مدرسة جافا",
      jobTitle: "مسؤول تطوير التطبيقات",
      p: "تعلم الاطفال مبادئ البرمجة من سن 10-12، تخرجت من الجامعة الامريكية قبل 3 سنوات",
    },
    {
      img: mem5,
      name: "سيرينا ",
      jobTitle: "مدرسة لغة برمجة",
      p: "تعلم الاطفال مبادئ البرمجة من سن 10-12، تخرجت من الجامعة الامريكية قبل 3 سنوات",
    },
  ];
  let projects = [
    {
      img: tab,
      p: "هي لعبة رائعة وبسيطة حيث يمكن لمن يلعبها التحكم في العدّاد الموجود في منتصف الشاشة. وقد صُممت تجربة المستخدم للعبة من أحد الأطفال الصغار",
    },
    {
      img: tab,
      p: "هي لعبة رائعة وبسيطة حيث يمكن لمن يلعبها التحكم في العدّاد الموجود في منتصف الشاشة. وقد صُممت تجربة المستخدم للعبة من أحد الأطفال الصغار",
    },
    {
      img: tab,
      p: "هي لعبة رائعة وبسيطة حيث يمكن لمن يلعبها التحكم في العدّاد الموجود في منتصف الشاشة. وقد صُممت تجربة المستخدم للعبة من أحد الأطفال الصغار",
    },
    {
      img: tab,
      p: "هي لعبة رائعة وبسيطة حيث يمكن لمن يلعبها التحكم في العدّاد الموجود في منتصف الشاشة. وقد صُممت تجربة المستخدم للعبة من أحد الأطفال الصغار",
    },
    {
      img: tab,
      p: "هي لعبة رائعة وبسيطة حيث يمكن لمن يلعبها التحكم في العدّاد الموجود في منتصف الشاشة. وقد صُممت تجربة المستخدم للعبة من أحد الأطفال الصغار",
    },
    {
      img: tab,
      p: "هي لعبة رائعة وبسيطة حيث يمكن لمن يلعبها التحكم في العدّاد الموجود في منتصف الشاشة. وقد صُممت تجربة المستخدم للعبة من أحد الأطفال الصغار",
    },
    {
      img: tab,
      p: "هي لعبة رائعة وبسيطة حيث يمكن لمن يلعبها التحكم في العدّاد الموجود في منتصف الشاشة. وقد صُممت تجربة المستخدم للعبة من أحد الأطفال الصغار",
    },
    {
      img: tab,
      p: "هي لعبة رائعة وبسيطة حيث يمكن لمن يلعبها التحكم في العدّاد الموجود في منتصف الشاشة. وقد صُممت تجربة المستخدم للعبة من أحد الأطفال الصغار",
    },
  ];
  let leson = {
    id: 1,
    img: dig,
    lessonType: "البرمجه",
    color: "#69BF4A",
    title: "Voice Over",
    lesonsCount: "32",
    p: "سيعمل الأطفال على تطوير الألعاب والتطبيقات للهواتف الذكية، حيث يبدؤون بالبرمجة في الحال ويتّخذون خطواتهم الأولى ليكونوا منشئي المحتوى الرقمي.",
  };
  return (
    <div className="single-subject">
      <div className="single-container">
        <div className="text-header">
          <h3 style={{ color: leson.color }}>{leson.title}</h3>
          <span>
            <i className="fa-solid fa-share-nodes"></i>شارك الدورة
          </span>
        </div>
        <div className="explore-card">
          <div className="explr-img">
            <LazyLoadImage src={leson.img} alt="dig"></LazyLoadImage>{" "}
            <span>{leson.lessonType}</span>
          </div>
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
              معلومات الدورة
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
              جدول الحصص
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
              المنهاج الدراسي
            </button>
            <button
              className="nav-link"
              id="nav-profile2-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile2"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              الفريق
            </button>
            <button
              className="nav-link"
              id="nav-contact2-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact2"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              التحق الآن
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
            <div className="course-info-container">
              <div className="subject-info-cont">
                <div className="training-info">
                  <h4>معلومات الدورة التدريبية</h4>
                  <p>
                    ترتبط البرمجة بالكامل بعامل التفكير. ويجمع تعلّم البرمجة بين
                    المعرفة العلمية مع الإبداع وتعلّم لغة جديدة تمامًا. ويتطلّب
                    نشاطًا كبيرًا في عدة جوانب ي المخ فضلاً عن تمكين الأطفال؛
                    فهم عندما يبرمجون، فإنهم يتعلّمون كيفية التعبير عن أنفسهم
                    وتطوير التفكير الإجرائي وتعزيز الثقة بأنفسهم واكتساب
                    مجموعةجديدة من المهارات التي تساعدهم على الانتقال من مجرّد
                    استخدام المعلومات إلى أن يصبحوا من منشئي المحتوى الرقمي. في
                    الدورة التدريبية تطوير التطبيقات، سيتعلّم الطلبة أساسيات
                    برمجة التطبيقات والألعاب للهواتف الذكية. فهم سيتعلّمون كتابة
                    التعليمة البرمجية للمرة الأولى، فضلاً عن تطوير وتصميم
                    منتجاتهم الشخصية الفريدة التي هي من بنات أفكارهم.
                  </p>
                  <h5>سوف يتعلّم الطلبة وينفذون المفاهيم التالية:</h5>
                  <ul>
                    <li>
                      جمل البرمجة: الإدخال، و if/else، و random، و intersect
                    </li>
                    <li>المتغيّرات: استخدام المتغيّرات لتخزين المعلومات</li>
                    <li>
                      التصميم الأساسي: إدخال ملفات الوسائط (الفيديو والملفات
                      الصوتية والصور) في التطبيق
                    </li>
                  </ul>
                </div>
              </div>
              <div className="subject-details">
                <h3>تفاصيل الدورة</h3>
                <div className="details-hours">
                  <div className="dcontainer">
                    <div className="rs">
                      <i className="fa-solid fa-signal"></i>
                      <span>المستوى</span>
                    </div>
                    <div className="ls">
                      <span>مبتدئ</span>
                    </div>
                  </div>
                  <div className="dcontainer">
                    <div className="rs">
                      <i className="fa-regular fa-clock"></i>
                      <span>الساعات الاسبوعية</span>
                    </div>
                    <div className="ls">
                      <span>ساعتين</span>
                    </div>
                  </div>
                  <div className="dcontainer">
                    <div className="rs">
                      <i className="fa-regular fa-calendar"></i>
                      <span>مدة الدورة</span>
                    </div>
                    <div className="ls">
                      <span>9 أشهر</span>
                    </div>
                  </div>
                  <div className="dcontainer">
                    <div className="rs">
                      <i className="fa-solid fa-person"></i>
                      <span>العمر</span>
                    </div>
                    <div className="ls">
                      <span>10 - 17 </span>
                    </div>
                  </div>
                  <div className="dcontainer">
                    <div className="rs">
                      <i className="fa-solid fa-language"></i>
                      <span>اللغة</span>
                    </div>
                    <div className="ls">
                      <span>عربي</span>
                    </div>
                  </div>
                  <Link to="/payment">
                    <button> اشتري الان</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div className="av-table-head">
              <h5>جدول الحصص المتاحة</h5>
              <p>
                تبدأ دوراتنا في تواريخ مختلفة حتى يمكنك اختيار الفصل الذي يناسب
                جدول طفلك. يبدأ فصلنا القادم يوم الأحد, أغسطس 28 الساعة 3:50
                مساءً. إذا كنت مهتماً بحضور إحدى فصولنا،
                <span>اضغط على الجدول أدناه لبدء التسجيل .</span>
              </p>
            </div>
            <div className="container">
              <div className="timetable-img text-center">
                <img src="img/content/timetable.png" alt="" />
              </div>
              <div className="table-responsive">
                <table className="table table-bordered text-center">
                  <thead>
                    <tr className="bg-light-gray">
                      <th className="text-uppercase">Time</th>
                      <th className="text-uppercase">1 March</th>
                      <th className="text-uppercase">2 March</th>
                      <th className="text-uppercase">3 March</th>
                      <th className="text-uppercase">4 March</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="align-middle time-td">09:00am</td>
                      <td>
                        <div className="table-time">
                          9:00-10:00
                        </div>
                        <button className="bg-sky">
                          حدد الفصل
                        </button>
                        
                      </td>

                      <td>
                        <div className="table-time">
                          9:00-10:00
                        </div>
                        <button className="bg-sky">
                          حدد الفصل
                        </button>
                        
                      </td>
                      <td>
                        <div className="table-time">
                          9:00-10:00
                        </div>
                        <button className="bg-purple">
                          حدد الفصل
                        </button>
                        
                      </td>
                      <td>
                        <div className="table-time">
                          9:00-10:00
                        </div>
                        <button className="bg-pink">
                          حدد الفصل
                        </button>
                        
                      </td>
                    </tr>

                    <tr>
                      <td className="align-middle time-td">10:00am</td>
                      <td>
                        <div className="table-time">
                          10:00-11:00
                        </div>
                        <button className="bg-yellow">
                          حدد الفصل
                        </button>
                        
                      </td>
                      <td className="bg-light-gray"></td>

                      <td>
                        <div className="table-time">
                          10:00-11:00
                        </div>
                        <button className="bg-pink">
                          حدد الفصل
                        </button>
                        
                      </td>
                      <td className="bg-light-gray"></td>
                    </tr>

                    <tr>
                      <td className="align-middle time-td">11:00am</td>
                      <td>
                        <div className="table-time">
                          11:00-12:00
                        </div>
                        <button className="bg-lightred">
                          حدد الفصل
                        </button>
                      </td>

                      <td>
                        <div className="table-time">
                          11:00-12:00
                        </div>
                        <button className="bg-lightred">
                          حدد الفصل
                        </button>
                      </td>
                      <td>
                        <div className="table-time">
                          11:00-12:00
                        </div>
                        <button className="bg-lightred">
                          حدد الفصل
                        </button>
                      </td>
                      <td>
                        <div className="table-time">
                          11:00-12:00
                        </div>
                        <button className="bg-lightred">
                          حدد الفصل
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td className="align-middle time-td">12:00pm</td>
                      <td className="bg-light-gray"></td>
                      <td>
                        <div className="table-time">
                          12:00-1:00
                        </div>
                        <button className="bg-purple">
                          حدد الفصل
                        </button>
                        
                      </td>

                      <td className="bg-light-gray"></td>
                      <td>
                        <div className="table-time">
                          12:00-1:00
                        </div>
                        <button className="bg-green">
                        حدد الفصل
                        </button>
                        
                      </td>
                    </tr>

                    <tr>
                      <td className="align-middle time-td">01:00pm</td>

                      <td className="bg-light-gray"></td>
                      <td>
                        <div className="table-time">
                          1:00-2:00
                        </div>
                        <button className="bg-pink">
                          حدد الفصل
                        </button>
                        
                      </td>
                      <td>
                        <div className="table-time">
                          1:00-2:00
                        </div>
                        <button className="bg-green">
                        حدد الفصل
                        </button>
                      </td>
                      <td>
                        <div className="table-time">
                          1:00-2:00
                        </div>
                        <button className="bg-yellow">
                          حدد الفصل
                        </button>
                        
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <div className="manhaj">
              <div className="title">
                <h4>المنهج الدراسي للدورة التدريبية</h4>
                <img src={line} alt="Line" />
                <p>
                  سيتعرّف الطلبة على بيئة التعلّم، ويتعلّمون أساسيّات برمجة
                  التطبيقات والألعاب للهواتف الذكيّة. وسيبدأ الطلبة بإنشاء تطبيق
                  بزر واحد وينطلقون للوصول إلى تطوير تطبيقات بشاشات متعدّدة،
                  وسيعملون على تطوير وتصميم عددٍ من التطبيقات التي سيتم تثبيتها
                  على أجهزتهم
                </p>
              </div>
              <div className="body">
                <h5>المشاريع الطلابية</h5>
                <div className="body-grid">
                  {projects.map((ele) => (
                    <div className="body-cont" key={ele}>
                      <div className="img-cont">
                        <img src={ele.img} alt="tab" />
                      </div>
                      <p>{ele.p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile2"
            role="tabpanel"
            aria-labelledby="nav-profile2-tab"
          >
            <div className="team">
              <img src={sue2} alt="sue2" className="wave" />
              <div className="title">
                <h5>
                  فريق تدريس مساق<span> تطوير التطبيقات</span>
                </h5>
                <img src={sue} alt="sue" className="sue" />
              </div>
              <p>
                يتمتّع مدرّسوا Tekkie Uni بخبرة عالية في تدريس البرمجة للأطفال.
                فهم أساس الفصل الدراسي ويكون التدريس عبر الإنترنت بكل حماسة،
                ويحثون الطلبة على المشاركة ويسعدون كثيرًا بالإجابة عن جميع أسئلة
                الأطفال.
              </p>
              <div className="team-card-cont">
                {teamMembers.map((ele) => (
                  <div className="team-card" key={ele}>
                    <img src={ele.img} alt="Team Member" />
                    <h5>{ele.name}</h5>
                    <h6>{ele.jobTitle}</h6>
                    <p>{ele.p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact2"
            role="tabpanel"
            aria-labelledby="nav-contact2-tab"
          ></div>
        </div>
      </div>
    </div>
  );
}
