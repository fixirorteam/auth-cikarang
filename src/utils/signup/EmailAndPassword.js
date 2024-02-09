// utils/register.js
import axios from 'axios';

export const registerStep1 = async (data) => {
  try {
    const response = await axios.post('http://localhost:7000/users/step1', data);
    return response.data;
  } catch (error) {
    console.error('Error during registration step 1:', error);
    throw error;
  }
};

