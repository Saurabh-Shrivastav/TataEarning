const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
// const { log } = require('console');
require('dotenv').config();

const app = express();
const PORT = 4000;
// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
// mongoose.connect(process.env.MONGODB_URI,)
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('MongoDB connection error:', err));
//     const db = mongoose.connection.db;
//     await db.collection("users").createIndex({ email: 1 }, { unique: true });
//     await db.collection("users").createIndex({ phone: 1 }, { unique: true });
//     console.log("Indexes created on email and phone");
// })
//     .catch(err => console.error('MongoDB connection error:', err));

const connectToDatabase = async () => {
    try {
        const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mern-auth";
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');

        // Ensure indexes for unique fields
        const db = mongoose.connection.db;
        await db.collection("users").createIndex({ email: 1 }, { unique: true });
        await db.collection("users").createIndex({ phone: 1 }, { unique: true });
        console.log("Indexes created on email and phone");
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1); // Exit process with failure code
    }
};
connectToDatabase();



// User Schema
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    resetToken: String,            // For storing reset token
    resetTokenExpiry: Date         // Token expiry time
});
const User = mongoose.model('User', UserSchema);

// --------------------------------------------------------------------

// Wallet schema and model
const walletSchema = new mongoose.Schema({
    phone: { type: String, required: true },
    amount: { type: Number, default: 0 },
});

const Wallet = mongoose.model('ang', walletSchema);

// Route to save phone
app.post('/api/save-phone', async (req, res) => {
    const { phone } = req.body;
    console.log(phone);


    if (!phone) {
        return res.status(400).json({ error: 'Phone number is required' });
    }

    try {
        // Check if phone already exists
        let wallet = await Wallet.findOne({ phone });

        if (!wallet) {
            // Create a new wallet entry if not exists
            wallet = new Wallet({ phone });
            console.log(wallet);

            await wallet.save();
        }

        res.status(201).json({ message: 'Phone saved successfully', wallet });
    } catch (error) {
        console.error('Error saving phone:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



// ************************************************************


app.get('/wallet/:phone', async (req, res) => {
    try {
        const { phone } = req.params;
        const walletData = await Wallet.findOne({ phone });

        if (!walletData) {
            return res.status(404).json({ message: 'Wallet not found' });
        }

        // Send the amount as response
        res.json({ amount: walletData.amount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});






// Route to fetch data
app.get('/api/get', async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching data', error: err.message });
    }
});
// ---------------------------------------------------------------------------------------------------------------

// Nodemailer configuration for sending emails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Forgot Password Route
app.post('/forgotPassword', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User with this email does not exist' });
        }

        // Generate a reset token
        const resetToken = crypto.randomBytes(20).toString('hex');
        user.resetToken = resetToken;
        user.resetTokenExpiry = Date.now() + 3600000; // Token valid for 1 hour
        await user.save();

        // Send reset email
        const resetLink = `http://localhost:4000/resetPassword/${resetToken}`;
        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'Password Reset Request',
                html: `<p>You requested a password reset. Click <a href="${resetLink}">here</a> to reset your password. This link will expire in 1 hour.</p>`
            });
            res.json({ message: 'Password reset link sent to your email.' });
        } catch (mailError) {
            console.error('Error sending email:', mailError);
            if (mailError.code === 'ECONNREFUSED') {
                res.status(500).json({ message: 'Error connecting to email server' });
            } else {
                res.status(500).json({ message: 'Error sending reset email. Please try again later.' });
            }
        }

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ message: 'Error processing request', error });
    }
});

// Reset Password Route
app.post('/resetPassword/:token', async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    try {
        const user = await User.findOne({
            resetToken: token,
            resetTokenExpiry: { $gt: Date.now() } // Check token validity
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired token' });
        }

        // Update password and clear reset token fields
        user.password = await bcrypt.hash(newPassword, 10);
        user.resetToken = undefined;
        user.resetTokenExpiry = undefined;
        await user.save();

        res.json({ message: 'Password reset successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error resetting password', error });
    }
});

// -----------------------------------------------------------------------------------------------------------------

