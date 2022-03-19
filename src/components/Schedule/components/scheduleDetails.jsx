import React, { useState, Fragment } from "react";
import Select from 'react-select';
import settingsIcon from '../../../images/setingsIcon.png';
import yellowStar from '../../../images/yelowStar.png';
import listViewICon from '../../../images/listIcon.png';
import calenderIcon from '../../../images/calenderIcon.png';
import SettingsOptions from "./settingsOptions";
import SetWeeklyHrs from "./setWeeklyHrs";
import AddDateOverride from "./addDateOverride";

const ScheduleDetails = () => {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    const options = [
        { value: 'IST', label: 'Indian Standard Time' },
        { value: 'adeladeTime', label: 'Adelaide Time' },
        { value: 'brisbaneTime', label: 'Brisbane Time' }
    ];

    const daysData = [
        {
            displyLabel: 'sun',
        },
        {
            displyLabel: 'mon',
        },
        {
            displyLabel: 'tue',
        },
        {
            displyLabel: 'wed',
        },
        {
            displyLabel: 'thu',
        },
        {
            displyLabel: 'fri',
        },
        {
            displyLabel: 'sat',
        }
    ];


    return (
        <div className="sechduleAvail_details">
            <div className="sechduleAvail_detailsHead">
                <div className="sechduleAvail_detailsHeadDesc">
                    <p className="sechduleAvail_detailsHeadName">Working hours</p>
                    <p className="sechduleAvail_detailsHeadNameType">
                        <img src={yellowStar} className="sechduleAvail_detailsHeadIcon" alt="Star" />
                        default schedule</p>
                </div>
                <div className="sechduleAvail_detailsHeadSetings">
                    <button type="button" className="sechduleAvail_detailsHeadSetingBtn" onClick={() => setIsOptionsOpen(!isOptionsOpen)}>
                        <img src={settingsIcon} className="sechduleAvail_detailsHeadSetingIcon" alt="Settings Icon" />
                    </button>
                    {isOptionsOpen ?
                        <SettingsOptions />
                        :
                        ''
                    }
                </div>
            </div>
            <div className="sechduleAvail_activeViewWrap">
                <div className="sechduleAvail_activeEventTime">
                    <div className="sechduleAvail_activeWrap">
                        <p className="sechduleAvail_activeLabel">ACTIVE ON</p>
                        <Select
                            options={options}
                            defaultValue={{ label: 'Indian Standard Time', value: 'IST' }}
                            className={'sechduleAvail_activeEventType'}
                        />
                    </div>
                    <div className="sechduleAvail_activeWrap">
                        <p className="sechduleAvail_activeLabel">TIME ZONE</p>
                        <Select
                            options={options}
                            defaultValue={{ label: 'Indian Standard Time', value: 'IST' }}
                            className={'sechduleAvail_activeTimeZone'}
                        />
                    </div>
                </div>
                <div className="sechduleAvail_viewWrap">
                    <button type="button" className="sechduleAvail_viewBtn active">
                        <img src={listViewICon} className="sechduleAvail_viewBtnIcon" alt="List View Icon" />
                        List view</button>
                    <button type="button" className="sechduleAvail_viewBtn">
                        <img src={calenderIcon} className="sechduleAvail_viewBtnIcon" alt="Calender View Icon" />
                        Calendar view</button>
                </div>
            </div>

            {/* Set Hours Section */}
            <div className="sechduleAvail_setHrsWrap">
                <div className="sechduleAvail_setHrsSection">
                    <h4 className="sechduleAvail_setHrsSection_head">Set your weekly hours</h4>
                    <div className="sechduleAvail_dayHrsWrap">

                        {daysData.map((day, index) => {
                            const { displyLabel = '' } = day;
                            return (
                                <Fragment key={index}>
                                    <SetWeeklyHrs displyLabel={displyLabel} index={index} />
                                </Fragment>
                            )
                        })
                        }

                    </div>

                </div>
                {/* Add Date overide Section */}
                <AddDateOverride />
            </div>

        </div>
    )
}

export default ScheduleDetails;
