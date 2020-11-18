/* eslint-disable max-len */
const BASE_URL = 'https://api.paymentwall.com/api/payment-systems/?key=02d212179155a9534354f69a0714a578&country_code=';
const COUNTRY_URL = 'https://api.ipdata.co?api-key=0228e97f62294e53d9396a985932a63955f9b01a62b1146963fc1d09';

async function request(url, options) {
  const response = await fetch(`${BASE_URL}${url}`, options);

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  const result = await response.json();

  return result;
}

export const getPaymentMethods = async(countryCode) => {
  const result = await request(countryCode);

  return result;
};

export const getCountry = async() => {
  const response = await fetch(COUNTRY_URL);

  const res = await response.json();

  return res.country_code;
};
