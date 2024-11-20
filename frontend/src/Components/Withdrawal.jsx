import React, { useState, useEffect } from "react";
import "./Withdraw.css";
import { useNavigate } from "react-router-dom";

const Withdraw = () => {
  const Navigate = useNavigate();
  const [phone, setPhone] = useState();
  const [amounts, setAmounts] = useState(0); // Assuming amounts is initially 0
  const [error, setError] = useState(null);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [warning, setWarning] = useState(""); // For showing warning
  const userPhone = localStorage.getItem("userPhone");

  // -----------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const response = await fetch(`http://localhost:4000/wallet/${userPhone}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json", // If required
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch wallet data");
        }

        const data = await response.json();
        setAmounts(data.amount || 0); // Update state with fetched amount
      } catch (error) {
        setError("Error fetching wallet data");
      }
    };

    fetchWallet();
  }, [userPhone]); // Trigger fetch when phone changes

  if (error) {
    return <p>{error}</p>; // Show error message if any
  }

  if (amounts === null) {
    return <p>Loading...</p>; // Show loading state while fetching
  }

  // -----------------------------------------------------------------------------------------------------------------

  const handleWithdrawChange = (e) => {
    const value = e.target.value;
    setWithdrawAmount(value);

    // Check if the entered amount exceeds available balance
    if (value > amounts) {
      setWarning("The withdrawal amount cannot exceed your balance.");
    } else {
      setWarning(""); // Clear warning if amount is valid
    }
  };

  const handleSubmit = async () => {
    if (withdrawAmount > amounts || withdrawAmount <= 0) {
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/withdraw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: userPhone, // User's phone from localStorage
          withdrawAmount: withdrawAmount,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit withdrawal request.");
      }

      const result = await response.json();
      alert(result.message); // Show success message
      setWithdrawAmount(""); // Reset the withdrawal amount
      Navigate("/"); // Redirect to home after successful withdrawal
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  function backtohome() {
    Navigate("/");
  }

  return (
    <div className="withdraw-container">
      <header className="withdraw-header">
        <span onClick={backtohome} className="back-arrow">
          ←
        </span>
        <h1>Withdraw</h1>
      </header>

      <div className="balance-section">
        <div className="balance-card">
          <span>My Balance</span>
          <span className="balance-amount">₹{amounts}</span>
        </div>
        <div className="action-buttons">
          <button className="withdraw-button">Withdraw</button>
        </div>
      </div>

      <div className="withdraw-input">
        <label htmlFor="amount">Withdrawal amount</label>
        <input
          type="number"
          id="amount"
          placeholder="₹ Please enter the withdrawal amount"
          value={withdrawAmount}
          onChange={handleWithdrawChange}
        />
        {/* Show warning message if applicable */}
        {warning && <p style={{ color: "red" }} className="warning-text">{warning}</p>}
      </div>

      {/* Disable button if withdrawal amount exceeds balance */}
      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={withdrawAmount > amounts || withdrawAmount <= 0}
      >
        Submit
      </button>
    </div>
  );
};

export default Withdraw;


// ---------------------------------------------------------------------------------------------------------------------------------
// import React, { useContext, useState, useEffect } from "react";
// import "./Withdraw.css";
// import { useNavigate } from "react-router-dom";

// const Withdraw = () => {
//   const Navigate = useNavigate();
//   const [phone, setPhone] = useState();
//   const [amounts, setAmounts] = useState(0); // Assuming amounts is initially 0
//   const [error, setError] = useState(null);
//   const [withdrawAmount, setWithdrawAmount] = useState("");
//   const [warning, setWarning] = useState(""); // For showing warning
//   const userPhone = localStorage.getItem("userPhone", phone);

//   // -----------------------------------------------------------------------------------------------------------------
//   useEffect(() => {
//     const fetchWallet = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/wallet/${userPhone}`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json", // If required
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch wallet data");
//         }

//         const data = await response.json();
//         setAmounts(data.amount || 0); // Update state with fetched amount
//       } catch (error) {
//         setError("Error fetching wallet data");
//       }
//     };

//     fetchWallet();
//   }, [phone]); // Trigger fetch when phone changes

//   if (error) {
//     return <p>{error}</p>; // Show error message if any
//   }

//   if (amounts === null) {
//     return <p>Loading...</p>; // Show loading state while fetching
//   }

//   // -----------------------------------------------------------------------------------------------------------------

//   const handleWithdrawChange = (e) => {
//     const value = e.target.value;
//     setWithdrawAmount(value);

