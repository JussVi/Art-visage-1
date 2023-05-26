import React from 'react';
import VideoBackground from "../video-background";

const SecondSection = () => {
  return (
      <div className="container">
        <div className="card-block">
          <div className="card-block-left">
            <VideoBackground />
            <div className="card-wrap">
              <div className="card-text-wrap">
                <h4 className="card-header">
                  Курс
                </h4>
                <p className="card-subheader">
                  БАРБЕР
                </p>
                <p className="card-courses">
                  13 занятий
                </p>
                <p className="card-price">
                  15 000 сом
                </p>
              </div>
              <span className="card-img-block-first">
              </span>
            </div>
            <div className="card-wrap">
              <div className="card-text-wrap">
                <h4 className="card-header">
                  Базовый курс
                </h4>
                <p className="card-subheader">
                  МАССАЖА
                </p>
                <p className="card-courses">
                  10 занятий
                </p>
                <p className="card-price">
                  8 000 сом
                </p>
              </div>
              <span className="card-img-block-second">
              </span>
            </div>
          </div>
          <div className="card-block-right">
            <div className="card-wrap">
              <div className="card-text-wrap">
                <h4 className="card-header">
                  Курс
                </h4>
                <p className="card-subheader">
                  ПАРИКМАХЕР УНИВЕРСАЛ
                </p>
                <p className="card-courses">
                  26 занятий
                </p>
                <p className="card-price">
                  20 000 сом
                </p>
              </div>
              <span className="card-img-block-third">
              </span>
            </div>
            <div className="card-wrap">
              <div className="card-text-wrap">
                <h4 className="card-header">
                  Курс
                </h4>
                <p className="card-subheader">
                  ВИЗАЖИСТ
                </p>
                <p className="card-courses">
                  10 занятий
                </p>
                <p className="card-price">
                  10 000 сом
                </p>
              </div>
              <span className="card-img-block-fourth">
              </span>
            </div>
          </div>
          <a href="#" className="card-block-button">
            <p className="card-block-button-item-1">Б</p>
            <p className="card-block-button-item-2">О</p>
            <p className="card-block-button-item-3">Л</p>
            <p className="card-block-button-item-4">Ь</p>
            <p className="card-block-button-item-5">Ш</p>
            <p className="card-block-button-item-6">Е</p>
          </a>
        </div>
      </div>
  );
};

export default SecondSection;