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
    const response = await axios.post(`${API_BASE_GEOLOC_URL}/coords/currency`, {
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

export const checkKeyExists = async (key) => {
  try {
    const response = await axios.get(`${API_BASE_TRANSFERENCE_URL}/user_keys/${key}`);
    console.log('Chave verificada:', response.data);
    return !!response.data;
  } catch (error) {
    console.error('Erro ao verificar chave PIX:', error);
    throw error;
  }
};

export const showUserKeys = async (userId) => { 
  try {
    const response = await axios.get(`${API_BASE_TRANSFERENCE_URL}/my_keys/${userId}`);
    console.log('Chaves do usuário recebidas:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao encontrar chaves PIX:', error);
    throw error;
  }
};

export const createPixKey = async (keyData) => {
  try {
    console.log('Enviando dados para criar chave PIX:', keyData); 
    const response = await axios.post(`${API_BASE_TRANSFERENCE_URL}/create_key`, keyData);
    console.log('Chave PIX criada:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar chave PIX:', error);
    throw error;
  }
};

export const getUserByKey = async (key) => {
  try {
    const response = await axios.get(`${API_BASE_TRANSFERENCE_URL}/user_keys/${key}`);
    console.log('User recebido:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter chave PIX:', error);
    throw error;
  }
};

export const createTransference = async (transferenceData) => {
  try {
    console.log('Enviando dados para criar transferência:', transferenceData);
    const response = await axios.post(`${API_BASE_TRANSFERENCE_URL}/transference`, transferenceData);
    console.log('Resposta recebida da transferência:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar transferência:', error);
    throw error;
  }
};