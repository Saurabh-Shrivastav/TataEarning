import React from "react";
import "./Withdraw.css";
import {useNavigate} from "react-router-dom";

const Withdraw = () => {
    const Navigate = useNavigate()

    function backtohome() {
        Navigate('/')
    }

  return (
    <div className="withdraw-container">
      <header className="withdraw-header">
        <span onClick={backtohome} className="back-arrow">←</span>
        <h1>Withdraw</h1>
      </header>
      
      <div className="balance-section">
        <div className="balance-card">
          <span>My Balance</span>
          <span className="balance-amount">₹10,000</span>
        </div>
        <div className="action-buttons">
          <button className="recharge-button">Recharge</button>
          <button className="withdraw-button">Withdraw</button>
        </div>
      </div>
      
      <div className="withdraw-input">
        <label htmlFor="amount">Withdrawal amount</label>
        <input
          type="number"
          id="amount"
          placeholder="₹ Please enter the withdrawal amount"
        />
      </div>
      
      <button className="submit-button">Submit</button>
      
      <div className="withdrawal-tips">
        <h2>Withdrawal tips:</h2>
        <ul>
          <li>Members can apply for USDT withdrawal</li>
          <li>1: Withdrawal time: 10:00-18:00 (no withdrawals from Saturday to Sunday)</li>
          <li>2: Minimum withdrawal amount ₹260</li>
          <li>3: After the withdrawal is completed, funds will be credited within 6-48 hours. (Under special circumstances, within 72 hours)</li>
          <li>4: Withdraw once a day. Tax: 10%</li>
          <li>5: The withdrawal function can only be activated after you or your subordinate members recharge.</li>
        </ul>
      </div>
    </div>
  );
};

export default Withdraw;
