import React from "react";
import leftIcon from '../images/leftArrow.png';
import timeIcon from '../images/timeIcon.png';

const CalendlyDetails = () => {

    return (
        <div className="calenderView_details">
            <a href="#;" className="calenderView_details_link"><img src={leftIcon} className="calenderView_details_linkIcon" alt="Back Icon" /></a>
            <p className="calenderView_details_user">Sanket Munjal</p>
            <h2 className="calenderView_details_company">Fanvideo Demo</h2>
            <p className="calenderView_details_time"><img src={timeIcon} className="calenderView_details_timeIcon" alt="Time Icon" /> <span className="calenderView_details_timeAvl">45 min</span></p>
        </div>
    )
}

export default CalendlyDetails;
