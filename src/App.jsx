import React, { useState } from 'react';
import { CardForm } from './components/CardForm/CardForm';
import { Notification } from './components/Notification/Notification';

export const App = () => {
  const [isError, setIsError] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const doPayment = (values) => {
    setIsError(Boolean(values));
    // Make some request to server and set isError

    setIsFilled(true);
    setTimeout(() => {
      setIsFilled(false);
    }, 3000);
  };

  return (
    <div className="container
      p-4
      is-flex
      is-flex-direction-column
      is-align-items-center"
    >
      {isFilled
        ? <Notification isError={isError} />
        : <CardForm doPayment={doPayment} />
      }
    </div>
  );
};
