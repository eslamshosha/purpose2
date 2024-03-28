import React from 'react'
import MainCaptions from './MainCaptions';
import ImageSide from './ImageSide';

export default function MainPage() {
  return (
    <div className="home-container">
      <div className="container-fluid">
        <div className="row home-layout">
          <MainCaptions></MainCaptions>
          <ImageSide></ImageSide>
        </div>
      </div>
    </div>
  )
}
