// require('dotenv').config();
const express = require('express');
// const connectDB = require('./src/config/db');

const app = express();
app.use(express.json());

// connectDB();

// app.use('/api/auth', require('./src/routes/authRoutes'));
// app.use('/api/battle', require('./src/routes/battleRoutes'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
