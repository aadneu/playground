import React, { useEffect, useState } from 'react'

const ChuckNorris = () => {

    const [chuckFact, setChuckFact] = useState('');

    const fetchData = async () => {
        try {
            const result = await fetch('https://api.chucknorris.io/jokes/random');
            const jsonResult = await result.json();
            setChuckFact(jsonResult.value);
        } catch (error) {
            console.error('Error fetching Chuck Norris joke:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleNewJokeClick = () => {
        fetchData();
    };

    return (
        <div className='chuckfacts'>
            <button onClick={handleNewJokeClick}>Lag ny</button>
            <h3>Chuck Norris vits:</h3>
            <p>{ chuckFact }</p>
        </div>
    );
}

export default ChuckNorris