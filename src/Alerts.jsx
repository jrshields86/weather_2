import './App.css'
import React, { useState } from "react";
import './App.css'



const Alerts = ({forecast}) => {
    if (!forecast.alerts) {
        return null;
    };
    const [modal, setModal] = useState(false);
    const alertTitle = forecast.alerts[0].event;
    const alertStartTime = new Date(forecast.alerts[0].start * 1000);
    const alertEndTime = new Date(forecast.alerts[0].end * 1000);
    const alertDescription = forecast.alerts[0].description;
    
    const toggleModal = () => {
        setModal(!modal)
    };

    if (modal) {
        document.body.classList.add('activeModal')
    } else {
        document.body.classList.remove('activeModal')
    }


    return (
        
        <div>
            <button className="buttonModal" onClick={toggleModal}>
                    {alertTitle}
            </button>
            {modal && (
            <div className="alertModal">
            <div onClick={toggleModal} className="alertOverlay"></div>
            <div className="modalContent">
                <h2>{alertTitle}</h2>
                <p>
                {alertDescription}
                </p>
                <button className="closeModal" onClick={toggleModal}>
                CLOSE
                </button>
            </div>
            </div>
        )}

        </div>


        
    );
};

export default Alerts;