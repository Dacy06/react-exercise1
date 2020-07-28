import React from 'react';
import './Envelope.css';
import AddressLabel from './AddressLabel';


const Envelope = ({ toPerson, fromPerson }) => (
  <div className="envelope-container">
    <div className="person-info from-person-area">
      <AddressLabel person={fromPerson} />
    </div>
    <div className="person-info to-person-area">
      <AddressLabel person={toPerson} />

    </div>
    <div className="person-info stamp-area">
      <div className="stamp-box">
        <div className="stamp">
          STAMP
        </div>
      </div>
    </div>
  </div>
)

export default Envelope;