import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [showPasswords, setShowPasswords] = useState(false); 
    const navigate = useNavigate();

    const validatePhoneNumber = (phone) => /^[6-9]\d{9}$/.test(phone); // Checks for Indian 10-digit mobile numbers starting with 6-9

    const handleSignup = async (e) => {
        e.preventDefault();

        // Reset errors
        setError({});

        // Password length validation
        if (password.length < 6 || password.length > 12) {
            setError((prevError) => ({
                ...prevError,
                password: 'Password must be 6-12 characters long',
            }));
            return;
        }

        // Password match validation
        if (password !== confirmPassword) {
            setError((prevError) => ({
                ...prevError,
                confirmPassword: 'Passwords do not match',
            }));
            return;
        }

        // Phone number validation
        if (!validatePhoneNumber(phone)) {
            setError((prevError) => ({
                ...prevError,
                phone: 'Enter a valid 10-digit Indian mobile number',
            }));
            return;
        }

        // Show loading message
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:4000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, phone }),
            });

            const data = await response.json();

            if (response.ok) {
                navigate('/signin'); // Redirect to SignIn after successful signup
            } else {
                setError({ general: data.message || 'Error during signup' });
            }
        } catch (err) {
            setError({ general: 'Something went wrong. Please try again.' });
        } finally {
            setIsLoading(false); // Hide loading message after submission
        }
    };

    return (
        <div className='signinContainer'>
          

            {!otpSent ? (
                <form onSubmit={handleSignup}>
                    {/* <h2>Add Bank Details</h2> */}
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {error.email && <p style={{ color: 'red' }}>{error.email}</p>}

                    <input
                        type="text"
                        placeholder="Mobile number"
                        value={phone}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                    />
                    {error.phone && <p style={{ color: 'red' }}>{error.phone}</p>}

                    <input
                        type={showPasswords ? "text" : "password"}
                        placeholder="Password (6-12 characters)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error.password && <p style={{ color: 'red' }}>{error.password}</p>}

                    <input
                        type={showPasswords ? "text" : "password"}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    {error.confirmPassword && <p style={{ color: 'red' }}>{error.confirmPassword}</p>}

                    <label>
                        <input
                            type="checkbox"
                            checked={showPasswords}
                            onChange={() => setShowPasswords(!showPasswords)}
                        /> Show Passwords
                    </label>

                    <button type="submit" id='signup' disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Signup'}
                    </button>

                    {error.general && <p style={{ color: 'red' }}>{error.general}</p>}
                </form>
            ) : (
                <form>
                    <input
                        type='text'
                        placeholder='Enter OTP'
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />
                    {error.otp && <p style={{ color: 'red' }}>{error.otp}</p>}

                    <button type='submit'>Verify OTP</button>
                </form>
            )}
        </div>
    );
};

export default SignUp;