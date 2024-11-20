import React, { useState } from 'react';

function BankForm() {
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [confirmAccountNumber, setConfirmAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if already submitting
    if (isSubmitting) return;

    setIsSubmitting(true);
    const token = localStorage.getItem('token');
    // console.log("token number",token);
    
    

    const response = await fetch('https://tataearning.onrender.com/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ bankName, accountNumber, confirmAccountNumber, ifscCode }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      alert(data.message);
      // Clear inputs after successful submission
      setBankName('');
      setAccountNumber('');
      setConfirmAccountNumber('');
      setIfscCode('');
    } else {
      alert(data.message);
      console.log(data.message);
      
    }

    setIsSubmitting(false); // Enable button again after submission
  };

  // Function to handle only numeric input
  const handleNumericInput = (e, setFunction) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setFunction(value); // Set only if value is numeric
    }
  };

  return (
    <div>
      <h2>Add Bank Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Bank Name"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Account Number"
          value={accountNumber}
          onChange={(e) => handleNumericInput(e, setAccountNumber)}
        />
        <input
          type="text"
          placeholder="Confirm Account Number"
          value={confirmAccountNumber}
          onChange={(e) => handleNumericInput(e, setConfirmAccountNumber)}
        />
        <input
          type="text"
          placeholder="IFSC Code"
          value={ifscCode}
          onChange={(e) => setIfscCode(e.target.value)}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default BankForm;


// import React, { useState } from 'react';

// function BankForm() {
//   const [bankName, setBankName] = useState('');
//   const [accountNumber, setAccountNumber] = useState('');
//   const [confirmAccountNumber, setConfirmAccountNumber] = useState('');
//   const [ifscCode, setIfscCode] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');

//     const response = await fetch('https://tatawntech-g9is.onrender.com/save', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         // 'Authorization': token,
//         'Authorization': `Bearer ${localStorage.getItem('token')}`,
//       },
//       body: JSON.stringify({ bankName, accountNumber, confirmAccountNumber, ifscCode }),
//     });

//     const data = await response.json();
//     console.log(data);
    
//     if (response.ok) alert(data.message);
//     else alert(data.message);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Bank Name" onChange={(e) => setBankName(e.target.value)} />
//       <input type="text" placeholder="Account Number" onChange={(e) => setAccountNumber(e.target.value)} />
//       <input type="text" placeholder="Confirm Account Number" onChange={(e) => setConfirmAccountNumber(e.target.value)} />
//       <input type="text" placeholder="IFSC Code" onChange={(e) => setIfscCode(e.target.value)} />
//       <button type="submit">Save Bank Details</button>
//     </form>
//   );
// }

// export default BankForm;

