import React from 'react'
import './Button.css';
import '../App.css';
import { useEffect, useState } from 'react';

var min = 1;
var max = 50000;

const unLucky = Math.floor(Math.random() * (max - min + 1)) + min;


function Button() {
    const [ randomNumber, setRandomNumber ] = useState(null);
    const [ disableButton, setDisableButton ] = useState(false);



    const handleClick = () => {
        setRandomNumber(Math.floor(Math.random() * (max - min + 1)) + min);
        setDisableButton(true);
        setTimeout(() => setDisableButton(false), 500);
    };
    
    const checkUnlucky = () => {
        if (randomNumber === unLucky) {
            return <div className="negative-result"><strong>Unfortunately, you experienced blood-clotting! Please call for medical assistance!</strong></div>
        } else if (randomNumber != unLucky && randomNumber != null) {
            return <div className="result"><strong>You have been safely vaccinated!</strong></div>
        }
    }


    return (
        <div className="container">
            <h1>The highest estimate for the chance of receiving the blood-clotting side-effect from the COVID-19 Vaccine is roughly 1 in 50,000. For anyone who wants to "roll the dice" to get a feel of how rare this is, I've made this simple tool.</h1>
            <button className="btn btn-secondary btn-lg" onClick={handleClick} disabled={disableButton}>
                Take the Vaccine!
            </button>
            {checkUnlucky()}
            <p>{randomNumber}</p>
            <p>You have been assigned the unlucky number <strong>{unLucky}</strong>. If you roll this number, that is symbolic of receiving the blood-clotting side-effect from the COVID-19 Vaccine.</p>
            {/* <p>By <a href='https://github.com/ZaidYounan'>ZaidYounan</a></p> */}
        </div>
        
    )
}

export default Button;
