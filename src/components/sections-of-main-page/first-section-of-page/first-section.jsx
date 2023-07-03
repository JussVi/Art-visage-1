import React from 'react';
import './style.css';
import { motion } from "framer-motion";
import Main_Logo from "../../../visual/img/woman-s-face-is-made-up-geometric-shapes-cyberpunk-colorful-fractalism-cubism_834088-1-_1_-removebg-preview.png";


const FirstSection = () => {


  return (
   <div style={{background: 'black', height: '100vh'}}>
     <div className="container">
         <div className="main-block">
           <motion.div
             initial={{x: -20, opacity: 0}}
             whileInView={{x: 0, opacity: 1}}
             transition={{ ease: "easeInOut", duration: 0.5 }}
             viewport={{ once: true }}
             className="main-block-text-info">
             <h1 className='main-block-header'>
               Студия Арт Визаж
             </h1>
             <div className="main-block-subheader-wrap">
               <p className="main-block-subheader">
                 Ш
               </p>
               <p className="main-block-subheader">
                 к
               </p>
               <p className="main-block-subheader">
                 о
               </p>
               <p className="main-block-subheader">
                 л
               </p>
               <p className="main-block-subheader subheader-distance">
                 а
               </p>
               <p className="main-block-subheader">
                 п
               </p>
               <p className="main-block-subheader">
                 а
               </p>
               <p className="main-block-subheader">
                 р
               </p>
               <p className="main-block-subheader">
                 и
               </p>
               <p className="main-block-subheader">
                 к
               </p>
               <p className="main-block-subheader">
                 м
               </p>
               <p className="main-block-subheader">
                 а
               </p>
               <p className="main-block-subheader">
                 х
               </p>
               <p className="main-block-subheader">
                 е
               </p>
               <p className="main-block-subheader">
                 р
               </p>
               <p className="main-block-subheader">
                 с
               </p>
               <p className="main-block-subheader">
                 к
               </p>
               <p className="main-block-subheader">
                 о
               </p>
               <p className="main-block-subheader">
                 г
               </p>
               <p className="main-block-subheader subheader-distance">
                 о
               </p>
               <p className="main-block-subheader">
                 и
               </p>
               <p className="main-block-subheader">
                 с
               </p>
               <p className="main-block-subheader">
                 к
               </p>
               <p className="main-block-subheader">
                 у
               </p>
               <p className="main-block-subheader">
                 с
               </p>
               <p className="main-block-subheader">
                 с
               </p>
               <p className="main-block-subheader">
                 т
               </p>
               <p className="main-block-subheader">
                 в
               </p>
               <p className="main-block-subheader">
                 а
               </p>
             </div>
             <motion.a
               href="#"
               className="main-block-button"
               whileHover={{ scale: 1.2 }}
               whileTap={{ scale: 0.9 }}
               transition={{ type: "spring", stiffness: 400, damping: 17 }}
             >
               Записаться
             </motion.a>
           </motion.div>
           <div className="main-block-img-wrap">
            <span className="main-block-img"></span>
             <span className='main-block-bg-img'></span>
           </div>
         </div>
     </div>
   </div>
  );
};

export default FirstSection;