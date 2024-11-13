import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
    const location = useLocation();
    const { amount } = location.state;
    const [utr, setUtr] = useState('');

    const handleSubmit = () => {
        fetch('http://localhost:4000/payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount, utr })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Payment confirmed!');
                } else {
                    alert('Payment confirmation failed!');
                }
            });
    };

    return (
        <div style={{overflow: "auto", height: "900px"}}>
            <h3>Pay ₹{amount}</h3>
            <p>Choose any payment mode below:</p>

            <h4>Paytm / PhonePe QR Code</h4>
            <img src="./images/paytm.png" alt="QR Code" style={{width:"100%"}}/>

            <h4>UPI ID: 6386838513@ptyes</h4>
            <h4>Bank Account Details:</h4>
            <p>Account Name: Your Name</p>
            <p>Account Number: 123456789</p>
            <p>IFSC Code: ABCD0123456</p>

            <label>
                UTR Number:
                <input type="text" value={utr} onChange={(e) => setUtr(e.target.value)} />
            </label>

            <button onClick={handleSubmit} style={{marginBottom: "100px"}}>Confirm Payment</button><br />
            {/* <div >00000000</div> */}
        </div>
    );
};

export default Payment;
