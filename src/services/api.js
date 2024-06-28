import axios from 'axios';

const API_BASE_URL = 'http://192.168.1.9:3000';

export const createUser = async (userData) => {
  try {
    console.log('Iniciando solicitação para criar usuário');
    const response = await axios.post(`${API_BASE_URL}/create`, userData, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 10000 
    });
    console.log('Resposta recebida:', response.data);
    return response.data;
  } catch (error) {
    console.log('Erro na solicitação:', error);
    throw (error.response ? error.response.data : error.message);
  }
};
