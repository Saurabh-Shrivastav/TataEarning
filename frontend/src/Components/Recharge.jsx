import React, { useState } from "react";

const Recharge = () => {
    const [balance, setBalance] = useState(10000);
    const [amount, setAmount] = useState("");
    const [selectedPayment, setSelectedPayment] = useState("No. A");

    const handleAmountClick = (value) => {
        setAmount(value);
    };

    const handlePaymentSelect = (method) => {
        setSelectedPayment(method);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Recharge Amount: ₹${amount}\nPayment Method: ${selectedPayment}`);
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "500px", margin: "auto" }}>
            <h2 style={{ textAlign: "center" }}>Recharge</h2>

            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <div style={{
                    backgroundColor: "#5db1f5",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    flexGrow: 1,
                    textAlign: "center"
                }}>
                    <h3>My Balance</h3>
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>₹{balance.toLocaleString()}</p>
                </div>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "20px",
                fontWeight: "bold"
            }}>
                <button style={{
                    backgroundColor: "#e5f7d4",
                    color: "#4caf50",
                    padding: "10px 20px",
                    borderRadius: "20px",
                    border: "none"
                }}>
                    Recharge
                </button>
                <button style={{
                    backgroundColor: "#d8e1ff",
                    color: "#5c6bc0",
                    padding: "10px 20px",
                    borderRadius: "20px",
                    border: "none"
                }}>
                    Withdraw
                </button>
            </div>

            <h4>Balance Recharge</h4>
            <input
                type="text"
                placeholder="₹ Please enter the recharge amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "20px",
                    fontSize: "16px",
                    border: "1px solid #ddd",
                    borderRadius: "5px"
                }}
            />

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                gap: "10px",
                marginBottom: "20px"
            }}>
                {[500, 1600, 2600, 5200, 9300, 14352, 18590, 22000, 45000].map((value) => (
                    <button
                        key={value}
                        onClick={() => handleAmountClick(value)}
                        style={{
                            padding: "10px",
                            fontSize: "16px",
                            borderRadius: "5px",
                            border: "1px solid #ddd",
                            backgroundColor: amount === value ? "#5db1f5" : "#f9f9f9",
                            color: amount === value ? "white" : "black",
                            cursor: "pointer"
                        }}
                    >
                        ₹ {value.toLocaleString()}
                    </button>
                ))}
            </div>

            <h4>Payment Method</h4>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "20px",
                flexWrap: "wrap"
            }}>
                {["No. A", "No. B", "No. C"].map((method) => (
                    <button
                        key={method}
                        onClick={() => handlePaymentSelect(method)}
                        style={{
                            padding: "10px 20px",
                            fontSize: "16px",
                            borderRadius: "5px",
                            border: "1px solid #ddd",
                            backgroundColor: selectedPayment === method ? "black" : "white",
                            color: selectedPayment === method ? "white" : "black",
                            cursor: "pointer",
                            marginBottom: "10px"
                        }}
                    >
                        {method}
                    </button>
                ))}
            </div>

            <button
                onClick={handleSubmit}
                style={{
                    width: "100%",
                    padding: "15px",
                    fontSize: "16px",
                    backgroundColor: "#5db1f5",
                    color: "white",
                    borderRadius: "5px",
                    border: "none",
                    marginBottom: "10px",
                    cursor: "pointer"
                }}
            >
                Submit
            </button>

            <button
                style={{
                    width: "100%",
                    padding: "15px",
                    fontSize: "16px",
                    backgroundColor: "#007bff",
                    color: "white",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer"
                }}
            >
                USDT Comming Soon...
            </button>

            {/* <div style={{ color: "red", fontSize: "14px", marginTop: "20px" }}>
                <p><strong>Recharge Tips:</strong></p>
                <p>Members can use USDT to recharge.</p>
                <p>1: Minimum recharge of ₹200.</p>
                <p>2: After the recharge is successful, if the balance of the application account is not reached within 20 minutes, please contact support.</p>
            </div> */}

            {/* Media Query Styles */}
            <style>
                {`
          @media (max-width: 600px) {
            div {
              padding: 10px;
            }
            h2, h3 {
              font-size: 18px;
            }
            input[type="text"] {
              font-size: 14px;
            }
            button {
              font-size: 14px;
              padding: 8px;
            }
            .recharge-amount-buttons {
              grid-template-columns: repeat(2, 1fr);
            }
            .payment-buttons {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
            </style>
        </div>
    );
};

export default Recharge;
