import axios from 'axios';
//See https://codevoweb.com/react-query-axios-crud-restful-api-application/
// https://javascript.plainenglish.io/data-fetching-with-react-query-axios-257a95c86e77

const BASE_URL = 'https://dog.ceo/api/';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default client;
