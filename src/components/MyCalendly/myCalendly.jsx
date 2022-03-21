import React, { useState } from "react";
import EventTypes from "./TabDetails/eventTypes";
import ScheduledEvents from "./TabDetails/schEvents";
import GeneralSetting from "./TabDetails/generalSetting";
import './style.css';

const MyCalendly = () => {
    const [activeLink, setActiveLink] = useState({ eventType: true });
    const tabData = {
        'eventType': 'Event Types',
        'schEvents': 'Scheduled Events',
        'gnrlSettings': 'General Setting'
    };

    const handleActiveLink = (name) => {
        setActiveLink({ [name]: true });
    };

    return (
        <div className="myCalendly">
            <div className="myCalendly_header">
                <div className="myCalendly_headerTop">
                    <h1 className="myCalendly_headerTxt">My Calendly</h1>
                    <button type="button" className="myCalendly_headerCreateBtn">+ Create</button>
                </div>
                <div className="myCalendly_options">
                    {Object.keys(tabData).map((data, index) => {
                        return <a href="#;" key={index}
                            className={`myCalendly_optionsLink ${activeLink[data] === true ? 'active' : ''}`} onClick={() => handleActiveLink(data)}>
                            {tabData[data]}
                        </a>
                    })
                    }
                </div>
            </div>
            <div className="myCalendly_tabDetails">
                {activeLink['eventType'] ? <EventTypes /> : ''}
                {activeLink['schEvents'] ? <ScheduledEvents /> : ''}
                {activeLink['gnrlSettings'] ? <GeneralSetting /> : ''}

            </div>
        </div>
    );
}

export default MyCalendly;
