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
        <section id="chuck">

        <div className='container-lg'>
            <div className="text-center"> 
                <h3>Chuck Norris vits:</h3>
                <p>{ chuckFact }</p>
                <button onClick={handleNewJokeClick} type="button" className="btn btn-success btn-sm my-1">Lag ny</button>       

            </div>
            
        </div>
        </section>
    );
}

export default ChuckNorris