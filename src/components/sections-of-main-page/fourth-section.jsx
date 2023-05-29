import React, {useEffect, useState} from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function FourthSection(props) {

    const { data } = props

  return (
      <div style={{background: "center"}}>
          <div className="container">
              <motion.div
                  initial={{y: -100, opacity: 0}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{ ease: "easeOut", duration: 2 }}
                  className='main-block-masters-cards'>
                  <Swiper
                      loop={true}
                      pagination={true}
                      navigation={true}
                      modules={[Navigation, Pagination]}
                      // autoplay={{
                      //     delay: 3000,
                      //     disableOnInteraction: false,
                      // }}
                      className="mySwiper"
                  >
                      {data.map((item, idx) => {
                          return (
                              <SwiperSlide key={idx}>
                                  <div className='main-block-one-master-swipe photo-of-master'>
                                      <img className='photo-of-master' src={item.attributes.image_link} alt="master-photo"/>
                                  </div>
                                  <div className='main-block-one-master-swipe'>
                                      {item.attributes.name}
                                  </div>
                                  <div className='main-block-one-master-swipe'>
                                      {item.attributes.job}
                                  </div>
                                  <div className='main-block-one-master-swipe for-padding-to-bottom'>
                                      {item.attributes.description}
                                  </div>
                              </SwiperSlide>
                          )
                      })}


                  </Swiper>
              </motion.div>
          </div>
      </div>
    )
}

export default FourthSection