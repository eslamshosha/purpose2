import React from "react";
import SideBar from "./../shared-components/SideBar";
import { Outlet } from "react-router-dom";
import MainNavBar from "./MainNavBar";
import Footer from "./Footer";
import SecondSideBar from "./SecondSideBar";

export default function Main() {
  function closeSideBar() {
    document.getElementById('all').classList.remove('all-lagre');
    document.getElementById('pageContent').style.transform = 'translateX(0)';
    document.getElementById('side-bar').style.insetInlineStart = '-272px';
    document.getElementById('side-bar').classList.remove('side-openes');
    document.getElementById('overlay').style.display = "none"
    document.getElementById("secondNavBar").style.insetInlineEnd = "-350px";
    document.getElementById("profile-notif").style.display = "flex";
    document.getElementById("open-second").style.display = "none";
  }
  return (
    <div>
      <div className="main-comp">
        <div className="all" id="all">
          <SideBar />
          <div className="pagecontent" id="pageContent">
            <MainNavBar></MainNavBar>
            <div className="view-port">
              <Outlet></Outlet>
            </div>
          </div>
          <SecondSideBar></SecondSideBar>
        </div>
        <div className="overlay" id="overlay" onClick={closeSideBar}></div>
      </div>
      <Footer></Footer>
    </div>
  );
}
