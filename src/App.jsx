import React, { useEffect, useState } from 'react';
import { getCountry, getPaymentMethods } from './api/api';
import './App.scss';
import countries from './api/countries.json';

const countriesKeys = Object.keys(countries);

export const App = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(async() => {
    const userCountry = await getCountry();

    setSelectedCountry(userCountry);
  }, []);

  useEffect(async() => {
    const result = await getPaymentMethods(selectedCountry);

    setPaymentMethods(result);
  }, [selectedCountry]);

  const handleCounrySelection = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <select
        onChange={handleCounrySelection}
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

      {paymentMethods && (
        <ul>
          {paymentMethods.map(method => (
            <li key={method.ps_type_id}>
              {method.name}
              <img src={method.img_url} alt="" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
