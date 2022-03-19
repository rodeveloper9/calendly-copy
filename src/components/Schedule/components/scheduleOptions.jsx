import React, { useState } from "react";
import defaultSchIcon from '../../../images/defaultSchIcon.png';
import calenderIcon from '../../../images/calenderIcon.png'; //use this icon for schedule which isn't default
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const ScheduleOptions = () => {
    const schData = {
        "default": "Working hours",
        "rohit": "Rohit"
    }
    const [activeLink, setActiveLink] = useState({ default: true });
    const [allSchData, setAllSchData] = useState(schData);
    const [openModal, setOpenModal] = useState(false);
    const [newSchName, setNewSchName] = useState('');
    const [schNameErr, setSchNameErr] = useState(false);

    const handleActiveLink = (name) => {
        setActiveLink({ [name]: true });
    }

    const handleCreateClick = () => {
        if (newSchName) {
            setAllSchData({ ...allSchData, [newSchName]: newSchName });
            onCloseModal();
            setNewSchName('');
        }
        else {
            setSchNameErr(true)
        }
    };

    const onOpenModal = () => setOpenModal(true);
    const onCloseModal = () => setOpenModal(false);

    return (
        <div className="sechduleAvail_headWrap">
            <h1 className="sechduleAvail_heading">Set your availability</h1>
            <p className="sechduleAvail_headTxt">Choose a schedule below to edit or create a new one that you can apply to your event types</p>
            <h4 className="sechduleAvail_schTxt">SCHEDULE</h4>
            <div className="sechduleAvail_btnWrap">

                {Object.keys(allSchData).map((sch, index) => {
                    return <a href="#;" key={index}
                        className={`sechduleAvail_wrkngHrsBtn ${activeLink[sch] === true ? 'active' : ''}`} onClick={() => handleActiveLink(sch)}>
                        <img src={defaultSchIcon}
                            alt="default schdule icon"
                            className="sechduleAvail_wrkngHrsBtn_icon"
                        />
                        {allSchData[sch]}
                    </a>
                })
                }

                <button type="button" className="sechduleAvail_schBtn" onClick={onOpenModal}>+ New schedule</button>

                <Modal
                    classNames={{ modal: "sechduleAvail_newSchModal" }}
                    open={openModal}
                    onClose={onCloseModal}
                    center
                    showCloseIcon={false}
                >
                    <h1 className="sechduleAvail_newSchHead">New schedule</h1>
                    <form className="sechduleAvail_newSchForm">
                        <div className="sechduleAvail_newSchInputWrap">
                            <label className="sechduleAvail_newSchInputLabel">Schedule name</label>
                            <input
                                type="text"
                                className={`sechduleAvail_newSchInputField ${schNameErr ? 'error' : ''}`} placeholder="Working Hours, Exclusive Hours, etc..." name="newSch"
                                value={newSchName}
                                onChange={(e) => setNewSchName(e.target.value)}
                                onFocus={() => setSchNameErr(false)}
                            />
                            {schNameErr ? <p className="sechduleAvail_newSchFieldErrmsg">Name your schedule.</p> : ''}
                        </div>
                        <div className="sechduleAvail_newSchBtnWrap">
                            <button type="button" className="sechduleAvail_newSchBtn cancel" onClick={onCloseModal}>Cancel</button>
                            <button type="button" className="sechduleAvail_newSchBtn create" onClick={() => handleCreateClick()}>Create</button>
                        </div>
                    </form>
                </Modal>

            </div>
        </div>
    )
}

export default ScheduleOptions;
