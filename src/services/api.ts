import axios from 'axios';
import type {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios';
import { env } from '@settings/environment.ts';

export const axiosInstance = axios.create({
	baseURL: env.apiUrl,
	headers: { 'Content-Type': 'application/json' },
	timeout: 10000,
});

axiosInstance.interceptors.request.use(
	function (config: InternalAxiosRequestConfig) {
		const token = localStorage.getItem('authToken');
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}
		return config;
	},
	function (error: AxiosError): Promise<AxiosError> {
		return Promise.reject(error);
	},
);

axiosInstance.interceptors.response.use(
	function (response: AxiosResponse): AxiosResponse {
		return response;
	},
	function (error: AxiosError): Promise<AxiosError> {
		if (error.response?.status === 401) {
			console.error('Unauthorized!');
		}
		return Promise.reject(error);
	},
);
