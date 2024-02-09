// pages/api/register/step2.js
import axios from 'axios';

export const registerStep2 = async(req, res) =>  {
  try {
    const response = await axios.post('http://localhost:7000/users/step2', req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error during registration step 2:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
