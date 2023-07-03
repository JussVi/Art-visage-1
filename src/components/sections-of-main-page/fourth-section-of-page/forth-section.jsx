import React, {useState} from 'react';
import Anton from '../../../visual/img/Anton.png'
import Zlata from '../../../visual/img/Zlata.png'
import Zalina from '../../../visual/img/Zalina.png'
import Olga from '../../../visual/img/Olga.png'
import Aisuluu from '../../../visual/img/Aisuluu.png'
import Damira from '../../../visual/img/Damira.png'
import ModalWindow from "../../modalWindow";
import './style.css'

const FourthSection = () => {

    const [isModalActive, setIsModalActive] = useState(false)

    return (
        <div className="info-block">
            <div className="container">
                <h2 className="info-header">
                   Мастеры
                </h2>
                <div className="main-block-masters-cards">
                    <div onClick={() => setIsModalActive(true)} className="photo-of-master">
                        <img className='photo-of-master-img' src={Anton} alt=""/>
                        <span className='name-of-master'>
                            Антон Шугальский
                        </span>
                    </div>
                    <div onClick={() => setIsModalActive(true)} className="photo-of-master">
                        <img className='photo-of-master-img' src={Zlata} alt=""/>
                        <div className='name-of-master'>
                            Злата Зорова
                        </div>
                    </div>
                    <div onClick={() => setIsModalActive(true)} className="photo-of-master">
                        <img className='photo-of-master-img' src={Zalina} alt=""/>
                        <span className='name-of-master'>
                            Залина Хасанова
                        </span>
                    </div>
                    <div onClick={() => setIsModalActive(true)} className="photo-of-master">
                        <img className='photo-of-master-img' src={Olga} alt=""/>
                        <span className='name-of-master'>
                           Ольга Дороганова
                        </span>
                    </div>
                    <div onClick={() => setIsModalActive(true)} className="photo-of-master">
                        <img className='photo-of-master-img' src={Aisuluu} alt=""/>
                        <span className='name-of-master'>
                            Айсулуу Султаналиева
                        </span>
                    </div>
                    <div onClick={() => setIsModalActive(true)} className="photo-of-master">
                        <img className='photo-of-master-img' src={Damira} alt=""/>
                        <span className='name-of-master'>
                            Дамира Шакирова
                        </span>
                    </div>
                </div>
                <ModalWindow
                    isModalActive={isModalActive}
                    setIsModalActive={setIsModalActive}>

                </ModalWindow>
            </div>
        </div>
    );
};

export default FourthSection;