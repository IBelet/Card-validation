/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { getPaymentMethods } from '../../api/api';
import './PaymentMethod.scss';

export const PaymentMethod = ({
  selectedCountry,
  setPaymentMethods,
  paymentMethods,
  values,
  setValues,
}) => {
  useEffect(async() => {
    findPaymentMethods();
  }, [selectedCountry]);

  const findPaymentMethods = async() => {
    const result = await getPaymentMethods(selectedCountry);

    setPaymentMethods(result);
  };

  // eslint-disable-next-line no-console
  console.log(paymentMethods);

  return (
    <div className="is-flex
      is-justify-content-center
      is-align-items-center
      is-flex-wrap-wrap"
    >
      {paymentMethods.length !== 0
        ? (
          <>
            {paymentMethods.map(method => (
              <div
                key={method.ps_type_id}
                className="box m-1 is-flex is-align-items-center"
              >
                <input
                  type="radio"
                  name="method"
                  value={method.ps_type_id}
                  onChange={(event) => {
                    // eslint-disable-next-line no-console
                    console.log(event.target.value);
                    setValues({
                      ...values,
                      method: event.target.value,
                    });
                  }}

                />
                <img
                  src={method.img_url}
                  alt={method.name}
                  className="m-1"
                />
                {method.name}
              </div>
            ))}
          </>
        )
        : <h3>Sorry, payment unavailable in this country</h3>}
    </div>
  );
};
