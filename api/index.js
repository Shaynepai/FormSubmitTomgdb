// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000; // Choose a suitable port

// Parse incoming request bodies
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://meian:meian12345@meian.vdhgopf.mongodb.net/Boardingo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Define your data model
const schema = new mongoose.Schema({
  // Define your fields
  name: String,
  email: String,
  // Add more fields as needed
});

const Model = mongoose.model('User', schema);

// Create a POST route to handle form submissions
app.post('/api/posts', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Create a new instance of your model
    const instance = new Model({
      name,
      email,
    });

    // Save the instance to the database
    await instance.save();

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error while submitting form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
