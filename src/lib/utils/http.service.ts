import Axios from 'axios';
import { URL_API } from '@/configs/keys';

const httpService = Axios.create({
    baseURL: URL_API,
    timeout: 20000,
    headers: {
        'content-type': 'application/json',
        refreshToken: '',
    },
});

httpService.interceptors.request.use(
    config => {
        // for custom token
        const token = null || '';

        if (token) config.headers.Authorization = token;

        return {
            ...config,
        };
    },
    (error) => Promise.reject(error),
);

httpService.interceptors.response.use(
    async res => res.data,
    // custom handle response error
    async (error) => {
        if (error?.response) {
            const { status } = error.response;
            if (status === 401) {
                // handle authorization
            }
        }

        return Promise.reject(error);
    },
);

export default httpService;