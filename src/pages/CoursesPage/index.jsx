import React from 'react';
import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import './style.css';

const CoursesPage = () => {
  return (
    <div className="container"  id='nav-item-main'>
        <div className="courses-block">
            <Link to="nav-item-main" smooth={true} duration={800} >
                <motion.div 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="courses-up-arrow-wrap">
                    <span className="courses-up-arrow"></span>
                </motion.div>
            </Link>
            <div className="courses-nav-menu">
                <p className="courses-nav-menu-item">
                    <Link to="nav-item-1" smooth={true} duration={800} >
                        Парикмахерское искусство
                    </Link>
                </p>
                <p className="courses-nav-menu-item">
                    <Link to="nav-item-2" smooth={true} duration={800} >
                        Эстетика лица
                    </Link>
                </p>
                <p className="courses-nav-menu-item">
                    <Link to="nav-item-3" smooth={true} duration={800} >
                        Ногтевой сервис
                    </Link>
                </p>
                <p className="courses-nav-menu-item">
                    <Link to="nav-item-4" smooth={true} duration={800} >
                        Массаж
                    </Link>
                </p>
                <p className="courses-nav-menu-item">
                    <Link to="nav-item-5" smooth={true} duration={800} >
                        Прочее
                    </Link>
                </p>
            </div>

            <h2 id='nav-item-1' className="courses-header">
                Парикмахерское искусство
            </h2>
            <div className="courses-card-block">
                <div className="courses-card-wrap">
                    <span className="courses-card-img"></span>
                    <p className="courses-card-text">ИНТЕНСИВНЫЙ КУРС</p>
                </div>
                <div className="courses-card-wrap">
                    <span className="courses-card-img"></span>
                    <p className="courses-card-text">БАЗОВЫЙ КУРС КОЛОРИСТИКИ</p>
                </div>
                <div className="courses-card-wrap">
                    <span className="courses-card-img"></span>
                    <p className="courses-card-text">ПАРИКМАХЕР УНИВЕРСАЛ</p>
                </div>
            </div>

            
            <h2 id='nav-item-2' className="courses-header">
                Эстетика лица
            </h2>
            <div className="courses-card-block-fwrap">
                <div className="courses-card-wrap">
                    <span className="courses-card-img"></span>
                    <p className="courses-card-text">ВИЗАЖИСТ</p>
                </div>
                <div className="courses-card-wrap">
                    <span className="courses-card-img"></span>
                    <p className="courses-card-text">НАРАЩИВАНИЕ РЕСНИЦ</p>
                </div>
                <div className="courses-card-wrap">
                    <span className="courses-card-img"></span>
                    <p className="courses-card-text">ЛАМИНИРОВАНИЕ РЕСНИЦ И БРОВЕЙ</p>
                </div>
                <div className="courses-card-wrap">
                    <span className="courses-card-img"></span>
                    <p className="courses-card-text">ПЕРМАНЕНТНЫЙ МАКИЯЖ</p>
                </div>
                <div className="courses-card-wrap">
                    <span className="courses-card-img"></span>
                    <p className="courses-card-text">АРХИТЕКТУРА БРОВЕЙ</p>
                </div>
                <div className="courses-card-wrap">
                    <span className="courses-card-img"></span>
                    <p className="courses-card-text">САМ СЕБЕ ВИЗАЖИСТ</p>
                </div>
            </div>

            <h2 id='nav-item-3' className="courses-header">
                Ногтевой сервис
            </h2>
            <div className="courses-card-block">
                <div className="courses-card-wrap">
                    <span className="courses-card-img"></span>
                    <p className="courses-card-text">МАНИКЮР</p>
                </div>
                <div className="courses-card-wrap">
                    <span className="courses-card-img"></span>
                    <p className="courses-card-text">ПЕДИКЮР</p>
                </div>
                <div className="courses-card-wrap">
                    <span className="courses-card-img"></span>
                    <p className="courses-card-text">МОДЕЛИРОВАНИЕ НОГТЕЙ</p>
                </div>
            </div>

            <h2 id='nav-item-4' className="courses-header">
                Массаж
            </h2>
            <div className="courses-card-block">
                <div className="courses-card-wrap">
                    <span className="courses-card-img"></span>
                    <p className="courses-card-text">СКУЛЬПТУРНЫЙ МАССАЖ ЛИЦА</p>
                </div>
                <div className="courses-card-wrap">
                    <span className="courses-card-img"></span>
                    <p className="courses-card-text">БАЗОВЫЙ КУРС МАССАЖА</p>
                </div>
                <div className="courses-card-wrap">
                    <span className="courses-card-img"></span>
                    <p className="courses-card-text">ДЕТСКИЙ МАССАЖ</p>
                </div>
            </div>

            <h2 id='nav-item-5' className="courses-header">
                Прочее
            </h2>
            <div className="courses-card-block">
                <div className="courses-card-wrap">
                    <span className="courses-card-img"></span>
                    <p className="courses-card-text">ТЕХНИКИ СОЗДАНИЯ СОВРЕМЕННЫХ ПРИЧЁСОК</p>
                </div>
                <div className="courses-card-wrap">
                    <span className="courses-card-img"></span>
                    <p className="courses-card-text">БАРБЕР</p>
                </div>
                <div className="courses-card-wrap">
                    <span className="courses-card-img"></span>
                    <p className="courses-card-text">ШУГАРИНГ</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CoursesPage;