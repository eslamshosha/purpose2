import React from "react";
import img from "../../assets/Main/team/1.png";
import img2 from "../../assets/Main/team/2.png";
import img3 from "../../assets/Main/team/3.png";
import img4 from "../../assets/Main/team/4.png";
import img5 from "../../assets/Main/team/5.png";
import img6 from "../../assets/Main/team/6.png";
import img7 from "../../assets/Main/team/7.png";
import img8 from "../../assets/Main/team/8.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export default function MessegesFriends() {
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
  return (
    <div className="message-left-side">
      <div className="messeges-friends">
        <h2>الرسائل</h2>
        <div className="search">
          <form action="">
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input type="text" placeholder="بحث عن الرسائل" />
          </form>
        </div>
        {friendsMessages.map((messege) => (
          <ul>
            <li key={messege.id}>
              <Link to={messege.id}>
                <div className="friends-messeges">
                  <div className="img-cont">
                    <LazyLoadImage src={messege.img}></LazyLoadImage>
                  </div>
                  <div className="all-text">
                    <div className="right">
                      <h4>{messege.username}</h4>
                      <p>{messege.lastMessege}</p>
                    </div>
                    <div className="left">
                      <span>{messege.lastMessegeOn}</span>
                      <span
                        className={
                          messege.status == "seen" ? "" : "notification"
                        }
                      >
                        {messege.status == "seen" ? "seen" : messege.status}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
