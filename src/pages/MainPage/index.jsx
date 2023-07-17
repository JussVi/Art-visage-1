import React, {useState} from 'react';
import FirstSection from "../../components/sections-of-main-page/first-section-of-page/first-section";
import SecondSection from "../../components/sections-of-main-page/second-section-of-page/second-section";
import ThirdSections from "../../components/sections-of-main-page/third-section-of-page/third-sections";
import CircularIndeterminate from "../../components/loader";
import FourthSection from "../../components/sections-of-main-page/fourth-section-of-page/forth-section";
import './style.css';


function MainPage() {

    const [isLoading, setIsLoading] = useState(false)

    return (
        <>
            { isLoading ?
                <CircularIndeterminate />
                :
                <div className='main-page-wrap'>
                    {/*<FirstSection />*/}
                    {/*<SecondSection />*/}
                    {/*<ThirdSections />*/}
                    <FourthSection />
                </div>
            }
        </>
    )
}

export default MainPage