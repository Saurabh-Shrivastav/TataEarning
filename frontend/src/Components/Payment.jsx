import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from '../Context';

const Payment = () => {
    const location = useLocation();
    const { amount } = location.state;
    const [utr, setUtr] = useState('');
    const [loading, setLoading] = useState(false);

    const contextDetails = useContext(AppContext)
    // console.log(contextDetails[0].vipName);

    

    // Retrieve the token from local storage (or other storage if you’re using something else)
    const token = localStorage.getItem('token');
    // console.log("token", token);
    


    const handleSubmit = () => {
        setLoading(true); // Set loading to true when request is sent
        fetch('http://localhost:4000/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Add the token to the Authorization header
            },
            body: JSON.stringify({ utr , amount })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Payment confirmed!');
                    setUtr(''); // Clear the UTR input field on successful response
                } else {
                    alert('Payment confirmation failed!');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while confirming payment.');
            })
            .finally(() => {
                setLoading(false); // Set loading to false after request completes
            });
    };


    return (
        <div style={{ overflow: "auto", height: "700px" }}>
            <h3>Pay ₹{amount}</h3>
            <p>Choose any payment mode below:</p>

            <h4>Paytm / PhonePe QR Code</h4>
            <img src="./images/PhonePay.jpeg" alt="QR Code" style={{ width: "100%" }} />

            <h4>UPI ID: Loading...</h4>
            <h4>Bank Account Details:</h4>
            <p>Account Name: Mr. Aditya Kumar</p>
            <p>Account Number: 3751961707</p>
            <p>IFSC Code: CBINO283995</p>

            <label>
                UTR Number:
                <input type="text" value={utr} onChange={(e) => setUtr(e.target.value)} />
            </label>

            <button onClick={handleSubmit} style={{ marginBottom: "100px" }}>Confirm Payment</button><br />
            {/* <div >00000000</div> */}
        </div>
    );
};

export default Payment;
