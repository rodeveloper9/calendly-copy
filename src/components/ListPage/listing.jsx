import React from "react";
import './style.css';
import redCircle from '../../images/redCircle.png';
import rightArrow from '../../images/rightBlackArrow.png';

const ListingPage = () => {
    return (
        <div className="calendlyView_list">
            <div className="calendlyView_list_headWrap">
                <h1 className="calendlyView_list_heading">Sanket Munjal</h1>
                <p className="calendlyView_list_headTxt">Welcome to my scheduling page. Please follow the instructions to add an event to my calendar.</p>
            </div>
            <div className="calendlyView_listWrap">
                <a href="#;" className="calendlyView_listWrap_item">
                    <div className="calendlyView_listWrap_txtWrap">
                        <img src={redCircle} alt="circle" className="calendlyView_listWrap_itemIcon" />
                        <span className="calendlyView_listWrap_itemTxt">Fanvideo Demo</span>
                    </div>
                    <img src={rightArrow} alt="circle" className="calendlyView_listWrap_itemArrow" />
                </a>

                <a href="#;" className="calendlyView_listWrap_item">
                    <div className="calendlyView_listWrap_txtWrap">
                        <img src={redCircle} alt="circle" className="calendlyView_listWrap_itemIcon" />
                        <span className="calendlyView_listWrap_itemTxt">Fanvideo Demo</span>
                    </div>
                    <img src={rightArrow} alt="circle" className="calendlyView_listWrap_itemArrow" />
                </a>

                <a href="#;" className="calendlyView_listWrap_item">
                    <div className="calendlyView_listWrap_txtWrap">
                        <img src={redCircle} alt="circle" className="calendlyView_listWrap_itemIcon" />
                        <span className="calendlyView_listWrap_itemTxt">Fanvideo Demo</span>
                    </div>
                    <img src={rightArrow} alt="circle" className="calendlyView_listWrap_itemArrow" />
                </a>

            </div>

        </div>
    )
}

export default ListingPage