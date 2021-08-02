import React from 'react'
import { useEffect, useState } from 'react';

function Button() {
    const [ randomNumber, setRandomNumber ] = useState(null);

    var min = 1;
    var max = 50000;

    const handleClick = () => {
        setRandomNumber(Math.floor(Math.random() * (max - min + 1)) + min)
    };

    


    return (
        <div>
            <button onClick={handleClick}>
                Click Here!
            </button>
            {randomNumber}
        </div>
    )
}

export default Button;
