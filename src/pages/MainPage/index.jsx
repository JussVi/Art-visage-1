import React from 'react';
import {Fullpage, FullPageSections, FullpageSection} from '@ap.cx/react-fullpage'
import FirstSection from "../../components/sections-of-main-page/first-section";
import SecondSection from "../../components/sections-of-main-page/second-section";
import ThirdSections from "../../components/sections-of-main-page/third-sections";
import './style.css';

function MainPage() {

  return (
    <div className='main-page-wrap'>
    <Fullpage>
      <FullPageSections>
        <FullpageSection>
          <FirstSection />
        </FullpageSection>
        <FullpageSection>
          <SecondSection/>
        </FullpageSection>
        <FullpageSection>
          <ThirdSections/>
        </FullpageSection>
      </FullPageSections>
      <div className="footer">
      </div>
    </Fullpage>
    </div>
  )
}

export default MainPage
