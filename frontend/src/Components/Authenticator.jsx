
import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Authenticator = ({ setIsAuthenticated }) => {
  const [isSignIn, setIsSignIn] = useState(true); // State to toggle between SignIn and SignUp

  return (
    <div>
      <h2>{isSignIn ? 'SignIn' : 'SignUp'}</h2>
      {isSignIn ? (
        <SignIn setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <SignUp setIsAuthenticated={setIsAuthenticated} />
      )}
      <button onClick={() => setIsSignIn(!isSignIn)}>
        {isSignIn ? 'Switch to SignUp' : 'Switch to SignIn'}
      </button>
    </div>
  );
};

export default Authenticator;



// import React, { useState } from 'react';
// import SignIn from './SignIn'  // Import the SignIn component
// import SignUp from './SignUp';  // Import the SignUp component
// import { useNavigate } from 'react-router-dom';

// const Authenticator = () => {
//     const [activeTab, setActiveTab] = useState('SignIn');   // State to manage the active tab
//     const navigate = useNavigate();


//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//         navigate(`/${tab.toLowerCase()}`); // Navigate to the respective route
//     };











//     return (
//         <div className="auth-container">
//             <div className="tabs">
//                 {/* Tab buttons for Sign In and Sign Up */}
//                 <button
//                     className={activeTab === 'SignIn' ? 'active' : ''}
//                     onClick={() => handleTabChange('SignIn')}
//                 >
//                     Sign In
//                 </button>
//                 <button
//                     className={activeTab === 'SignUp' ? 'active' : ''}
//                     onClick={() => handleTabChange('SignUp')}
//                 >
//                     Sign Up
//                 </button>
//             </div>

//             <div className="auth-content">
//                 {/* Conditionally render the SignIn or SignUp component */}
//                 {activeTab === 'SignIn' ? <SignIn /> : <SignUp />}
//             </div>
//         </div>



//         // <div className="auth-container">
//         //     <div className="signin-header">
//         //         <h2>Sign up for an account</h2>
//         //         <p>Enjoy the fly and passion of investing</p>
//         //     </div>

//         //     <div className="tabs">
//         //         <button
//         //             className={activeTab === 'SignIn' ? 'active' : ''}
//         //             onClick={() => setActiveTab('SignIn')}
//         //         >
//         //             Sign In
//         //         </button>
//         //         <button
//         //             className={activeTab === 'SignUp' ? 'active' : ''}
//         //             onClick={() => setActiveTab('SignUp')}
//         //         >
//         //             Sign Up
//         //         </button>
//         //     </div>

//         //     <div className="auth-content">
//         //         {/* Pass the SignIn and signup functions as props */}
//         //         {activeTab === 'SignIn' ?
//         //             <SignIn onSignIn={handleSignIn} /> :
//         //             <SignUp onSignup={handleSignup} />}
//         //     </div>
//         // </div>
//     );
// }

// export default Authenticator;
