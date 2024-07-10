import axios from 'axios';

const API_BASE_USER_URL = 'http://user-service.swiftpix.software';
const API_BASE_TRANSFERENCE_URL = 'http://transference-service.swiftpix.software';
const API_BASE_GEOLOC_URL = 'http://geoloc.swiftpix.software';

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_USER_URL}/login`, userData);
    console.log('Resposta recebida:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

export const findUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_USER_URL}/user/${userId}`);
    console.log('Detalhes do usuário recebidos:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter detalhes do usuário:', error);
    throw error;
  }
};

export const getBalance = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_USER_URL}/balance/${userId}`);
    console.log('Saldo do usuário recebido:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter saldo do usuário:', error);
    throw error;
  }
};

export const getExpenses = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_USER_URL}/expenses/${userId}`);
    console.log('Despesas do usuário recebidas:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter despesas do usuário:', error);
    throw error;
  }
};

export const getCurrency = async (latitude, longitude) => {
  try {
<<<<<<< HEAD
    const response = await axios.post(`${API_BASE_GEOLOC_URL}/currency`, {
=======
    const response = await axios.post(`${API_BASE_GEOLOC_URL}/coords/currency`, {
>>>>>>> 4bc6d2b6e5d1bb664fdf4f85b1eb5ea7395f779b
      latitude: latitude.toString(),
      longitude: longitude.toString()
    });
    console.log('Moeda recebida:', response.data);
    return response.data.currency;
  } catch (error) {
    console.error('Erro ao obter moeda:', error);
    throw error;
  }
};
