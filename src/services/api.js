import axios from 'axios';

const API_BASE_URL =  'https://user-service.swiftpix.software';

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/create`, userData, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'

      }
    });
    return response.data;
  } catch (error) {
    throw (error.response ? error.response.data : error.message);
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, loginData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw (error.response ? error.response.data : error.message);
  }
};
