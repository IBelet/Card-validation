/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import countries from '../../api/countries.json';
import { getCountry } from '../../api/api';

const countriesKeys = Object.keys(countries);

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
    <div className="is-flex
      is-align-items-center
      is-justify-content-space-evenly
      is-flex-wrap-wrap"
    >
      <span>{`Select your country: `}</span>
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
    </div>
  );
};
