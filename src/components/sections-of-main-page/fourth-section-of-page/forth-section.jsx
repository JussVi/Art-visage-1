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
                        <div className="modal-window-flex">

                            <div className="photo-of-master-modal">
                                <img className='photo-of-master-img' src={Anton} alt=""/>
                            </div>

                            <div className="description-of-master-modal-wrap">
                                <h3 className='description-of-master-modal-who-is'>Преподаватель по барберингу</h3>
                                <h2 className='description-of-master-modal-who-is'>АНТОН ШУГАЛЬСКИЙ</h2>
                                <p className='description-of-master-modal'>Опытный преподаватель и профессиональный барбер. Его карьера началась в Москве, где он получил первые знания и опыт в этой области.</p>
                                <p className='description-of-master-modal'>Продолжал совершенствоваться, проходя множество курсов и семинаров по барберингу в Бишкеке и других городах.</p>
                                <p className='description-of-master-modal'>В 2022 году прошел курсы по повышению квалификации «men’s forge» и «hairdressing education» от известного профессионального барбера России - Антона Ланцкова. Это позволило ему расширить свои знания и навыки в области барберинга еще больше, а также получить новые техники и приемы работы с клиентами.</p>
                                <p className='description-of-master-modal'>Именно поэтому вы научитесь создавать самые красивые и стильные образы для своих клиентов, следить за последними тенденциями в мире барберинга и станете востребованными профессионалом в области мужских стрижек.</p>
                            </div>

                        </div>

                    </div>

                    <div className={ zorova ? 'Zlata-Zorova active-modal' : 'Zlata-Zorova'}>

                        <div className="modal-window-flex">

                            <div className="photo-of-master-modal">
                                <img className='photo-of-master-img' src={Zlata} alt=""/>
                            </div>

                            <div className="description-of-master-modal-wrap">
                                <h3 className='description-of-master-modal-who-is'>Ведущий преподаватель парикмахерского искусства</h3>
                                <h2 className='description-of-master-modal-who-is'>ЗЛАТА ЗОРОВА</h2>
                                <p className='description-of-master-modal'>В прошлом, выпусница нашей же Академии «ARTVISAGE».</p>
                                <p className='description-of-master-modal'>Начала свой путь обучения парикмахерскому искусству в нашей студии и поистине влюбилась в своё дело.</p>
                                <p className='description-of-master-modal'>Обучалась у Дорогановой Ольги Сергеевны.</p>
                                <p className='description-of-master-modal'>Постоянно повышает квалификацию, посещая различные курсы, семинары и мастер-классы у таких спикеров, как:
                                    Наталья Мащенко “Геометрия формы”
                                    Анна Мокрицкая “Причёски и укладки”
                                    Антон Ланцков “Hairdressing Education”
                                    А также, семинары по колористике от таких компаний, как:
                                    Estel, Selective, OLLIN и многие другие.</p>
                            </div>

                        </div>

                    </div>


                    <div className={ hasanova ? 'Zalina-Hasanova active-modal' : 'Zalina-Hasanova'}>
                        <div className="modal-window-flex">

                            <div className="photo-of-master-modal">
                                <img className='photo-of-master-img' src={Zalina} alt=""/>
                            </div>

                            <div className="description-of-master-modal-wrap">
                                <h3 className='description-of-master-modal-who-is'>Специалист и профессиональный преподаватель по массажу</h3>
                                <h2 className='description-of-master-modal-who-is'>ЗАЛИНА ХАСАНОВА</h2>
                                <p className='description-of-master-modal'>Обладает более чем 15-летним опытом работы в этой области и является настоящим мастером своего дела.</p>
                                <p className='description-of-master-modal'>Проходила обучение по массажу в 2008-2009 годах, в городе Райнфельден-Баден, Германия.</p>
                                <p className='description-of-master-modal'>С 2011 по 2013 годы повышала свою квалификацию в Австрии, город Вена.</p>
                                <p className='description-of-master-modal'>Также, прошла курс по повышению квалификации в 2020 году, в Академии массажа в Бишкеке.</p>
                                <p className='description-of-master-modal'>Залина является массажистом-терапевтом по таким направлениям как: скульптурный, лечебный, детский массаж и другие.</p>
                                <p className='description-of-master-modal'>Работа и обучение в лучших массажных салонах разных стран, позволили ей получить богатый опыт и накопить уникальные знания в области массажа, которыми она с радостью поделиться с вами и поможет достигнуть успеха в области массажа.</p>
                            </div>

                        </div>
                    </div>


                    <div className={ doroganova ? 'Doroganova-Olga active-modal' : 'Doroganova-Olga'}>
                        <div className="modal-window-flex">

                            <div className="photo-of-master-modal">
                                <img className='photo-of-master-img' src={Olga} alt=""/>
                            </div>

                            <div className="description-of-master-modal-wrap">
                                <h3 className='description-of-master-modal-who-is'>Арт-Директор и ведущий преподаватель парикмахерского искусства</h3>
                                <h2 className='description-of-master-modal-who-is'>ОЛЬГА ДОРОГАНОВА</h2>
                                <p className='description-of-master-modal'>В прошлом, выпускница нашей же Академии «ARTVISAGE».</p>
                                <p className='description-of-master-modal'>Опыт работы преподавателем – 13 лет.</p>
                                <p className='description-of-master-modal'>Выпустила более 10 000 мастеров, ставших успешными профессионалами не только в Кыргызстане, но и за его пределами.</p>
                                <p className='description-of-master-modal'>Постоянно повышает квалификацию у ведущих спикеров парикмахерского искусства, таких как: Наталья Мащенко “Геометрия формы”. А также, индивидуальный курс для преподавателей, “Геометрия формы и техники стрижки”, с правом преподавания.
                                    Вадим Давидюк “Новый уровень цвета”
                                    Алексей Гаркуша “Цвет. Форма. Объём”.
                                    А также, Роман Коваленков,
                                    Николай Генералов и многие другие.</p>
                            </div>

                        </div>
                    </div>

                    <div className={ sultanalieva ? 'Sultanalieva-Aisuluu active-modal' : 'Sultanalieva-Aisuluu'}>
                        <div className="modal-window-flex">

                            <div className="photo-of-master-modal">
                                <img className='photo-of-master-img' src={Aisuluu} alt=""/>
                            </div>

                            <div className="description-of-master-modal-wrap">
                                <h3 className='description-of-master-modal-who-is'>Преподаватель по визажу и наращиванию ресниц</h3>
                                <h2 className='description-of-master-modal-who-is'>АЙСУЛУУ СУЛТАНАЛИЕВА</h2>
                                <p className='description-of-master-modal'>Талантливый визажист и мастер наращивания ресниц, обладающий более чем 8-летним опытом работы в индустрии красоты.</p>
                                <p className='description-of-master-modal'>Айсулуу не только прошла мастер-классы у мировых визажистов, таких как Виктория Станевич, Яна Шей, Сергей Турчанинов и Кристина Рей, но и продолжает повышать свою квалификацию.</p>
                                <p className='description-of-master-modal'>В 2022 году Айсулу успешно прошла обучение в престижной Санкт-Петербургской школе "FaceTime" под руководством известного визажиста Софии Бабуриной.</p>
                                <p className='description-of-master-modal'>Ее профессионализм и творческий подход к работе позволяют ей создавать неповторимые образы и подчеркивать индивидуальность каждого клиента.</p>
                            </div>

                        </div>
                    </div>

                    <div className={ shakirova ? 'Shakirova_Damira active-modal' : 'Shakirova_Damira'}>
                        <div className="modal-window-flex">

                            <div className="photo-of-master-modal">
                                <img className='photo-of-master-img' src={Damira} alt=""/>
                            </div>

                            <div className="description-of-master-modal-wrap">
                                <h3 className='description-of-master-modal-who-is'>Администратор студии и опытный преподаватель курса «Ногтевой сервис»</h3>
                                <h2 className='description-of-master-modal-who-is'>Шакирова Дамира</h2>
                                <p className='description-of-master-modal'>Начала свой путь в этой сфере в 2016 году в Москве, и с тех пор не перестает совершенствоваться и повышать свою квалификацию.</p>
                                <p className='description-of-master-modal'>За 7 лет работы в ногтевом сервисе прошла можество курсов и тренингов.
                                    В 2018 году - учебная студия «Мейкин», 2020 год - обучающая академия «ArtVisage», 2021 год - курсы одной из самых лучших преподавателей Бишкека Анны Логай.</p>
                                <p className='description-of-master-modal'>Благодаря огромному опыту и багажу знаний преподавателя, вы не только обретёте востребованную профессию, но и сможете создавать на ногтях настоящие произведения искусства.</p>
                            </div>

                        </div>
                    </div>



                </ModalWindow>

            </div>
        </div>
    );
};

export default FourthSection;