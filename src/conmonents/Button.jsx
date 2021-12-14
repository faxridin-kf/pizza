import React from 'react';
import classNames from 'classnames';
// import PropTypes from 'prop-types';
// import '../assets/app.scss';

export default function Button({ onClick, className, outline, children }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={classNames('button', className, { 'button--outline': outline })}>
        {children}
      </button>
    </div>
  );
}
