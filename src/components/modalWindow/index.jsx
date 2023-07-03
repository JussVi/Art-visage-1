import React, {useEffect} from 'react';
import './style.css'

const ModalWindow = ({isModalActive, setIsModalActive, children}) => {

    useEffect(() => {
        function handleEscKeyPress(event) {
            if (event.key === "Escape") {
                setIsModalActive(false);
            }
        }
        document.addEventListener("keydown", handleEscKeyPress);
        return () => {
            document.removeEventListener("keydown", handleEscKeyPress);
        };
    }, []);

    return (
        <div onClick={() => setIsModalActive(false)} className={isModalActive ? 'modal active' : 'modal'}>
            <div onClick={e => e.stopPropagation()} className={isModalActive ? 'modal__content active' : 'modal__content'}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;