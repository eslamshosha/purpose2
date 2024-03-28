import React from "react";
import vedio from "../../assets/Main/1.mp4";
import mem1 from "../../assets/Main/team/1.png";
import mem2 from "../../assets/Main/team/2.png";
import mem3 from "../../assets/Main/team/3.png";
import mem5 from "../../assets/Main/team/5.png";
import mem4 from "../../assets/Main/team/4.png";

export default function LiveLessons() {
  let chat = [
    {
      id: "1",
      userImg: mem1,
      msgTime: "10:30",
      sender: false,
      msg: "مرحبا، السلام عليكم ورحمة الله وبركاته",
    },
    {
      id: "2",
      userImg: mem5,
      msgTime: "10:30",
      sender: false,
      msg: "مرحبا، السلام عليكم ورحمة الله وبركاته",
    },
    {
      id: "3",
      userImg: mem3,
      msgTime: "10:30",
      sender: false,
      msg: "مرحبا، السلام عليكم ورحمة الله وبركاته",
    },
    {
      id: "4",
      userImg: mem1,
      msgTime: "10:30",
      sender: false,
      msg: "مرحبا، السلام عليكم ورحمة الله وبركاته",
    },
    {
      id: "5",
      userImg: mem4,
      msgTime: "10:30",
      sender: false,
      msg: "مرحبا، السلام عليكم ورحمة الله وبركاته",
    },
    {
      id: "6",
      userImg: mem2,
      msgTime: "10:30",
      sender: true,
      msg: "مرحبا، السلام عليكم ورحمة الله وبركاته",
    },
  ];
  return (
    <div className="live">
      <div className="live-right-side">
        <div className="video-container">
          <video controls>
            <source src={vedio} type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="live-leson-content">
          <h2>
            الدورة:<span> Voice Over</span>
          </h2>
          <h5>الشابتر الثاني: التعامل مع الأدوات الأساسية للبرنامج</h5>
          <p>
            في هذا الشابتر، سيتمكن الطفل من استخدام الأدوات الاساسية للبرنامج
            ويبدأ بالتعامل شيء فشيء. سيُنشؤون تطبيقات وألعاب للهواتف الذكية،
            ويبدؤون في البرمجة على الفور، ويخطون أولى خطواتهم في الإبداع الرقمي
          </p>
        </div>
      </div>
      <div className="live-left-side">
        <div className="chat-cont">
          <div className="messages-ccont">
            {chat.map((message) => (
              <div
                className={message.sender ? "mgs sender" : "mgs"}
                key={message.id}
              >
                <div className="img-cont">
                  <img src={message.userImg} alt="Member 1" />
                </div>
                <div className="msg-text">
                  <p className="msg-content">{message.msg}</p>
                  <span>{message.msgTime}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="send-msg-container">
            <form action="" className="msg-form">
              <div className="send-msg-cont">
                <button className="btn-mic" type="button">
                  <i className="fa-solid fa-microphone"></i>
                </button>
                <input type="text" placeholder="Send a message" />
                <div className="msg-btn-cont">
                  <button type="button">
                    <i className="fa-regular fa-face-smile"></i>
                  </button>
                  <button type="button">
                    <i className="fa-solid fa-paperclip"></i>
                  </button>
                  <button type="button">
                    <i className="fa-solid fa-camera"></i>
                  </button>
                </div>
              </div>
              <button type="button" className="nav-btn">
                <i className="fa-solid fa-location-arrow"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
