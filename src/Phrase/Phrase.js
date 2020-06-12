import React, {useState, useEffect} from "react";

function Phase() {
    const [letter, setLetter] = useState('');
    const [number, setNumber] = useState('');

    useEffect(() => {
        console.log(`letter typed: ${letter}`)
    }, [letter]);
    useEffect(() => {
        console.log(`number typed: ${number}`)
    }, [number]);

    return (
        <>
            <h1>Playing with the phase</h1>
            <label>
                The Phrase:
                <input
                    value={letter}
                    onChange={e => setLetter(e.target.value)}
                />
            </label>
            <label>
                The Number:
                <input type="number"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
            </label>
        </>
    )
}

export default Phase;