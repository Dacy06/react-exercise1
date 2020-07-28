import React from 'react';
import './ErrorBox.css';

const ErrorBox = ({children}) => (
  <div className="info-box">
    <i className="fa fa-exclamation-triangle"/>
    {children}
  </div>
);

export default ErrorBox;