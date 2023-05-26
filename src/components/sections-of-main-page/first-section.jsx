import React from 'react';
import {motion} from "framer-motion";
import Main_Logo from "../../visual/img/woman-s-face-is-made-up-geometric-shapes-cyberpunk-colorful-fractalism-cubism_834088-1-_1_-removebg-preview.png";

const FirstSection = () => {
  return (
   <div style={{background: 'black', height: '100vh'}}>
     <div className="container">
       <div className="main-block">
         <motion.div
           initial={{x: -150, opacity: 0}}
           animate={{x: 0, opacity: 1}}
           transition={{ ease: "easeOut", duration: 1.5 }}
           className="main-block-text-info">
           <h1 className='main-block-header'>
            Студия Арт Визаж
           </h1>
           <p className="main-block-subheader">
            Школа парикмахерского искусства
           </p>
           <a href="#" className="main-block-button">
            Записаться
           </a>
         </motion.div>

         <motion.div
           initial={{x: 150, opacity: 0}}
           animate={{x: 0, opacity: 1}}
           transition={{ ease: "easeOut", duration: 1.5 }}
         >
           <img src={Main_Logo} alt="Main Logo" className='main-block-img'/>
         </motion.div>
       </div>
     </div>
   </div>
  );
};

export default FirstSection;