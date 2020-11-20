/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import classNames from 'classnames';
import { CountrySelect } from '../CountrySelect/CountrySelect';
import { PaymentMethod } from '../PaymentMethod';
import {
  validateCardNumber,
  validateName,
  onlyNumbers,
  onlyCharacters,
  validateExpDate,
} from '../../validation';
import './CardForm.scss';

const initialValues = {
  name: '',
  card: '',
  expDate: '',
  cvv: '',
  method: '',
};

const initialErrors = {
  name: false,
  card: false,
  expDate: false,
  cvv: false,
};

export const CardForm = ({
  amount = 9.99,
  currency = '$',
  doPayment,
}) => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);

  const isNotFilled = !Object.values(values).every(value => value);
  const isError = Object.values(errors).some(error => error);

  const handleSubmit = (event) => {
    event.preventDefault();

    doPayment(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CountrySelect
        setSelectedCountry={setSelectedCountry}
        selectedCountry={selectedCountry}
      />

      {paymentMethods && (
        <PaymentMethod
          selectedCountry={selectedCountry}
          setPaymentMethods={setPaymentMethods}
          paymentMethods={paymentMethods}
          values={values}
          setValues={setValues}
        />
      )}

      <div className="field">
        <label className="label">
          Cardholder name:
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={event => setValues({
              ...values,
              name: onlyCharacters(event.target.value),
            })}
            onBlur={() => setErrors({
              ...errors,
              name: !validateName(values.name),
            })}
          />
          {errors.name && (
            <p className="help is-danger">Please enter your name</p>
          )}
        </label>
      </div>

      <div className="field">
        <label className="label">
          Card number:
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            value={values.card}
            onChange={event => setValues({
              ...values,
              card: onlyNumbers(event.target.value),
            })}
            onBlur={() => setErrors({
              ...errors,
              card: !validateCardNumber(values.card),
            })}
          />
          {errors.card && (
            <p className="help is-danger">Please enter valid card number</p>
          )}
        </label>
      </div>

      <div className="field">
        <label className="label">
          CVV code:
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            value={values.cvv}
            onChange={event => setValues({
              ...values,
              cvv: onlyNumbers(event.target.value),
            })}
            onBlur={event => setErrors({
              ...errors,
              cvv: !values.cvv,
            })}
          />
          {errors.cvv && (
            <p className="help is-danger">Please enter CVV</p>
          )}
        </label>
      </div>

      <div className="field">
        <label className="label">
          Expiration date:
          <input
            className="input"
            type="month"
            name=""
            id=""
            value={values.expDate}
            onChange={event => setValues({
              ...values,
              expDate: event.target.value,
            })}
            onBlur={() => setErrors({
              ...errors,
              expDate: !validateExpDate(values.expDate),
            })}
          />
          {errors.expDate && (
            <p className="help is-danger">Please enter valid date</p>
          )}
        </label>
      </div>

      <button
        type="submit"
        disabled={isNotFilled || isError}
        title="Fill all fields"
        className={classNames({
          button: true,
          'is-warning': isNotFilled || isError,
          'is-success': !(isNotFilled || isError),
        })}
      >
        {`Pay ${amount} ${currency}`}
      </button>
    </form>
  );
};
