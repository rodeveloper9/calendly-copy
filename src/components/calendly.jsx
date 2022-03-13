import React from "react";
import CalendlyDetails from "./calendlyDetails";
import CalendlyDateTime from "./calendlyDateTime";
import SechduleConfirm from "./ThankYou/confirmation";

const Calendly = () => {

    return (
        <div className="calenderView">
            {/* <CalendlyDetails />
            <CalendlyDateTime /> */}
            <SechduleConfirm />
        </div>
    )
}

export default Calendly
