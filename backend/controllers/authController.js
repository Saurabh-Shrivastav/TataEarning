// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/userModel');
// const nodemailer = require('nodemailer');

// // Utility to generate random OTP
// const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// // Utility to send OTP via email using Nodemailer
// const sendOTP = async (email, otp) => {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS,
//         },
//     });

//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: 'Your OTP for Signup',
//         text: `Your OTP is ${otp}`,
//     };

//     return transporter.sendMail(mailOptions);
// };

// // Signup Controller
// exports.signup = async (req, res) => {
//     const { email, password, confirmPassword, mobile } = req.body;

//     if (password !== confirmPassword) {
//         return res.status(400).json({ message: 'Passwords do not match' });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//         return res.status(400).json({ message: 'User already exists' });
//     }

//     const otp = generateOTP();
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//         email,
//         mobile,
//         password: hashedPassword,
//         otp,
//         otpExpires: Date.now() + 3600000, // OTP valid for 1 hour
//     });

//     try {
//         await newUser.save();
//         await sendOTP(email, otp);
//         res.status(201).json({ message: 'OTP sent to your email' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error during signup' });
//     }
// };

// // OTP Verification Controller
// exports.verifyOTP = async (req, res) => {
//     const { email, otp } = req.body;

//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ message: 'User not found' });
//         }

//         if (user.otp !== otp || user.otpExpires < Date.now()) {
//             return res.status(400).json({ message: 'Invalid or expired OTP' });
//         }

//         user.otp = undefined;
//         user.otpExpires = undefined;
//         await user.save();

//         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//             expiresIn: '5h',
//         });

//         res.status(200).json({ message: 'OTP verified successfully, user registered', token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error during OTP verification' });
//     }
// };

// // Signin Controller
// exports.signin = async (req, res) => {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) {
//         return res.status(400).json({ message: 'User not found' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//         return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//         expiresIn: '5h',
//     });

//     res.status(200).json({ message: 'Login successful', token });
// };
