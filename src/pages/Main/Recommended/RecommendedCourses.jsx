import React from "react";
import CoursesArr from "../../shared-components/CoursesArr";
import { TextField } from "@mui/material";

import Finished from "./Finished";
import RecommendedLeftSide from "./RecommendedLeftSide";

export default function RecommendedCourses() {
  return (
    <div className="recom-container">
      <div className="recom-right-side">
        <Finished />

        <div className="recommended-courses-title">
          <h2>الكورسات المقترحة</h2>
          <div className="subject-input-cont">
            <form action="">
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <input
                placeholder="بحث"
                type="search"
                className="subject-input"
              />
            </form>
          </div>
        </div>
        <CoursesArr></CoursesArr>
      </div>
      <div className="recom-left-side">
        <RecommendedLeftSide></RecommendedLeftSide>
      </div>
    </div>
  );
}
