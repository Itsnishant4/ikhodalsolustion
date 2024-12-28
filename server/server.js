const express = require('express');
const mongoose = require('mongoose');
const Project = require('./projectModel');
const Mockup = require('./mockupmodule');
const Review = require('./reviews'); // Import the Project model
const cors = require('cors');
const app = express();
const port = 5000;

// Connect to MongoDB (replace with your connection string if using MongoDB Atlas)
const connect = async () => {
  try{
        mongoose.connect('mongodb+srv://itsnishant470:rXjIlUsnqg8kjFbm@cluster0.amgic.mongodb.net/', {
          
        }).then(() => {
          console.log('MongoDB connected');
        }).catch(err => console.log(err));}
  catch{
    console.log("error")
  }
}

connect();

app.use(cors());
// Middleware to parse JSON
app.use(express.json());

// Get all projects
app.get('/data', async (req, res) => {
  try {
    const projects = await Project.find();
    return res.json({projects : projects});
  } catch (err) {
    res.status(500).send('Server error');
  }
});

app.get('/mockup', async (req, res) => {
  try{
    const mockups = await Mockup.find()
    return res.json({mockups : mockups})
  }catch(err){
    res.status(501).send('Server error');
  }
});

app.get('/reviews', async (req, res) => {
  try {
      const reviews = await Review.find();
      return res.json({ reviews });
  } catch (err) {
      res.status(501).json({ error: 'Server error' });
  }
});

app.post('/reviews', async (req, res) => {
  const { name, description } = req.body;
  try {
      if (!name || !description) {
          return res.status(400).json({ error: 'Name and description are required' });
      }
      const newReview = new Review({ name, description });
      await newReview.save();
      res.status(201).json(newReview);
  } catch (err) {
      console.error('Error saving review:', err); // Log the exact error to the console
      res.status(500).json({ error: 'Server error' });
  }
});




// Add a new project
app.post('/data', async (req, res) => {
  const { title, description, imageUrl } = req.body;

  try {
    const newProject = new Project({ title, description, imageUrl });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
