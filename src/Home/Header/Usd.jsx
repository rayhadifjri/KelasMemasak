import React from "react";
import Arrow from '../../icon/left-arrow.png';
import './currency.css';
import line from '../../icon/Line.svg';

function Currency(){
    return(
        <div className="currency-top">
            <div className="currency-first">IDR
                <img src={Arrow} classname='panah'></img>
            </div>
            <div className="currency-items">
                <div className="cur-op">
                    RUBEL
                </div>
                <div className="cur-op">
                    USD
                </div>
            </div>
            <div className="garis">
                <img src={line} className='line'></img>
            </div>
        </div>
    );
}

export default Currency;