import React from 'react';
import Anton from '../../visual/img/Anton.png'
import Zlata from '../../visual/img/Zlata.png'
import Zalina from '../../visual/img/Zalina.png'
import Olga from '../../visual/img/Olga.png'
import Aisuluu from '../../visual/img/Aisuluu.png'
import Damira from '../../visual/img/Damira.png'
import '../../pages/MainPage/style.css'

const FourthSection = () => {
    return (
        <div className="info-block">
            <div className="container">
                <h2 className="info-header">
                   Мастеры
                </h2>
                <div className="main-block-masters-cards">
                    <div className="photo-of-master">
                        <img className='photo-of-master-img' src={Anton} alt=""/>
                        <span className='card-price'>
                            Антон Шугальский
                        </span>
                    </div>
                    <div className="photo-of-master">
                        <img className='photo-of-master-img' src={Zlata} alt=""/>
                        <div className='card-price'>
                            Злата Зорова
                        </div>
                    </div>
                    <div className="photo-of-master">
                        <img className='photo-of-master-img' src={Zalina} alt=""/>
                        <span className='card-price'>
                            Залина Хасанова
                        </span>
                    </div>
                    <div className="photo-of-master">
                        <img className='photo-of-master-img' src={Olga} alt=""/>
                        <span className='card-price'>
                           Ольга Дороганова
                        </span>
                    </div>
                    <div className="photo-of-master">
                        <img className='photo-of-master-img' src={Aisuluu} alt=""/>
                        <span className='card-price'>
                            Айсулуу Султаналиева
                        </span>
                    </div>
                    <div className="photo-of-master">
                        <img className='photo-of-master-img' src={Damira} alt=""/>
                        <span className='card-price'>
                            Дамира Шакирова
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourthSection;