import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa, faCcMastercard, faCcAmex, faPaypal, faBtc} from '@fortawesome/free-brands-svg-icons';
import './Payment.css'; // Make sure this path is correct

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Payment Method Selected: ${paymentMethod}`);
    // Handle the form submission here
  };

  return (
    <div className="pt-20 pb-20" >
    <div className="pt-28 pb-28" >
    <center>
    <div className="payment-container">
      <h2 className='payment-header'>Payment</h2>
      <p className='payment-description'>All transactions are secure and encrypted.</p>
      <form onSubmit={handleSubmit} className='payment-form'>
        <div className='mb-2'>
          {/* Credit Card Option */}
          <label className='payment-method'>
            <input 
              type='radio' 
              id='creditCard' 
              name='paymentMethod' 
              value='creditCard' 
              checked={paymentMethod === 'creditCard'}
              onChange={() => setPaymentMethod('creditCard')}
              className='form-radio h-5 w-5 text-blue-600'
            />
            <span className='ml-2 text-gray-700'>Credit card</span>
            <FontAwesomeIcon icon={faCcVisa} className='text-xl ml-2' style={{ color: '#1a1f71' }} />
            <FontAwesomeIcon icon={faCcMastercard} className='text-xl ml-2' style={{ color: '#eb001b' }} />
            <FontAwesomeIcon icon={faCcAmex} className='text-xl ml-2' style={{ color: '#2e77bc' }} />
          </label>
        </div>
        <div className='mb-2'>
          {/* PayPal Option */}
          <label className='flex items-center'>
            <input 
              type='radio' 
              id='paypal' 
              name='paymentMethod' 
              value='paypal' 
              checked={paymentMethod === 'paypal'}
              onChange={() => setPaymentMethod('paypal')}
              className='form-radio h-5 w-5 text-blue-600'
            />
            <FontAwesomeIcon icon={faPaypal} className='text-xl ml-2' style={{ color: '#003087' }} />
            <span className='ml-2 text-gray-700'>PayPal</span>
          </label>
        </div>
        <div className='mb-2'>
          {/* Klarna Option */}
          <label className='flex items-center'>
            <input 
              type='radio' 
              id='klarna' 
              name='paymentMethod' 
              value='klarna' 
              checked={paymentMethod === 'klarna'}
              onChange={() => setPaymentMethod('klarna')}
              className='form-radio h-5 w-5 text-pink-600'
            />
           <FontAwesomeIcon icon={faCircle} className='text-xl ml-2' style={{ color: '#FFB3C7' }} />
            <span className='ml-2 text-gray-700'>Buy now, pay later with Klarna</span>
          </label>
        </div>
        <div className='mb-2'>
          {/* Bitcoin Option */}
          <label className='flex items-center'>
            <input 
              type='radio' 
              id='bitcoin' 
              name='paymentMethod' 
              value='bitcoin' 
              checked={paymentMethod === 'bitcoin'}
              onChange={() => setPaymentMethod('bitcoin')}
              className='form-radio h-5 w-5 text-yellow-600'
            />
            <FontAwesomeIcon icon={faBtc} className='text-xl ml-2' style={{ color: '#F7931A' }} />
            <span className='ml-2 text-gray-700'>Bitcoin</span>
          </label>
        </div>
        <div className='button-row mb-4 flex justify-center'>
          {/* Submit Button */}
          <button type='submit' className='btn btn-lg btn-orange flex items-center justify-center mr-4 '>
            Previous page
          </button>

          <button type='submit' className='btn btn-lg payment-bottom flex items-center justify-center'>
            Complete order
          </button>
        
        
        </div>
      </form>
      <p className='payment-footer'>
  After clicking “Complete order”, you will be redirected to complete your purchase securely.
</p>
</div>
</center>
</div>
</div>

);
};

export default Payment;