// BankDetails Schema
const bankDetailsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bankName: { type: String, required: true },
    accountNumber: { type: String, required: true },
    confirmAccountNumber: { type: String, required: true },
    ifscCode: { type: String, required: true },
});
const BankDetails = mongoose.model('BankDetails', bankDetailsSchema);




// Middleware to authenticate and set userId in req.user
const authenticate = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract token from "Bearer <token>"

    if (!token) {
        return res.status(401).json({ message: 'Authorization token missing' });
    }

    try {
        // Verify token and get user data
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace 'your_jwt_secret' with your actual secret key
        req.user = decoded; // decoded should have userId if encoded during login/signup
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};

// Signup Route
app.post('/signup', async (req, res) => {
    const { email, phone, password } = req.body;
    console.log(`User Email - ${email}`);
    console.log(`User Phone - ${phone}`);
    console.log(`User password - ${password}`);

    if (!phone) {
        return res.status(400).json({ message: 'Phone number is required' });
    }

    try {
        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save new user in the database
        const newUser = new User({ email, phone, password: hashedPassword });
        await newUser.save();

        res.json({ message: 'User signed up successfully' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// SignIn Route
app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '24h' });

        res.json({ message: 'User signed in successfully', token });
    } catch (error) {
        console.error('Error during sign in:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Save Bank Details
app.post('/save', authenticate, async (req, res) => {
    const { bankName, accountNumber, confirmAccountNumber, ifscCode } = req.body;
    if (accountNumber !== confirmAccountNumber) return res.status(400).json({ message: 'Account numbers do not match.' });

    try {
        const bankDetails = new BankDetails({
            userId: req.user._id,
            bankName,
            accountNumber,
            confirmAccountNumber,
            ifscCode,
        });
        console.log(bankDetails);

        await bankDetails.save();
        res.json({ message: 'Bank details saved successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error saving bank details', error });
    }
});

// --------------------------------------------------------------------------------------
// models/Transaction.js

const transactionSchema = new mongoose.Schema({

    utr: { type: String, required: true, unique: true },
    status: { type: String, enum: ['pending', 'confirmed', 'failed'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
    amount: { type: Number, required: true },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

const Transactions = mongoose.model('Transactions', transactionSchema);
console.log(Transactions);




app.post('/payment', authenticate, async (req, res) => {
    const { utr, amount } = req.body;
    // const userId = req.user._id;
    if (!utr) {
        return res.json({ success: false, message: 'UTR number is required.' });
    }


    const newTransaction = new Transactions({
        utr,
        userId: req.user._id,
        amount
    });
    console.log(newTransaction);
    await newTransaction.save()
        .then(() => res.json({ success: true, message: 'Payment confirmed successfully.' }))
        .catch(error => {
            console.error(error);
            res.json({ success: false, message: 'Error saving transaction.' });
        });

    // res.json({ success: true, message: 'Payment confirmed successfully.' });
});


// -----------------------------------------------------------------------------------------------------
// Purchase Logic 

app.get('/purchases', async (req, res) => {
    try {
        const confirmedPurchases = await Transactions.find({ status: 'confirmed' });
        res.json(confirmedPurchases);
    } catch (error) {
        console.error('Error fetching confirmed purchases:', error);
        res.status(500).json({ success: false, message: 'Error fetching confirmed purchases' });
    }
});

// ---------------------------------------------------------------------------------------------------------
// withdraw Amount Logic
// Withdrawal Schema and Model
const withdrawalSchema = new mongoose.Schema({
    phone: { type: String, required: true },
    withdrawAmount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

const Withdrawal = mongoose.model("Withdrawal", withdrawalSchema);

// POST Endpoint to save withdrawal data
app.post("/withdraw", async (req, res) => {
    try {
        const { phone, withdrawAmount } = req.body;
        console.log(phone , withdrawAmount);
        

        // Validation: Ensure required fields are provided
        if (!phone || !withdrawAmount) {
            return res.status(400).json({ error: "Phone and amount are required." });
        }

        // Save data to MongoDB
        const withdrawal = new Withdrawal({ phone, withdrawAmount });
        await withdrawal.save();

        res.status(200).json({ message: "Withdrawal request saved successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to save withdrawal request." });
    }
});





// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
