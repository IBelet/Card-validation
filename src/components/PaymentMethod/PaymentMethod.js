/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { getPaymentMethods } from '../../api/api';

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

    if (!result) {
      setPaymentMethods([]);
    } else {
      setPaymentMethods(result);
    }
  };

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
              <label key={method.ps_type_id}>
                <div className="box m-1 is-flex is-align-items-center">
                  <input
                    type="radio"
                    name="method"
                    value={method.ps_type_id}
                    onChange={(event) => {
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
              </label>
            ))}
          </>
        )
        : <h3>Sorry, payment unavailable in this country</h3>}
    </div>
  );
};
