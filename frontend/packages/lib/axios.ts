import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

// Create axios instance with default config
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Log request details in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Request] ${config.method?.toUpperCase()} ${config.url}`);
    }

    return config;
  },
  (error: AxiosError) => {
    console.error('[Request Error]', error);
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log response in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Response] ${response.status} ${response.config.url}`);
    }

    return response;
  },
  (error: AxiosError) => {
    // Handle different error scenarios
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;

      switch (status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          console.error('[Auth Error] Unauthorized access');
          localStorage.removeItem('authToken');
          // You can dispatch a logout action or redirect here
          // window.location.href = '/login';
          break;

        case 403:
          console.error('[Auth Error] Forbidden access');
          break;

        case 404:
          console.error('[Not Found]', error.config?.url);
          break;

        case 500:
          console.error('[Server Error] Internal server error');
          break;

        default:
          console.error(`[Error ${status}]`, data);
      }
    } else if (error.request) {
      // Request made but no response received
      console.error('[Network Error] No response received', error.message);
    } else {
      // Error in request setup
      console.error('[Request Setup Error]', error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
