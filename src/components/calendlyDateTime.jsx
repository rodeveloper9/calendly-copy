import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import globIcon from '../images/globe.png';

const CalendlyDateTime = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(new Date().toLocaleDateString('en-us', { weekday: "long", month: "long", day: "numeric" }));
    const [cnfrmBtn, setConfrmBtn] = useState(false);

    const handleDateChange = (date) => {
        const _selctedDay = new Date(date).toLocaleDateString('en-us', { weekday: "long", month: "long", day: "numeric" });
        setStartDate(date);
        setSelectedDay(_selctedDay);
    };

    const handleTimeClick = () => {
        setConfrmBtn(true)
    };

    const options = [
        { value: 'IST', label: 'Indian Standard Time' },
        { value: 'adeladeTime', label: 'Adelaide Time' },
        { value: 'brisbaneTime', label: 'Brisbane Time' }
    ]

    return (
        <div className="calenderView_dateTime">
            <h1 className="calenderView_dateTime_head">Select a Date & Time </h1>
            <div className="calenderView_dateTimeWrap">
                <div className="calenderView_dateTime_dateView">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => handleDateChange(date)}
                        inline
                        minDate={new Date()}
                        calendarClassName="calendlyCalender"
                        showTimeSelect={false}
                        useWeekdaysShort={false}
                    />
                    <div className="calenderView_dateTime_timeZone">
                        <img src={globIcon} alt="Time Icon" className="calenderView_dateTime_timeZone_icon" />
                        <Select
                            options={options}
                            defaultValue={{ label: 'Indian Standard Time', value: 'IST' }}
                        />
                    </div>
                </div>
                <div className="calenderView_dateTime_timeView">
                    <p className="calenderView_dateTime_timeView_dayName">{selectedDay}</p>
                    <p className="calenderView_dateTime_timeView_head">times you're available</p>
                    <div className="calenderView_dateTime_timeView_list">
                        <p className="calenderView_dateTime_timeView_listItemWrap" onClick={() => handleTimeClick()}>
                            {cnfrmBtn ?
                                <p className="calenderView_dateTime_timeView_listItemCnfrm">
                                    <span className="calenderView_dateTime_timeView_listItemCnfrm_time">09:00am</span> <span className="calenderView_dateTime_timeView_listItemCnfrm_btn">Confirm</span></p>
                                : <span className="calenderView_dateTime_timeView_listItem">09:00am</span>}
                        </p>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendlyDateTime;
