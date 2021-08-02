import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://dtmoney-swart.vercel.app/api',

})