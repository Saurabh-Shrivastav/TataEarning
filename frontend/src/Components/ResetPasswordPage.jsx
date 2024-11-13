import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const ResetPasswordPage = () => {
    const { token } = useParams(); // URL se token extract karte hain
    const [isValid, setIsValid] = useState(null);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history = useHistory();

    useEffect(() => {
        // Token validation ke liye backend request
        fetch('/api/validate-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.isValid) {
                    setIsValid(true);
                } else {
                    setIsValid(false);
                }
            })
            .catch((error) => {
                console.error('Error validating token:', error);
                setIsValid(false);
            });
    }, [token]);

    const handlePasswordReset = () => {
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        fetch('/api/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token, newPassword }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message === 'Password reset successfully') {
                    alert('Password reset successfully');
                    history.push('/login'); // After success, redirect to login
                }
            })
            .catch((error) => {
                console.error('Error resetting password:', error);
            });
    };

    if (isValid === null) {
        return <p>Loading...</p>;
    }

    if (!isValid) {
        return <p>Invalid or expired reset link</p>;
    }

    return (
        <div>
            <h2>Reset Your Password</h2>
            <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handlePasswordReset}>Reset Password</button>
        </div>
    );
};

export default ResetPasswordPage;
