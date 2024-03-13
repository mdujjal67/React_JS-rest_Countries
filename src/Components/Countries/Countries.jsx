import { useState } from 'react'
import { useEffect } from 'react'
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=> {
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
    }, [])
    
    const [visitedCountries, setvisitedCountries] = useState([]);
    const handlevisitedCountries = (country) => {
        console.log('Add this to your visited countries.')
        console.log(country);
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div className='country-container'>
                {
                    countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountries={handlevisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;