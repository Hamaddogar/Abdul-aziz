const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('../server/model/db');

const UserSchema = require('../server/model/sceehma');

// Connect to the database
connectDB();

// Middleware setup
server.use(bodyParser.json());
server.use(cors());

// Define routes
server.post('/signup', async (req, res) => {
  const { name, lastname, email, passcode } = req.body;

  try {
    const newForm = new UserSchema({ name, lastname, email, passcode });
    await newForm.save();
    
    res.send({ success: true, message: 'Account Created. Move to Login.' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
