import React from "react";
import './style.css';
import confrimCircle from '../../images/confirmCircle.png';
import langIcon from '../../images/langIcon.png';
import calenderIcon from '../../images/calenderIcon.png';
import videoIcon from '../../images/videoIcon.png';

const SechduleConfirm = () => {
    return (
        <div className="calenderView_confirm">
            <div className="calenderView_confirm_headWrap">
                <h1 className="calenderView_confirm_head">Confirmed</h1>
                <p className="calenderView_confirm_headTxt">You are sechduled with Rohit.</p>
            </div>
            <div className="calenderView_confirm_details">
                <div className="calenderView_confirm_detailsSection">
                    <img src={confrimCircle} className="calenderView_confirm_detailsIcon" alt="Confirmation" />
                    <h1 className="calenderView_confirm_detailsHead">30 Minute Meeting</h1>
                </div>
                <div className="calenderView_confirm_detailsSection">
                    <img src={calenderIcon} className="calenderView_confirm_detailsIcon" alt="Confirmation" />
                    <h1 className="calenderView_confirm_detailsHeadSm">11:30am - 12:00pm, Sunday, March 13, 2022</h1>
                </div>
                <div className="calenderView_confirm_detailsSection">
                    <img src={langIcon} className="calenderView_confirm_detailsIcon" alt="Confirmation" />
                    <h1 className="calenderView_confirm_detailsHeadSm">Indian Standard Time</h1>
                </div>
                <div className="calenderView_confirm_detailsSection">
                    <img src={videoIcon} className="calenderView_confirm_detailsIcon" alt="Confirmation" />
                    <h1 className="calenderView_confirm_detailsHeadSm">Web conferencing details to follow.</h1>
                </div>
                <h4 className="calenderView_confirm_detailsMsg">A calender invitation has been sent to your email address.</h4>
            </div>

        </div>
    )
}

export default SechduleConfirm
