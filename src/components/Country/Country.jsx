import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    // console.log(country)
    const {name, flags, population, area, language, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }



    return (
        // <div className={`country ${visited && 'visited'}`}>
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}> 
            <h3 style={{color: visited ? 'white' : 'navy'}}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population} </p>
            <p>area: {area} </p>
            <p>language: {language} </p>
            <p><small>Code:{cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)} className='btn'>Mark visited</button>
            <br /> <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)} className='btn'>Add Flag</button>
            <br /> <br />
            <button onClick={handleVisited} className='btn'> {visited ? 'Visited' : 'Will visit'} </button>
            {visited ? 'I have visited this country.' : 'I want to visit'}

            <hr />
            <CountryDetail>
            country = {country}
            handleVisitedCountry = {handleVisitedCountry}
            handleVisitedFlags = {handleVisitedFlags}
            </CountryDetail>
        </div>
    );
};

export default Country;