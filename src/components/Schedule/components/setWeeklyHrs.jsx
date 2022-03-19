import React, { useState, useEffect, Fragment } from "react";
import Select from 'react-select';
import deleteIcon from '../../../images/lightDelIcon.png';
import copyIcon from '../../../images/copyIcon.png';
import addNewIcon from '../../../images/addNewIcon.png';

const SetWeeklyHrs = ({ displyLabel = '', index = '' }) => {
    const [isDayChecked, setIsDayChecked] = useState({
        sun_0: false, mon_1: true, tue_2: true, wed_3: true, thu_4: true, fri_5: true, sat_6: false
    });
    const [timeOptions, setTimeOptions] = useState([]);

    useEffect(() => {
        createTimeOptions();
    }, [])

    const handleDayCheck = (name) => {
        setIsDayChecked({ ...isDayChecked, [name]: isDayChecked[name] ? !isDayChecked[name] : true })
    }

    /**
        * @description creates a time array in the interval of 15
        * @property interval can be changed by passing as a parameter
    */
    const createTimeOptions = (interval = 15) => {
        let times = [];
        let startTime = 0; // start time
        let ap = ['AM', 'PM']; // AM-PM

        for (var i = 0; startTime < 24 * 60; i++) {
            var hh = Math.floor(startTime / 60);
            var mm = (startTime % 60);
            times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh / 12)];
            startTime = startTime + interval;
        }
        const timeOptions = times.map((time) => {
            return { value: time, label: time };
        })
        setTimeOptions(timeOptions);
    };

    return (
        <div className="sechduleAvail_dayHrs" key={index}>
            <div className="sechduleAvail_dayHrs_dayCheck">
                <input
                    type="checkbox"
                    className="sechduleAvail_dayHrs_dayCheckBox"
                    id={`${displyLabel}_${index}`}
                    name={`${displyLabel}_${index}`}
                    checked={isDayChecked[`${displyLabel}_${index}`]}
                    onChange={() => handleDayCheck(`${displyLabel}_${index}`)}
                />
                <label htmlFor={`${displyLabel}_${index}`} className="sechduleAvail_dayHrs_dayCheckName">{displyLabel}</label>
            </div>

            <div className="sechduleAvail_dayHrs_timeSelect">
                {isDayChecked[`${displyLabel}_${index}`] ?
                    <Fragment>
                        <Select
                            options={timeOptions}
                            defaultValue={{ label: '09:00am', value: '09:00am' }}
                            className={'sechduleAvail_dayHrs_timeSelectFrom'}
                        />
                        <span className="sechduleAvail_dayHrs_timeSelectSeperator">-</span>
                        <Select
                            options={timeOptions}
                            defaultValue={{ label: '05:00pm', value: '05:00pm' }}
                            className={'sechduleAvail_dayHrs_timeSelectTo'}
                        />
                        <button type="button" className="sechduleAvail_dayHrs_timeBtn">
                            <img src={deleteIcon} alt="Delete Icon" className="sechduleAvail_dayHrs_timeBtnIcon" />
                        </button>
                    </Fragment>
                    :
                    <p className="sechduleAvail_dayHrs_timeUnavail">Unavailable</p>
                }
            </div>

            <div className="sechduleAvail_dayHrs_actnBtn">
                <button type="button" className="sechduleAvail_dayHrs_timeBtn">
                    <img src={addNewIcon} alt="Add New Icon" className="sechduleAvail_dayHrs_timeBtnIcon" />
                </button>
                <button type="button" className="sechduleAvail_dayHrs_timeBtn">
                    <img src={copyIcon} alt="Add New Icon" className="sechduleAvail_dayHrs_timeBtnIcon" />
                </button>
            </div>

        </div>
    )
}

export default SetWeeklyHrs;
