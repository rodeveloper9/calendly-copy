import React, { useState } from "react";
import './style.css';

const GuestDetails = () => {
    const checkValidEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase());
    };

    const initialInputValue = {
        guestName: '',
        guestEmail: '',
        guestComent: ''
    };

    const [inputValue, setInputValue] = useState(initialInputValue);
    const [guestNameError, setGuestNameError] = useState('');
    const [guestEmailError, setGuestEmailError] = useState('');
    const [isAddGuest, setIsAddGuest] = useState(false);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    }

    const handleSchedule = (e) => {
        e.preventDefault();
        if (inputValue.guestName.length === 0) {
            setGuestNameError("Guest name can't be blank.");
        }
        if (inputValue.guestEmail.length === 0) {
            setGuestEmailError("Guest email can't be blank.");
        }
        if (!checkValidEmail(inputValue.guestEmail)) {
            setGuestEmailError("Enter valid email.");
        }
        else {
            alert('Form Submitted')
        }
    }

    return (
        <div className="calenderView_guestDetails">
            <h1 className="calenderView_guestDetails_head">Enter Details </h1>

            <form className="calenderView_guestDetails_form">
                <div className="calenderView_inputWrap">
                    <label htmlFor="guestName" className="calenderView_inputLabel">Name <sup>*</sup></label>
                    <input type="text" id="guestName" className={`calenderView_inputBox ${guestNameError ? 'inError' : ''}`} name="guestName" value={inputValue.guestName} onChange={(e) => handleInputChange(e)} onFocus={() => setGuestNameError('')} />
                    {guestNameError ? <p className="calenderView_inputError">{guestNameError}</p> : ''}
                </div>

                <div className="calenderView_inputWrap">
                    <label htmlFor="guestEmail" className="calenderView_inputLabel">Email <sup>*</sup></label>
                    <input type="email" id="guestEmail" className={`calenderView_inputBox ${guestEmailError ? 'inError' : ''}`} name="guestEmail" value={inputValue.guestEmail} onChange={(e) => handleInputChange(e)} onFocus={() => setGuestEmailError('')} />
                    {guestEmailError ? <p className="calenderView_inputError">{guestEmailError}</p> : ''}

                    <div className="calenderView_addGuestWrap">
                        {isAddGuest ?
                            <div className="calenderView_addGuestInputWrap">
                                <label htmlFor="guestEmails" className="calenderView_inputLabel">Guest Email(s)</label>
                                <textarea type="textarea" id="guestEmails" className="calenderView_inputTextarea" name="guestEmails" value={inputValue.guestComent} onChange={(e) => handleInputChange(e)}> </textarea>
                                <span className="calenderView_addGuestInputWrap_note">Notify up to 10 additional guests of the scheduled event.</span>
                            </div>
                            :
                            <button type="button" className="calenderView_addGuestBtn" onClick={() => setIsAddGuest(true)}>Add Guests</button>
                        }

                    </div>

                </div>

                <div className="calenderView_inputWrap">
                    <label htmlFor="guestComent" className="calenderView_inputLabel">Please share anything that will help prepare for our meeting.</label>
                    <textarea type="textarea" id="guestComent" className="calenderView_inputTextarea" name="guestComent" value={inputValue.guestComent} onChange={(e) => handleInputChange(e)}> </textarea>
                </div>

                <button type="submit" className="calenderView_submitBtn" onClick={(e) => handleSchedule(e)}>Schedule Event</button>

            </form>
        </div>
    )
}

export default GuestDetails
