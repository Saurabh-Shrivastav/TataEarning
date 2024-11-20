import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

function SignIn({ setIsAuthenticated }) {
  const [phone, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ phone: '', email: '', password: '', general: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError({ phone: '', email: '', password: '', general: '' });

    if (!phone) {
      setError((prevError) => ({ ...prevError, phone: 'Mobile number is required' }));
      return;
    }
    if (!email) {
      setError((prevError) => ({ ...prevError, email: 'Email is required' }));
      return;
    }
    if (!password) {
      setError((prevError) => ({ ...prevError, password: 'Password is required' }));
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:4000/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userPhone', phone);
        localStorage.setItem('userEmail', email);
        setIsAuthenticated(true);
        navigate('/');
      } else {
        if (data.message) {
          if (data.message.includes('mobile number')) {
            setError((prevError) => ({ ...prevError, phone: data.message }));
          } else if (data.message.includes('email')) {
            setError((prevError) => ({ ...prevError, email: data.message }));
          } else if (data.message.includes('password')) {
            setError((prevError) => ({ ...prevError, password: data.message }));
          }
        } else {
          setError({ general: 'Invalid credentials' });
        }
      }
    } catch (err) {
      setError({ general: 'Something went wrong. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };



  const handleForgotPasswordRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/forgotPassword', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: resetEmail })
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error sending reset email');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    try {
      const response = await fetch(`http://localhost:4000/reset-password/${resetToken}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPassword })
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error resetting password');
    }
  };


  useEffect(()=> {
    const userPhone = localStorage.getItem('userPhone', phone)

    if (userPhone) {
      fetch('http://localhost:4000/api/save-phone', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ phone: userPhone }),
      })
          .then(response => response.json())
          .then(data => {
              // console.log('Phone saved successfully:', data);
          })
          .catch(error => {
              console.error('Error saving phone:', error);
          });
  } else {
      // console.error('No phone found in localStorage');
  }
  })

  return (
    <div>

      {showForgotPassword ? (
        <div>
          <h2>Forgot Password</h2>
          <form onSubmit={handleForgotPasswordRequest}>
            <input
              type="email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              placeholder="Enter your Email"
              required
            />
            <button type="submit">Send Reset Email</button>
          </form>

          <form onSubmit={handleResetPassword}>
            <input
              type="text"
              value={resetToken}
              onChange={(e) => setResetToken(e.target.value)}
              placeholder="Enter reset token"
              required
            />
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter New Password"
              required
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm New Password"
              required
            />
            <button type="submit">Reset Password</button>
          </form>
          <button onClick={() => setShowForgotPassword(false)}>Back to Login</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            value={phone}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter Mobile Number"
            required
          />
          {error.phone && <p style={{ color: 'red' }}>{error.phone}</p>}

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            required
          />
          {error.email && <p style={{ color: 'red' }}>{error.email}</p>}

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            required
          />
          {error.password && <p style={{ color: 'red' }}>{error.password}</p>}

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Login'}
          </button>

          {error.general && <p style={{ color: 'red' }}>{error.general}</p>}
          <button type="button" onClick={() => setShowForgotPassword(true)}>
            Forgot Password?
          </button>
        </form>
      )}
      {message && <p>{message}</p>}
    </div>
  );
}

export default SignIn;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SignIn.css';

// function SignIn({ setIsAuthenticated }) {
//   const [phone, setMobile] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState({ phone: '', email: '', password: '', general: '' });
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Reset errors
//     setError({ phone: '', email: '', password: '', general: '' });

//     // Validate inputs before making the request
//     if (!phone) {
//       setError((prevError) => ({ ...prevError, phone: 'Mobile number is required' }));
//       return;
//     }
//     if (!email) {
//       setError((prevError) => ({ ...prevError, email: 'Email is required' }));
//       return;
//     }
//     if (!password) {
//       setError((prevError) => ({ ...prevError, password: 'Password is required' }));
//       return;
//     }

//     // Show loading message
//     setIsLoading(true);

//     try {
//       const response = await fetch('http://localhost:4000/signin', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ phone, email, password }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userPhone', phone);
//         localStorage.setItem('userEmail', email);
//         setIsAuthenticated(true);
//         navigate('/'); // Redirect to home after login
//       } else {
//         // Handle specific errors based on server response
//         if (data.message) {
//           if (data.message.includes('mobile number')) {
//             setError((prevError) => ({ ...prevError, phone: data.message }));
//           } else if (data.message.includes('email')) {
//             setError((prevError) => ({ ...prevError, email: data.message }));
//           } else if (data.message.includes('password')) {
//             setError((prevError) => ({ ...prevError, password: data.message }));
//           }
//         } else {
//           setError({ general: 'Invalid credentials' });
//         }
//       }
//     } catch (err) {
//       setError({ general: 'Something went wrong. Please try again.' });
//     } finally {
//       setIsLoading(false); // Hide loading message after submission
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <input
//         type="text"
//         value={phone}
//         onChange={(e) => setMobile(e.target.value)}
//         placeholder="Enter Mobile Number"
//         required
//       />
//       {error.phone && <p style={{ color: 'red' }}>{error.phone}</p>}

//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter your Email"
//         required
//       />
//       {error.email && <p style={{ color: 'red' }}>{error.email}</p>}

//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Enter your Password"
//         required
//       />
//       {error.password && <p style={{ color: 'red' }}>{error.password}</p>}

//       <button type="submit" disabled={isLoading}>
//         {isLoading ? 'Loading...' : 'Login'}
//       </button>

//       {error.general && <p style={{ color: 'red' }}>{error.general}</p>}
//     </form>
//   );
// }

// export default SignIn;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SignIn.css'

// function SignIn({ setIsAuthenticated }) {
//   const [phone, setMobile] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     localStorage.setItem('userPhone',phone)
//     localStorage.setItem('userEmail',email)
//     alert('Login successful')

// try {

//       const response = await fetch('http://localhost:4000/signin', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ phone, email, password }),
//     });
//     const data = await response.json();

//     if (response.ok) {
//       localStorage.setItem('token', data.token);
//       setIsAuthenticated(true); 
//       navigate('/');  // Redirect to home after login
//     } else {
//       alert(data.message);
// setError(data.message || 'Invalid credentials');
//     }
  
// } catch (err) {
//   setError('Something went wrong. Please try again.');
// }


//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <input type="text" value={phone} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Mobile Number" required/>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" required />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" required />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default SignIn;


// function SignIn({onLogin}) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [activeTab, setActiveTab] = useState('signin');
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   Handle form submission using React Hook Form
//   const Submit = async (data) => {
//     const { email, password } = data;
    
//     try {
//       Send POST request to backend SignIn API
//       const response = await axios.post('http://localhost:5000/signin36', { email, password });
      
//       If SignIn is successful, show success alert
//       alert(response.data.message);
//     } catch (error) {
//       // If there's an error (e.g., invalid credentials), show error alert
//       if (error.response && error.response.data.message) {
//         alert(error.response.data.message); // Backend error message
//       } else {
//         alert('Something went wrong. Please try again.'); // Generic error message
//       }
//     }
//   };

  

//   return (
//     <div className="signin-container">
//       <div className="signin-header">
//         <h2>Sign in to account</h2>
//         <p>Enjoy the fly and passion of investing</p>
//       </div>
//       <div className="tabs">
//         <button
//           className={activeTab === 'signin' ? 'active' : ''}
//           onClick={() => setActiveTab('signin')}
//         >
//           Sign in
//         </button>
//         <button
//           className={activeTab === 'signup' ? 'active' : ''}
//           onClick={() => setActiveTab('signup')}
//         >
//           Sign up
//         </button>
//       </div>

//       {activeTab === 'signin' && (
//         <form className="signin-form" onSubmit={handleSubmit(Submit)}>
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             autoComplete="username"  
//             {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email format' } })}
//             // value={email}
//             // onChange={(e) => setEmail(e.target.value)} 
//           />
//           {errors.email && <span className="error-message">{errors.email.message}</span>}
          
//           <label>Password</label>
//           <input
//             type="password"
//             // value={password}
//             placeholder="Enter your password"
//              autoComplete="current-password"
//             // onChange={(e) => setPassword(e.target.value)} 
//             {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters long' } })}
//           />
//           {errors.password && <span className="error-message">{errors.password.message}</span>}

//           <button type="submit" className="signin-button">Sign in</button>
//           <a href="#" className="forgot-password">Forgot the password?</a>
//         </form>
//       )}

//       {activeTab === 'signup' && (
//         <div>
//           {/* You can implement signup form here */}
//           <p>Sign up form will go here...</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SignIn;









// function SignIn() {
//   const [activeTab, setActiveTab] = useState('signin');
  

//   return (
//     <div className="signin-container">
//       <div className="signin-header">
//         <h2>Sign in to account</h2>
//         <p>Enjoy the fly and passion of investing</p>
//       </div>
//       <div className="tabs">
//         <button
//           className={activeTab === 'signin' ? 'active' : ''}
//           onClick={() => setActiveTab('signin')}
//         >
//           Sign in
//         </button>
//         <button
//           className={activeTab === 'signup' ? 'active' : ''}
//           onClick={() => setActiveTab('signup')}
//         >
//           Sign up
//         </button>
//       </div>
//       <form className="signin-form">
//         <label>Email</label>
//         <input type="email" placeholder="Enter your email" />
//         <label>Password</label>
//         <input type="password" placeholder="Enter your password" />
//         <button type="submit" className="signin-button">Sign in</button>
//         <a href="#" className="forgot-password">Forgot the password?</a>
//       </form>
//     </div>
//   );
// }

// export default SignIn;
