import React, { useState } from "react";
import '../App.css'



const Alerts = ({forecast}) => {
    console.log(forecast);
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
        
        <div className="panel flex flex-col gap-1">

            {/*
              Use flex & gap to stack the alert buttons neatly
            */}
            <ul className="flex flex-col items-center gap-1">
                 {
                     alertEventArr.map((event, idx) => {
                         return(

                            <li className="alertLineItemList" key={idx}>
                                <button className="buttonModal" onClick={toggleModal}>
                                  {event}
                                </button>
                            </li>
                         )
                     })
                 }

            </ul>

            {modal && (
            <div className="alertModal flex justify-center items-center">
            <div onClick={toggleModal} className="alertOverlay"></div>
            <div className="modalContent">
                <h2>{}</h2>
                <p>
                {}
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