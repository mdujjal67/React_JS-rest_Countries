import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountries}) => {
    // console.log(country)
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    console.log(handleVisitedCountries)
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={handleVisitedCountries} style={{marginBottom: '10px'}}>Mark Visited</button> <br />
            <button onClick={handleVisited}>{visited ? 'Visited': 'Going'}</button>
            {visited ? ' I have visited this country.': 'I want to visit.'}
        </div>
    );
};

export default Country;

