import React from 'react';
import './AddressLabel.css';

const AddressLabel = ({ person }) => {
  const address = person.address;
  const [detailAddress, cityInfo] = address.split('.');
  return <div>
    <span className="show-info">{person.fullName}</span>
    <span className="show-info">{detailAddress} .</span>
    <span className="show-info">{cityInfo}</span>
  </div>
}

export default AddressLabel;