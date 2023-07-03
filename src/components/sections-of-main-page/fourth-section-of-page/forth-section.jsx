import React, {useEffect, useState} from 'react';
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
    const [shugalsky, setShugalsky] = useState(false)
    const [zorova, setZorova] = useState(false)
    const [hasanova, setHasanova] = useState(false)
    const [doroganova, setDoroganova] = useState(false)
    const [sultanalieva, setSultanalieva] = useState(false)
    const [shakirova, setShakirova] = useState(false)

    useEffect(() => {
        if (isModalActive === false) {
            setShugalsky(false)
            setZorova(false)
            setHasanova(false)
            setDoroganova(false)
            setSultanalieva(false)
            setShakirova(false)
        } else  return
    }, [isModalActive] )


    const openShugalsky = () => {
        setIsModalActive(true)
        setShugalsky(true)
    }


    const openZorova = () => {
        setIsModalActive(true)
        setZorova(true)
    }

    const openHasanova = () => {
        setIsModalActive(true)
        setHasanova(true)
    }

    const openDoroganova = () => {
        setIsModalActive(true)
        setDoroganova(true)
    }

    const openSultanalieva = () => {
        setIsModalActive(true)
        setSultanalieva(true)
    }

    const openShakirova = () => {
        setIsModalActive(true)
        setShakirova(true)
    }

    return (
        <div className="info-block">
            <div className="container">
                <h2 className="info-header">
                   Мастеры
                </h2>
                <div className="main-block-masters-cards">
                    <div onClick={openShugalsky} className="photo-of-master">
                        <img className='photo-of-master-img' src={Anton} alt=""/>
                        <span className='name-of-master'>
                            Антон Шугальский
                        </span>
                    </div>
                    <div onClick={openZorova} className="photo-of-master">
                        <img className='photo-of-master-img' src={Zlata} alt=""/>
                        <div className='name-of-master'>
                            Злата Зорова
                        </div>
                    </div>
                    <div onClick={openHasanova} className="photo-of-master">
                        <img className='photo-of-master-img' src={Zalina} alt=""/>
                        <span className='name-of-master'>
                            Залина Хасанова
                        </span>
                    </div>
                    <div onClick={openDoroganova} className="photo-of-master">
                        <img className='photo-of-master-img' src={Olga} alt=""/>
                        <span className='name-of-master'>
                           Ольга Дороганова
                        </span>
                    </div>
                    <div onClick={openSultanalieva} className="photo-of-master">
                        <img className='photo-of-master-img' src={Aisuluu} alt=""/>
                        <span className='name-of-master'>
                            Айсулуу Султаналиева
                        </span>
                    </div>
                    <div onClick={openShakirova} className="photo-of-master">
                        <img className='photo-of-master-img' src={Damira} alt=""/>
                        <span className='name-of-master'>
                            Дамира Шакирова
                        </span>
                    </div>
                </div>

                                    {/*Модальные окна для мастеров*/}

                <ModalWindow
                    isModalActive={isModalActive}
                    setIsModalActive={setIsModalActive}>


                    <div className={ shugalsky ? 'Anton-Shugalsky active-modal' : 'Anton-Shugalsky'}>
                        <div className="photo-of-master-modal">
                            <img className='photo-of-master-img' src={Anton} alt=""/>
                        </div>
                    </div>


                    <div className={ zorova ? 'Zlata-Zorova active-modal' : 'Zlata-Zorova'}>
                        <div className="photo-of-master-modal">
                            <img className='photo-of-master-img' src={Zlata} alt=""/>
                        </div>
                    </div>

                    <div className={ hasanova ? 'Zalina-Hasanova active-modal' : 'Zalina-Hasanova'}>
                        <div className="photo-of-master-modal">
                            <img className='photo-of-master-img' src={Zalina} alt=""/>
                        </div>
                    </div>


                    <div className={ doroganova ? 'Doroganova-Olga active-modal' : 'Doroganova-Olga'}>
                        <div className="photo-of-master-modal">
                            <img className='photo-of-master-img' src={Olga} alt=""/>
                        </div>
                    </div>

                    <div className={ sultanalieva ? 'Sultanalieva-Aisuluu active-modal' : 'Sultanalieva-Aisuluu'}>
                        <div className="photo-of-master-modal">
                            <img className='photo-of-master-img' src={Aisuluu} alt=""/>
                        </div>
                    </div>

                    <div className={ shakirova ? 'Shakirova_Damira active-modal' : 'Shakirova_Damira'}>
                        <div className="photo-of-master-modal">
                            <img className='photo-of-master-img' src={Damira} alt=""/>
                        </div>
                    </div>



                </ModalWindow>

            </div>
        </div>
    );
};

export default FourthSection;