import axios from 'axios';

export default axios.create({
  baseURL: 'https://sataracoders.somee.com/',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});
