import React, { useContext, useEffect, useState } from 'react'
import './GoodsDetail.css'; // Import the CSS
import { useNavigate } from 'react-router-dom';
import AppContext from '../Context';

function GoodsDetail7() {
    let data7 = useContext(AppContext)
    // console.log(data7);

    const navigate = useNavigate();


    const [balance, setBalance] = useState(0)

    useEffect(() => {
        setBalance(0)
    }, [])

    const handleInvest = (amount) => {
        navigate('/payment', { state: { amount } });
        console.log(amount);
    };

    const handleRecharge = () => {
        alert("Redirect to recharge Page...")
    }

    let Navigate = useNavigate()

    function aerrowRedirectHandler() {
        Navigate('/')
    }

    return (
        <div className="goods-detail-container">
            <header className="header">
                <button onClick={aerrowRedirectHandler} className="back-btn">←</button>
                <h1>Goods Detail</h1>
            </header>

            <section className="vip-info">
                <h3>{data7[6].vipName} <span className="highlight"></span></h3>
                <p>The daily income of {data7[6].vipName} product is ₹{data7[6].dayIncome}, the product cycle is {data7[6].vipDays} day, and the total income is ₹{data7[6].totalIncome}. The principal and all income will be returned in one lump sum upon maturity.</p>
                <div className="income-section">
                    <div>
                        <h3>Day Income</h3>
                        <p>₹{data7[6].dayIncome}.00</p>
                    </div>
                    <div>
                        <h3>Total Income</h3>
                        <p>₹{data7[6].totalIncome}</p>
                    </div>
                </div>
                <button onClick={() => handleInvest(data7[6].vipPrice)} className="invest-btn">₹{data7[6].vipPrice}/Invest Now</button>
            </section>

            <section className="investment-details">
                {/* <img className="product-image" src="https://via.placeholder.com/600x600" alt="Gold Bar" /> */}
                <p>Investment days: {data7[6].vipDays} Days</p>
                {/* <p>Investable Quantity: {vipDetails.investableQuantity}</p> */}
                <div className="balance-section">
                    <p>My Balance: ₹{balance.toFixed(6)}</p>
                    <button onClick={handleRecharge} className="recharge-btn">Recharge</button>
                </div>
            </section>
        </div>
    )
}

export default GoodsDetail7
