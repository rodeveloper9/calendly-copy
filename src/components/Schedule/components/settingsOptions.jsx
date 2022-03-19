import React from "react";
import editIcon from '../../../images/editIcon.png';
import cloneIcon from '../../../images/copyIcon.png';
import deleteIcon from '../../../images/deleteIcon.png';
import blackStarIcon from '../../../images/blackStar.png';

const SettingsOptions = () => {
    return (
        <div className="sechduleAvail_detailSetings_options">
            <button type="button" className="sechduleAvail_detailSetings_optionsBtn">
                <img src={editIcon} alt="Edit Icon" className="sechduleAvail_detailSetings_optionsBtnIcon" />
                Edit name
            </button>

            <button type="button" className="sechduleAvail_detailSetings_optionsBtn">
                <img src={cloneIcon} alt="Clone Icon" className="sechduleAvail_detailSetings_optionsBtnIcon" />
                Clone
            </button>

            <button type="button" className="sechduleAvail_detailSetings_optionsBtn">
                <img src={blackStarIcon} alt="Clone Icon" className="sechduleAvail_detailSetings_optionsBtnIcon" />
                Set as default
            </button>

            <button type="button" className="sechduleAvail_detailSetings_optionsBtn">
                <img src={deleteIcon} alt="Delete Icon" className="sechduleAvail_detailSetings_optionsBtnIcon" />
                Delete
            </button>

        </div>
    )
}

export default SettingsOptions;
