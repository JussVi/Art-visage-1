import React, {useEffect, useState} from 'react';
import FirstSection from "../../components/sections-of-main-page/first-section";
import SecondSection from "../../components/sections-of-main-page/second-section";
import ThirdSections from "../../components/sections-of-main-page/third-sections";
import FourthSection from "../../components/sections-of-main-page/fourth-section";
import axios from "axios";
import './style.css';
import CircularIndeterminate from "../../components/loader";


function MainPage() {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get('http://localhost:1337/api/masters')
            setData(response.data.data)
        } catch (error) {
            alert('error')
        } finally {
            setIsLoading(false)
        }
    }

  return (
        <>
            { isLoading ?
                <CircularIndeterminate />
                :
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
                        <FourthSection
                            data={data}
                        />
                    </div>
                    <div className='scroll-wrap'>

                        <div className="footer"></div>
                    </div>

                </div>
            }
        </>
  )
}

export default MainPage
