import './App.css'
import React, { useState } from "react";
import './App.css'



const Alerts = ({forecast}) => {
    if (!forecast.alerts) {
        return null;
    };
    const [modal, setModal] = useState(false);
    const [description, setDescription] = useState('');
    // const alertTitle = forecast.alerts[0].event;
    // const alertStartTime = new Date(forecast.alerts[0].start * 1000);
    // const alertEndTime = new Date(forecast.alerts[0].end * 1000);
    // const alertDescription = forecast.alerts[0].description;

    const alertMap = (arr) => {
        const map = arr.map(alert => {
            return alert;
        });
        return map;
    };
    const alertsArr = alertMap(forecast.alerts);
    const alertEventArr = alertsArr.map(alert => alert.event);
    const alertEventDescriptionArr = alertsArr.map( alert => alert.description);
    const alertDescription = () => {
        console.log('hello world');
    }


    
    const toggleModal = () => {
        setModal(!modal)
        alertDescription()
    };

    if (modal) {
        document.body.classList.add('activeModal')
    } else {
        document.body.classList.remove('activeModal')
    }


    return (
        
        <div>
            <ul>
            {
                alertEventArr.map((event, idx) => {
                    return(
                        <li key={idx}>
                            <button className="buttonModal" onClick={toggleModal}>{event}</button>
                        </li>
                    )
                })
            }
            </ul>
            {modal && (
            <div className="alertModal">
            <div onClick={toggleModal} className="alertOverlay"></div>
            <div className="modalContent">
                <h2>{}</h2>
                <p>
                {}
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