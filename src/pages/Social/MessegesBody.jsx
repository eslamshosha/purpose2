import React from "react";
import img from "../../assets/Main/team/1.png";
import img2 from "../../assets/Main/team/2.png";
import img3 from "../../assets/Main/team/3.png";
import img4 from "../../assets/Main/team/4.png";
import img5 from "../../assets/Main/team/5.png";
import img6 from "../../assets/Main/team/6.png";
import img7 from "../../assets/Main/team/7.png";
import img8 from "../../assets/Main/team/8.png";
import { useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function MessegesBody() {
  let friendsMessages = [
    {
      id: "1",
      img: img,
      username: "رنا محمد",
      lastMessege: "يكتب الان...",
      lastMessegeOn: "9:36",
      online: true,
      status: "2",
    },
    {
      id: "2",
      img: img3,
      username: "رنا محمد",
      lastMessege: "مرحبا",
      lastMessegeOn: "9:36",
      online: false,
      status: "seen",
    },
    {
      id: "3",
      img: img2,
      username: "أحمد محمد",
      lastMessege: "مرحبا",
      lastMessegeOn: "9:36",
      online: false,
      status: "seen",
    },
    {
      id: "4",
      img: img4,
      username: "أحمد محمد",
      lastMessege: "مرحبا",
      lastMessegeOn: "9:36",
      online: false,
      status: "seen",
    },
    {
      id: "5",
      img: img5,
      username: "رنا محمد",
      lastMessege: "مرحبا",
      lastMessegeOn: "9:36",
      online: false,
      status: "seen",
    },
    {
      id: "6",
      img: img4,
      username: "أحمد محمد",
      lastMessege: "مرحبا",
      lastMessegeOn: "9:36",
      online: false,
      status: "seen",
    },
    {
      id: "7",
      img: img5,
      username: "رنا محمد",
      lastMessege: "مرحبا",
      lastMessegeOn: "9:36",
      online: false,
      status: "seen",
    },
    {
      id: "8",
      img: img6,
      username: "رنا محمد",
      lastMessege: "مرحبا",
      lastMessegeOn: "9:36",
      online: false,
      status: "seen",
    },
    {
      id: "9",
      img: img7,
      username: "أحمد محمد",
      lastMessege: "مرحبا",
      lastMessegeOn: "9:36",
      online: false,
      status: "seen",
    },
    {
      id: "10",
      img: img,
      username: "رنا محمد",
      lastMessege: "مرحبا",
      lastMessegeOn: "9:36",
      online: false,
      status: "seen",
    },
    {
      id: "11",
      img: img8,
      username: "أحمد محمد",
      lastMessege: "مرحبا",
      lastMessegeOn: "9:36",
      online: false,
      status: "seen",
    },
    {
      id: "12",
      img: img4,
      username: "أحمد محمد",
      lastMessege: "مرحبا",
      lastMessegeOn: "9:36",
      online: false,
      status: "seen",
    },
    {
      id: "13",
      img: img5,
      username: "رنا محمد",
      lastMessege: "مرحبا",
      lastMessegeOn: "9:36",
      online: false,
      status: "seen",
    },
  ];
  let chat = [
    {
      id: "1",
      msgTime: "10:30",
      msg: "مرحبا، السلام عليكم ورحمة الله وبركاته مرحبا، السلام عليكم ورحمة الله وبركاته ",
    },
    {
      id: "2",
      msgTime: "10:30",
      msg: "مرحبا، السلام عليكم ورحمة الله وبركاته",
    },
    {
      id: "3",
      msgTime: "10:30",
      msg: "مرحبا، السلام عليكم ورحمة الله وبركاته",
    },
    {
      id: "4",
      msgTime: "10:30",
      msg: "مرحبا، السلام عليكم ورحمة الله وبركاته",
    },
    {
      id: "5",
      msgTime: "10:30",
      msg: "مرحبا، السلام عليكم ورحمة الله وبركاته",
    },
    {
      id: "6",
      msgTime: "10:30",
      msg: "مرحبا، السلام عليكم ورحمة الله وبركاته",
    },
  ];
  const location = useLocation();
  let id = location.pathname.slice(15);
  id = id - 1;
  return (
    <div className="message-right-side">
      <div className="messeg-body-cont">
        <div className="head">
          <div className="contact-info">
            <div className="img-cont">
              <LazyLoadImage src={friendsMessages[id].img}></LazyLoadImage>
            </div>
            <h3>{friendsMessages[id].username}</h3>
          </div>
          <div></div>
        </div>
        <div className="chat-cont">
          <div className="messages-ccont">
            {chat.map((message) => (
              <div key={message.id}>
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
