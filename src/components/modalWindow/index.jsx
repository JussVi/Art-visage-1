import React from 'react';
import './style.css'

const ModalWindow = ({isModalActive, setIsModalActive, children}) => {

    return (
        <div onClick={() => setIsModalActive(false)} className={isModalActive ? 'modal active' : 'modal'}>
            <div onClick={e => e.stopPropagation()} className={isModalActive ? 'modal__content active' : 'modal__content'}></div>
        </div>
    );
};

export default ModalWindow;