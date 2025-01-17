import express from 'express';
import Contact from '../models/contactme.js'

const router = express.Router();


router.post('/api/contactme', async (req, res) => {
    const { name, phone, message } = req.body;
    console.log('Received Data:', req.body);  // Log the incoming data for debugging
  
    try {
      const newContact = new Contact({ name, phone, message });
      await newContact.save(); // Save to MongoDB
      res.status(200).json({ message: 'Data stored successfully!' });
    } catch (error) {
      console.error('Error storing contact:', error);  // Log the actual error
      res.status(500).json({ error: 'Failed to store data' });
    }
  });

  export default router; 