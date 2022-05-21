import { useState } from "react";
import './language.css';
import arrow from '../../icon/left-arrow.png';

function Language({selected, setSelected}){
    const [isActive, setIsActive] = useState(false);
    const options = ['ENGLISH (UK)', 'INDONESIA (ID)', 'Русский (RU)']
    return(
        <div className='Dropdowns'>
            <div className='Dropdowns-btn'  onClick={(e) => 
            setIsActive(!isActive)}>{selected}
            <img src={arrow} classname='arrow'></img>
            </div>
            {isActive && (
                <dic className='Drop-options'>
                    {options.map(option => (
                        <div className='options' onClick={(e) => {
                            setSelected(option);
                            setIsActive(false);
                        }}>
                            {option}
                            </div>
                            
                    ))}
                </dic>
            )}
        </div>
    );
}

export default Language;