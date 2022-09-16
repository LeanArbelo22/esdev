import React from 'react';
import './Letters.scss';

function Letters({ letterClass, strings, index }) {
    return (
        <h1>
            {
                strings.map((character, i) => (
                    <span key={character + i} className={`${letterClass} _${i + index}`}>
                        {character}
                    </span>
                ))
            }
        </h1>
    )
}

export default Letters;