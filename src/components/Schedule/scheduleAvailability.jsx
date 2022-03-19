import React from "react";
import './style.css';
import ScheduleOptions from "./components/scheduleOptions";
import ScheduleDetails from "./components/scheduleDetails";

const SechduleAvailability = () => {

    return (
        <div className="sechduleAvail">
            <ScheduleOptions />
            <ScheduleDetails />
        </div>
    )
}

export default SechduleAvailability;
