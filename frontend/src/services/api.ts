/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';  
import { SendMailForm } from '../interfaces/Mail';

axios.defaults.headers.get['Accept'] = 'application/json'   // default header for all get request
axios.defaults.headers.post['Accept'] = 'application/json'   // default header for all post request

const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
});

// getBasicChart: (project,language) => api.get(`${endPoints.getBasicChart}/${project}/${language}`),
const endPoints = {
    postLog: 'sendMail',
    getUserMail: 'usermail',
}

export default {
    gets() {
        return {
            getUserMail: () => api.get(endPoints.getUserMail),
        }
    },
    posts() {
        return {
            postLog: (data: SendMailForm) => api.post(endPoints.postLog, data, {})
        }
    }
  }