import React from "react";
import CalendlyDetails from "./calendlyDetails";
import CalendlyDateTime from "./calendlyDateTime";

const Calendly = () => {

    return (
        <div className="calenderView">
            <CalendlyDetails />
            <CalendlyDateTime />
        </div>
    )
}

export default Calendly