//     // Check if the entered amount exceeds available balance
//     if (value > amounts) {
//       setWarning("The withdrawal amount cannot exceed your balance.");
//     } else {
//       setWarning(""); // Clear warning if amount is valid
//     }
//   };

//   const handleSubmit = () => {
//     if (withdrawAmount <= amounts) {
//       alert("Withdrawal successful!"); // Replace this with your API call logic
//     }
//   };

//   function backtohome() {
//     Navigate("/");
//   }

//   return (
//     <div className="withdraw-container">
//       <header className="withdraw-header">
//         <span onClick={backtohome} className="back-arrow">
//           ←
//         </span>
//         <h1>Withdraw</h1>
//       </header>

//       <div className="balance-section">
//         <div className="balance-card">
//           <span>My Balance</span>
//           <span className="balance-amount">₹{amounts}</span>
//         </div>
//         <div className="action-buttons">
//           {/* <button className="recharge-button">Recharge</button> */}
//           <button className="withdraw-button">Withdraw</button>
//         </div>
//       </div>

//       <div className="withdraw-input">
//         <label htmlFor="amount">Withdrawal amount</label>
//         <input
//           type="number"
//           id="amount"
//           placeholder="₹ Please enter the withdrawal amount"
//           value={withdrawAmount}
//           onChange={handleWithdrawChange}
//         />
//         {/* Show warning message if applicable */}
//         {warning && <p style={{ color: 'red' }} className="warning-text">{warning}</p>}
//       </div>

//       {/* Disable button if withdrawal amount exceeds balance */}
//       <button
//         className="submit-button"
//         onClick={handleSubmit}
//         disabled={withdrawAmount > amounts || withdrawAmount <= 0}
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default Withdraw;



// // --------------------------------------------------------------------------------------------------------

// // import React, { useContext, useState, useEffect } from "react";
// // import "./Withdraw.css";
// // import { useNavigate } from "react-router-dom";


// // const Withdraw = () => {
// //   const Navigate = useNavigate()
// //   const [phone, setPhone] = useState()
// //   const [amounts, setAmounts] = useState([]);
// //   const [error, setError] = useState(null);
// //   const [withdrawAmount, setWithdrawAmount] = useState("")
// //   const userPhone = localStorage.getItem('userPhone', phone)


// //   // -----------------------------------------------------------------------------------------------------------------
// //   useEffect(() => {
// //     // console.log("Phone value: ", phone);
// //     const fetchWallet = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:4000/wallet/${userPhone}`, {
// //           method: 'GET',
// //           headers: {
// //             'Content-Type': 'application/json', // If required
// //           },

// //         });
// //         // console.log(response);

// //         if (!response.ok) {
// //           throw new Error('Failed to fetch wallet data');
// //         }

// //         const data = await response.json();
// //         // console.log(data); // Check if data is correct
// //         setAmounts(data.amount); // Update state with fetched amount
// //       } catch (error) {
// //         // console.error('Error fetching wallet data:', error);
// //         setError('Error fetching wallet data');
// //       }
// //     };

// //     fetchWallet();
// //   }, [phone]); // Trigger fetch when phone changes

// //   if (error) {
// //     return <p>{error}</p>; // Show error message if any
// //   }

// //   if (amounts === null) {
// //     return <p>Loading...</p>; // Show loading state while fetching
// //   }


// //   // -----------------------------------------------------------------------------------------------------------------


// //   function backtohome() {
// //     Navigate('/')
// //   }

// //   return (
// //     <div className="withdraw-container">
// //       <header className="withdraw-header">
// //         <span onClick={backtohome} className="back-arrow">←</span>
// //         <h1>Withdraw</h1>
// //       </header>

// //       <div className="balance-section">
// //         <div className="balance-card">
// //           <span>My Balance</span>
// //           <span className="balance-amount">₹{amounts}</span>
// //         </div>
// //         <div className="action-buttons">
// //           {/* <button className="recharge-button">Recharge</button> */}
// //           <button className="withdraw-button">Withdraw</button>
// //         </div>
// //       </div>

// //       <div className="withdraw-input">
// //         <label htmlFor="amount">Withdrawal amount</label>



// //         <input
// //           type="number"
// //           id="amount"
// //           placeholder="₹ Please enter the withdrawal amount"
// //           value={withdrawAmount}
// //           onChange={(e) => setWithdrawAmount(e.target.value)}
// //         />
// //       </div>

// //       <button className="submit-button" >Submit</button>

// //     </div>
// //   );
// // };

// // export default Withdraw;
// // --------------------------------------------------------------------------------------------------------