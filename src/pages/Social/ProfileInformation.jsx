import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img2 from "../../assets/profile/2.png";
import { Link } from "react-router-dom";

export default function ProfileInformation() {
  return (
    <div className="profile">
      <div className="left-side">
        <div className="profile-info">
          <h3>المعلومات الشخصية</h3>
          <Link to={""} alt="edit">
            <i className="fa-regular fa-pen-to-square"></i>
          </Link>
        </div>
        <div className="profile-ing-name">
          <div className="img-cont">
            <LazyLoadImage src={img2}></LazyLoadImage>
          </div>
          <h2>أكرم باسل عبد الواحد</h2>
          <p>
            <i className="fa-solid fa-location-dot"></i> غزة - الرمال - ملعب فلسطين
          </p>
        </div>
        <h3 className="contact-head">معلومات التوصل</h3>
        <a href="mailto:purpos@gmail.com" className="mail-link">
          البريد الالكتروني: purpos@gmail.com
        </a>
        <p className="member-from">عضو منذ: 06/05/2023</p>
      </div>
    </div>
  );
}
