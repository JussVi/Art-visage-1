import React, {useEffect, useState} from 'react';
import FirstSection from "../../components/sections-of-main-page/first-section";
import SecondSection from "../../components/sections-of-main-page/second-section";
import ThirdSections from "../../components/sections-of-main-page/third-sections";
import FourthSection from "../../components/sections-of-main-page/fourth-section";
import axios from "axios";
import './style.css';
import CircularIndeterminate from "../../components/loader";
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


function MainPage() {

    // const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    //
    // useEffect(() => {
    //     fetchData()
    // }, [])
    //
    // const fetchData = async () => {
    //     setIsLoading(true)
    //     try {
    //         const response = await axios.get('http://localhost:1337/api/masters')
    //         setData(response.data.data)
    //     } catch (error) {
    //         alert('error')
    //     } finally {
    //         setIsLoading(false)
    //     }
    // }

  return (
        <>
            { isLoading ?
                <CircularIndeterminate />
                :
                <div className='main-page-wrap'>
                        <Header />
                        <FirstSection />
                        <SecondSection />
                        <ThirdSections />
                        {/*<FourthSection*/}
                        {/*    data={data}*/}
                        {/*/>*/}
                        <Footer />

                        <div className="footer"></div>

                </div>
            }
        </>
  )
}

export default MainPage
