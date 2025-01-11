import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3015',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    }
  });