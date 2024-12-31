import React from 'react';
import { assets } from '../assets/assets';
import '../Styles/OurPolicy.css';

function OurPolicy() {
  return (
    <div className="our-policy-container">
      <div className="policy-item">
        <img src={assets.exchange_icon} alt="Exchange Icon" className="policy-icon" />
        <p className="policy-title">Easy Exchange Policy</p>
        <p className="policy-description">We ensure a smooth and hassle-free exchange process for your convenience.</p>
      </div>
      <div className="policy-item">
        <img src={assets.quality_icon} alt="Quality Icon" className="policy-icon" />
        <p className="policy-title">7 Days Return Policy</p>
        <p className="policy-description">You can return items within 7 days if they don't meet your expectations.</p>
      </div>
      <div className="policy-item">
        <img src={assets.quality_icon} alt="Quality Icon" className="policy-icon" />
        <p className="policy-title">Quality Assurance</p>
        <p className="policy-description">All products are quality-checked before they reach you.</p>
      </div>
    </div>
  );
}

export default OurPolicy;
