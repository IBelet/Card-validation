import React, { useEffect } from 'react';
import './CountrySelect.scss';
import countries from '../../api/countries.json';
import { getCountry } from '../../api/api';

const countriesKeys = Object.keys(countries);

// eslint-disable-next-line react/prop-types
export const CountrySelect = ({ setSelectedCountry, selectedCountry }) => {
  useEffect(() => {
    findUserCountry();
  }, []);

  const findUserCountry = async() => {
    const userCountry = await getCountry();

    setSelectedCountry(userCountry);
  };

  const handleCountrySelect = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <>
      <span>Select your country: </span>
      <div className="control has-icons-left">
        <div className="select is-primary is-rounded">
          <select
            onChange={handleCountrySelect}
            value={selectedCountry}
          >
            <option value="" disabled>
              Select your country
            </option>
            {countriesKeys.map(countryCode => (
              <option
                value={countryCode}
                key={countryCode}
              >
                {countries[countryCode]}
              </option>
            ))}
          </select>
        </div>
        <span className="icon is-left">
          <i className="fas fa-globe" />
        </span>
      </div>
    </>
  );
};
