import React from 'react';
import { motion } from "framer-motion"


const ThirdSections = () => {
  return (
    <div className="info-block">
      <div className="container">
        <div className="info-wrap">
          <div className="info-text-wrap">
            <h2 className="info-header">
              О нас          
            </h2>
            <p className="info-subheader">
              «СТУДИЯ АРТ – ВИЗАЖ» - это школа парикмахерского искусства в Бишкеке, которая знает свое дело, помогает приобрести полноценные знания и стать высококвалифицированным и востребованным специалистом.
            </p>
            <p className="info-subheader">
              На рынке образовательных услуг «СТУДИЯ АРТ – ВИЗАЖ» с 2001 года.Единственная в Кыргызстане: Филиалов - нет.
            </p>
            <p className="info-subheader info-subheader-width">
              Преподаватели в школе «СТУДИЯ АРТ – ВИЗАЖ» - профессионалы высшего уровня и имеющие опыт преподавания. Выбранная нами методика показала наилучшие результаты, все учащиеся прошедшие курсы в нашей школе парикмахерского искусства освоили весь полученный материал и на отлично прошли практику.
            </p>
            <p className="info-subheader info-subheader-width">
              Благодаря индивидуальному подходу к каждому ученику успеваемость наших учеников доказывает их востребованность.
            </p>
            <p className="info-subheader">
              На период всего обучения школа парикмахерского искусства предоставляет бесплатное обслуживание клиентов, что обеспечивает ежедневную практику и разнообразие парикмахерских услуг для учащихся,Обучение - утреннее, дневное. Групповое и индивидуальное.
            </p>
            <p className="info-subheader">
              По окончании курса и успешной сдачи экзаменов:- присваивается квалификации: мастер,- гарантированное трудоустройство .
            </p>
          </div>
          <div className="info-img-wrap">
            <span className="info-img info-first"></span>
            <span className="info-img info-second"></span>
            <span className="info-img info-third"></span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ThirdSections;