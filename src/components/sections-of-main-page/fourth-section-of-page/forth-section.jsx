import React, { useEffect, useState } from 'react';
import ModalWindow from "../../modalWindow";
import './style.css';

const FourthSection = () => {
    const [isModalActive, setIsModalActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isMasters, setIsMasters] = useState([]);
    const [selectedMaster, setSelectedMaster] = useState(null);

    const getMasters = async () => {
        const response = await fetch('http://localhost:1337/api/masters');
        return await response.json();
    };

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                const data = await getMasters();
                setIsMasters(data.data);
            } catch (e) {
                alert('Сервер недоступен или отключен');
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    const openModal = (master) => {
        setSelectedMaster(master);
        setIsModalActive(true);
    };

    return (
        <div className="info-block">
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div className="container">
                    <h2 className="info-header">Мастеры</h2>
                    <div className="main-block-masters-cards">
                        {isMasters.map((master) => (
                            <div
                                id={master.id}
                                key={master.id}
                                onClick={() => openModal(master)}
                                className="photo-of-master"
                            >
                                <img className="photo-of-master-img" src={master.attributes.img_link} alt="" />
                                <span className="name-of-master">{master.attributes.name}</span>
                            </div>
                        ))}
                    </div>
                    <ModalWindow
                        isModalActive={isModalActive}
                        setIsModalActive={setIsModalActive}
                    >
                        {selectedMaster && (
                            <div className='description-of-master-modal-wrap'>
                                <div>
                                    <h3 className='description-of-master-modal-who-is'>{selectedMaster.attributes.title}</h3>
                                    <h2 className='description-of-master-modal-who-is'>{selectedMaster.attributes.name}</h2>
                                    <p className='description-of-master-modal'>{selectedMaster.attributes.description_1}</p>
                                    <p className='description-of-master-modal'>{selectedMaster.attributes.description_2}</p>
                                    <p className='description-of-master-modal'>{selectedMaster.attributes.description_3}</p>
                                    <p className='description-of-master-modal'>{selectedMaster.attributes.description_4}</p>
                                </div>
                            </div>
                        )}
                    </ModalWindow>
                </div>
            )}
        </div>
    );
};

export default FourthSection;
