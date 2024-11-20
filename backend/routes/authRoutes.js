// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const User = require('../models/userModel');
// const nodemailer = require('nodemailer');

// // Generate OTP and send email
// const sendOTP = async (email) => {
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
//     // Send email with nodemailer
//     // (add transporter config)
//     return otp;
// };

// // Signup Route

// router.post('/signup', async (req, res) => {
//     const { email, password, mobile } = req.body;
//     try {
//         if (!email || !password || !mobile) {
//             return res.status(400).json({ error: "All fields are required" });
//         }

//         console.log("Signup request data:", req.body); // Log request body

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const otp = await sendOTP(email);

//         const user = new User({ email, password: hashedPassword, mobile, otp });
//         await user.save();

//         res.status(200).json({ message: "OTP sent to email" });
//     } catch (error) {
//         console.error("Error in /signup route:", error); // Log the actual error
//         res.status(500).json({ error: "Error signing up" });
//     }
// });


// // router.post('/signup', async (req, res) => {
// //     const { email, password, mobile } = req.body;
// //     try {
// //         const hashedPassword = await bcrypt.hash(password, 10);
// //         const otp = await sendOTP(email);

// //         const user = new User({ email, password: hashedPassword, mobile, otp });
// //         await user.save();
// //         res.status(200).json({ message: "OTP sent to email" });
// //     } catch (error) {
// //         res.status(500).json({ error: "Error signing up" });
// //     }
// // });

// // Verify OTP
// router.post('/verify-otp', async (req, res) => {
//     const { email, otp } = req.body;
//     if (!email || !otp) {
//         return res.status(400).json({ error: "Email and OTP are required" });
//     }

//     const user = await User.findOne({ email });
//     if (user && user.otp === otp) {
//         user.isVerified = true;
//         user.otp = null;
//         await user.save();
//         res.status(200).json({ message: "User verified successfully" });
//     } else {
//         res.status(400).json({ error: "Invalid OTP" });
//     }
// });


// // router.post('/verify-otp', async (req, res) => {
// //    const { email, otp } = req.body;
// //    const user = await User.findOne({ email });
// //    if (user && user.otp === otp) {
// //       user.isVerified = true;
// //       user.otp = null;
// //       await user.save();
// //       res.status(200).json({ message: "User verified successfully" });
// //    } else {
// //       res.status(400).json({ error: "Invalid OTP" });
// //    }
// // });

// // Login Route
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (user && await bcrypt.compare(password, user.password)) {
//         res.status(200).json({ message: "Login successful" });
//     } else {
//         res.status(400).json({ error: "Invalid credentials" });
//     }
// });

// module.exports = router;

