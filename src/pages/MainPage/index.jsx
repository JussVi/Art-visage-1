import React from 'react';
import FirstSection from "../../components/sections-of-main-page/first-section";
import SecondSection from "../../components/sections-of-main-page/second-section";
import ThirdSections from "../../components/sections-of-main-page/third-sections";
import './style.css';


function MainPage() {


  return (
    <div className='main-page-wrap' >

          <FirstSection />

          <SecondSection />

          <ThirdSections />

      <div className="footer">
      </div>

    </div>
  )
}

export default MainPage
