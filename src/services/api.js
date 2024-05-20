import axios from 'axios';

const balanceApi = axios.create({
  baseURL:
    'https://balance-route-rigel.cluster-rigel-48db186963ba71db192cac97260582d1-0000.us-south.containers.appdomain.cloud/balance',
});
const keysApi = axios.create({
  baseURL:
    'https://keys-route-rigel.cluster-rigel-48db186963ba71db192cac97260582d1-0000.us-south.containers.appdomain.cloud',
});
const paymentsApi = axios.create({
  baseURL:
    'https://payments-route-rigel.cluster-rigel-48db186963ba71db192cac97260582d1-0000.us-south.containers.appdomain.cloud',
});

export { balanceApi, keysApi, paymentsApi };
