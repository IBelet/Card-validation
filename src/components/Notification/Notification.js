import React from 'react';
import classNames from 'classnames';
import './Notification.scss';

// eslint-disable-next-line react/prop-types
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