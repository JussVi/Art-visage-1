import React from 'react';
import Main_Logo from "../../visual/img/woman-s-face-is-made-up-geometric-shapes-cyberpunk-colorful-fractalism-cubism_834088-1-_1_-removebg-preview.png";

const FirstSection = () => {
  return (
   <div style={{background: 'black', height: '100vh'}}>
     <div className="container">
       <div className="main-block">
         <div className="main-block-text-info">
           <h1 className='main-block-header'>
             Lorem ipsum dolor sit amet.
           </h1>
           <p className="main-block-subheader">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, unde cum nemo sit quaerat vel!
           </p>
         </div>
         {/* <span className='main-block-img'></span> */}
         <img src={Main_Logo} alt="Main Logo" className='main-block-img'/>
       </div>
     </div>
   </div>
  );
};

export default FirstSection;