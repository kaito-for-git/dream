import axios from "axios";

const client = axios.create({
  baseURL: 'http://localhost:8000', // バックエンドのURL
});

export default client;