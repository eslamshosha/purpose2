import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img8 from "../../../assets/profile/10.png";
import mem2 from "../../../assets/Main/team/2.png";
import { Link } from "react-router-dom";

export default function CompetitoonsProfil() {
  return (
    <div className="profile">
      <div className="left-side">
        <div className="profile-info">
          {/* <h3>المعلومات الشخصية</h3> */}
          <Link to={""} alt="edit">
            <i className="fa-regular fa-pen-to-square"></i>
          </Link>
        </div>
        <div className="profile-ing-name">
          <div className="img-cont">
            <LazyLoadImage src={mem2}></LazyLoadImage>
          </div>
          <h2>أكرم باسل عبد الواحد</h2>
          <p>
            <i className="fa-solid fa-location-dot"></i> غزة - الرمال - ملعب فلسطين
          </p>
        </div>
        <div className="compt-img">
          <LazyLoadImage src={img8}></LazyLoadImage>
        </div>
        <div className="compt-total">
          لقد اشتركت في <span>12</span> مسابقة
        </div>
      </div>
    </div>
  );
}
