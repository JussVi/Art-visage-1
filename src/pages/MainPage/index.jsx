import React, {useState} from 'react';
import FirstSection from "../../components/sections-of-main-page/first-section";
import SecondSection from "../../components/sections-of-main-page/second-section";
import ThirdSections from "../../components/sections-of-main-page/third-sections";
import CircularIndeterminate from "../../components/loader";
import FourthSection from "../../components/sections-of-main-page/forth-section";
import './style.css';


function MainPage() {

    const [isLoading, setIsLoading] = useState(false)

  return (
        <>
            { isLoading ?
                <CircularIndeterminate />
                :
                <div className='main-page-wrap'>
                        <FirstSection />
                        <SecondSection />
                        <ThirdSections />
                        <FourthSection />
                  <div className="footer"></div>

                </div>
            }
        </>
  )
}

export default MainPage
