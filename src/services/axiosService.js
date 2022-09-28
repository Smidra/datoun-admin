import axios from "axios";

const BASE_URL = 'https://wiki.smid.io/';
const TOKEN = '8ebe7bf636fde29d64a19dcd144ad569be5791c1e9a2e3caba9809ac3d872d58';

const axios_instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {'Authorization': `Bearer ${TOKEN}`}
});

export const getAxiosInstance = () => {
    return axios_instance
};
