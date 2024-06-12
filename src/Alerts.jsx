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
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    return (
        
        <div>
            <button className="btn-modal" onClick={toggleModal}>
                    {alertTitle}
            </button>
            {modal && (
            <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
                <h2>{alertTitle}</h2>
                <p>
                {alertDescription}
                </p>
                <button className="close-modal" onClick={toggleModal}>
                CLOSE
                </button>
            </div>
            </div>
        )}

        </div>


        
    );
};

export default Alerts;