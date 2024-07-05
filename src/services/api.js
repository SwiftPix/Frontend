import axios from 'axios';

const API_BASE_URL_USER = 'http://192.168.1.9:3000';
const API_BASE_URL_TRANSFERENCE = 'http://192.168.1.9:5010';
const API_BASE_URL_GEOLOC = 'http://192.168.1.9:5002';
export const createUser = async (userData) => {
  try {
    console.log('Iniciando solicitação para criar usuário');
    const response = await axios.post(`${API_BASE_URL_USER}/create`, userData, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    console.log('Resposta recebida:', response.data);
    return response.data;
  } catch (error) {
    console.log('Erro na solicitação:', error);
    throw (error.response ? error.response.data : error.message);
  }
};

export const loginUser = async (userData) => {
  try {
      console.log('Iniciando solicitação de login:', userData);
      const response = await axios.post(`${API_BASE_URL_USER}/login`, userData, {
          headers: {
              'Content-Type': 'application/json'
          }
      });
      console.log('Resposta recebida:', response.data);
      return response.data;
  } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw error;
  }
};


export const curency = async (userData) => {
  try {
      console.log('Iniciando solicitação de login:', userData);
      const response = await axios.post(`${API_BASE_URL_GEOLOC}/coords/currency`, userData, {
          headers: {
              'Content-Type': 'application/json'
          }
      });
      console.log('Resposta recebida:', response.data);
      return response.data;
  } catch (error) {
      console.error('Erro ao pegar moeda:', error);
      throw error;
  }
};


export const convertion = async (userData) => {
  try {
    console.log('Iniciando solicitação de login:', userData);
    const response = await axios.post(`${API_BASE_URL_GEOLOC}/conversion`, userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log('Resposta recebida:', response.data);
    return response.data;
} catch (error) {
    console.error('Erro ao fazer conversão:', error);
    throw error;
}
};



export const transference = async (userData) => {
  try {
      console.log('Iniciando solicitação de login:', userData);
      const response = await axios.post(`${API_BASE_URL_TRANSFERENCE}/transference`, userData, {
          headers: {
              'Content-Type': 'application/json'
          }
      });
      console.log('Resposta recebida:', response.data);
      return response.data;
  } catch (error) {
      console.error('Erro ao fazer trasnferência', error);
      throw error;
  }
};

export const getExpenses = async (userID) => {
  try {
    console.log('Iniciando solicitação de despesas para o usuário:', userID);
    
    const response = await axios.get(`${API_BASE_URL_USER}/expense/${userID}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    console.log('Resposta recebida:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao recuperar despesas:', error);
    throw error;
  }
};

export const createExpense = async (userID, expenseData) => {
  try {
    console.log('Iniciando solicitação de criação de despesa para o usuário:', userID);
    
    const response = await axios.post(`${API_BASE_URL_USER}/expense/${userID}`, expenseData, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    console.log('Resposta recebida:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar despesa:', error);
    throw error;
  }
};
