import React from "react";
import CalendlyDetails from "./calendlyDetails";
import CalendlyDateTime from "./calendlyDateTime";
import SechduleConfirm from "./ThankYou/confirmation";
import ListingPage from "./ListPage/listing";

const Calendly = () => {

    return (
        <div className="calenderView">
            {/* <CalendlyDetails />
            <CalendlyDateTime />
            <SechduleConfirm /> */}
            <ListingPage />
        </div>
    )
}

export default Calendly
