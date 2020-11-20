/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';

export const Notification = ({ isError }) => (
  <div className={classNames({
    notification: true,
    'p-4': true,
    'is-success': isError,
    'is-danger': !isError,
  })}
  >
    {!isError
      ? <p>Payment error</p>
      : <p>Payment is successful</p>
    }
  </div>
);
