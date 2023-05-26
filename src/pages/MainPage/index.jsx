import React from 'react';
import FirstSection from "../../components/sections-of-main-page/first-section";
import SecondSection from "../../components/sections-of-main-page/second-section";
import ThirdSections from "../../components/sections-of-main-page/third-sections";
import './style.css';

function MainPage() {

  return (
    <div className='main-page-wrap'>
      <div className='scroll-wrap'>
        <FirstSection />
      </div>
      <div className='scroll-wrap'>
        <SecondSection />
      </div>
      <div className='scroll-wrap'>
        <ThirdSections />
      </div>
      <div className='scroll-wrap'>
        <div className="footer"></div>
      </div>
    </div>
  )
}

export default MainPage
