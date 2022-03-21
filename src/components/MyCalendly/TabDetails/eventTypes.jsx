import React from "react";
import settingsIcon from '../../../images/setingsIcon.png';
import copyIcon from '../../../images/copyIcon.png';

const EventTypes = () => {
    return (
        <div className="myCalendly_eventsWrap">
            <div className="myCalendly_eventsHead">
                <div className="myCalendly_eventsHeadLeft">
                    <p className="myCalendly_eventsHead_userLetr">R</p>
                    <p className="myCalendly_eventsHead_userDetail">
                        <span className="myCalendly_eventsHead_userName">Username</span>
                        <a href="https://calendly.com/userName" target="_blank" className="myCalendly_eventsHead_userEventLink">calendly.com/userName</a>
                    </p>
                </div>
                <div className="myCalendly_eventsHeadRight">
                    <button type="button" className="myCalendly_eventsHead_eventBtn">+ New Event Type</button>
                    <button type="button" className="myCalendly_eventsHead_eventSetings">
                        <img src={settingsIcon} alt="settings icons" className="myCalendly_eventsHead_eventSetimgsIcon" />
                    </button>
                </div>
            </div>

            <div className="myCalendly_eventsType">

                <div className="myCalendly_eventsTypeList">

                    <div className="myCalendly_eventsTypeList_head">
                        <input type="checkbox" className="myCalendly_eventsTypeList_headCheckBox" />
                        <button type="button" className="myCalendly_eventsTypeList_headSetings">
                            <img src={settingsIcon} alt="settings icons" className="myCalendly_eventsTypeList_headSetingsIcon" />
                        </button>
                    </div>

                    <div className="myCalendly_eventsTypeList_body">
                        <h1 className="myCalendly_eventsTypeList_bodyHeading">15 Minute Meeting</h1>
                        <p className="myCalendly_eventsTypeList_bodyDesc">15 mins, One-on-One</p>
                        <a href="#;" className="myCalendly_eventsTypeList_bodyLink">View booking page</a>
                    </div>

                    <div className="myCalendly_eventsTypeList_footer">
                        <button type="button" className="myCalendly_eventsTypeList_footerCopyBtn">
                            <img src={copyIcon} alt="settings icons" className="myCalendly_eventsTypeList_footerCopyBtnIcon" />
                            Copy link
                        </button>
                        <button type="button" className="myCalendly_eventsTypeList_footerTurnBtn">
                            Turn On
                        </button>
                    </div>

                </div>

                <div className="myCalendly_eventsTypeList active">

                    <div className="myCalendly_eventsTypeList_head">
                        <input type="checkbox" className="myCalendly_eventsTypeList_headCheckBox" />
                        <button type="button" className="myCalendly_eventsTypeList_headSetings">
                            <img src={settingsIcon} alt="settings icons" className="myCalendly_eventsTypeList_headSetingsIcon" />
                        </button>
                    </div>

                    <div className="myCalendly_eventsTypeList_body">
                        <h1 className="myCalendly_eventsTypeList_bodyHeading">15 Minute Meeting</h1>
                        <p className="myCalendly_eventsTypeList_bodyDesc">15 mins, One-on-One</p>
                        <a href="#;" className="myCalendly_eventsTypeList_bodyLink">View booking page</a>
                    </div>

                    <div className="myCalendly_eventsTypeList_footer">
                        <button type="button" className="myCalendly_eventsTypeList_footerCopyBtn">
                            <img src={copyIcon} alt="settings icons" className="myCalendly_eventsTypeList_footerCopyBtnIcon" />
                            Copy link
                        </button>
                        <button type="button" className="myCalendly_eventsTypeList_footerTurnBtn">
                            Share
                        </button>
                    </div>

                </div>


                <div className="myCalendly_eventsTypeList">

                    <div className="myCalendly_eventsTypeList_head">
                        <input type="checkbox" className="myCalendly_eventsTypeList_headCheckBox" />
                        <button type="button" className="myCalendly_eventsTypeList_headSetings">
                            <img src={settingsIcon} alt="settings icons" className="myCalendly_eventsTypeList_headSetingsIcon" />
                        </button>
                    </div>

                    <div className="myCalendly_eventsTypeList_body">
                        <h1 className="myCalendly_eventsTypeList_bodyHeading">15 Minute Meeting</h1>
                        <p className="myCalendly_eventsTypeList_bodyDesc">15 mins, One-on-One</p>
                        <a href="#;" className="myCalendly_eventsTypeList_bodyLink">View booking page</a>
                    </div>

                    <div className="myCalendly_eventsTypeList_footer">
                        <button type="button" className="myCalendly_eventsTypeList_footerCopyBtn">
                            <img src={copyIcon} alt="settings icons" className="myCalendly_eventsTypeList_footerCopyBtnIcon" />
                            Copy link
                        </button>
                        <button type="button" className="myCalendly_eventsTypeList_footerTurnBtn">
                            Turn On
                        </button>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default EventTypes;

