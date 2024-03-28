import { TextField } from "@mui/material";
import React from "react";
import CoursesArr from "./../shared-components/CoursesArr";

export default function Subjects() {
  return (
    <div className="subjects">
      <div className="recommended-courses-title">
        <h2>المواد المتاحة</h2>
        <div className="subject-input-cont">
          <form action="">
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input placeholder="بحث" type="search" className="subject-input" />
          </form>
        </div>
      </div>
      <CoursesArr />
    </div>
  );
}
