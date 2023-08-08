const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://hamad:hamad@cluster0.6zetdcs.mongodb.net/?retryWrites=true&w=majority';

// -------------DB Connection----------------- //

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Error during database connection:", error);
  }
}

module.exports = connectDB;
