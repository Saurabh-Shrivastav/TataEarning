import React, { useContext, useEffect, useState } from 'react'
import './GoodsDetail.css'; // Import the CSS
import { useNavigate } from 'react-router-dom';
import AppContext from '../Context';

function GoodsDetail8() {
    let data8 = useContext(AppContext)
    // console.log(data8);

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
                <h3>{data8[7].vipName} <span className="highlight"></span></h3>
                <p>The daily income of {data8[7].vipName} product is ₹{data8[7].dayIncome}, the product cycle is {data8[7].vipDays} day, and the total income is ₹{data8[7].totalIncome}. The principal and all income will be returned in one lump sum upon maturity.</p>
                <div className="income-section">
                    <div>
                        <h3>Day Income</h3>
                        <p>₹{data8[7].dayIncome}.00</p>
                    </div>
                    <div>
                        <h3>Total Income</h3>
                        <p>₹{data8[7].totalIncome}</p>
                    </div>
                </div>
                <button onClick={() => handleInvest(data8[7].vipPrice)} className="invest-btn">₹{data8[7].vipPrice}/Invest Now</button>
            </section>

            <section className="investment-details">
                {/* <img className="product-image" src="https://via.placeholder.com/700x700" alt="Gold Bar" /> */}
                <p>Investment days: {data8[7].vipDays} Days</p>
                {/* <p>Investable Quantity: {vipDetails.investableQuantity}</p> */}
                <div className="balance-section">
                    <p>My Balance: ₹{balance.toFixed(7)}</p>
                    <button onClick={handleRecharge} className="recharge-btn">Recharge</button>
                </div>
            </section>
        </div>
    )
}

export default GoodsDetail8
