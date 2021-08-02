import React from 'react'
import { useEffect, useState } from 'react';

function Button() {
    const [ randomNumber, setRandomNumber ] = useState(null);

    var min = 1;
    var max = 50000;

    const handleClick = () => {
        setRandomNumber(Math.floor(Math.random() * (max - min + 1)) + min)
    };

    

    
    var unLucky = 666;

    return (
        <div>
            <p>If you get {unLucky}, you have received the blood-clotting side effect!</p>
            <button onClick={handleClick}>
                Click Here!
            </button>
            <p>{randomNumber}</p>
        </div>
    )
}

export default Button;
