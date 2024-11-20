import React, { useContext, useEffect, useState } from 'react'
import './GoodsDetail.css'; // Import the CSS
import { useNavigate } from 'react-router-dom';
import AppContext from '../Context';

function GoodDetail10() {

    let data10 = useContext(AppContext)
    // console.log("data",data10[9].events[0].vipDays);
    const navigate = useNavigate();



    const [balance, setBalance] = useState(0)

    useEffect(() => {
        setBalance(0)
    }, [])

    const handleRecharge = () => {
        alert("Redirect to recharge Page...")
    }

    const handleInvest = (amount) => {
        navigate('/payment', { state: { amount } });
        // console.log(amount);
    };


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
                <h2>{data10[9].events[0].vipName} <span className="highlight"></span></h2>
                <p>The daily income of {data10[9].events[0].vipName} product is ₹{data10[9].events[0].dayIncome}, the product cycle is {data10[9].events[0].vipDays} day, and the total income is ₹{data10[9].events[0].totalIncome}. The principal and all income will be returned in one lump sum upon maturity.</p>
                <div className="income-section">
                    <div>
                        <h3>Day Income</h3>
                        <p>₹{data10[9].events[0].dayIncome}.00</p>
                    </div>
                    <div>
                        <h3>Total Income</h3>
                        <p>₹{data10[9].events[0].totalIncome}</p>
                    </div>
                </div>
                <button onClick={() => handleInvest(data10[9].events[0].vipPrice)} className="invest-btn">₹{data10[9].events[0].vipPrice}/Invest Now</button>
            </section>

            <section className="investment-details">
                {/* <img className="product-image" src="https://via.placeholder.com/400x200" alt="Gold Bar" /> */}
                <p>Investment days: {data10[9].events[0].vipDays} Days</p>
                {/* <p>Investable Quantity: {vipDetails.investableQuantity}</p> */}
                <div className="balance-section">
                    <p>My Balance: ₹{balance.toFixed(3)}</p>
                    <button onClick={handleRecharge} className="recharge-btn">Recharge</button>
                </div>
            </section>
        </div>
    )
}

export default GoodDetail10
