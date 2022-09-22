import React, { useState, useEffect } from 'react';
import Letters from '../../Animations/Letters/Letters';

function Brand() {

    const [letterClass, setLetterClass] = useState();

    const logoArray = ['E','S','D','e','v'];

    useEffect(() => {
        setLetterClass('text-animate-hover brand');
    }, [])

    return (
        <Letters
            letterClass={`${letterClass}`}
            strings={logoArray}
            index={1} />
    )
}

export default Brand;