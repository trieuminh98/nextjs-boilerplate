import axios, { type AxiosError } from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', //TODO: Replace
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.defaults.baseURL = 'https://api.example.com'
axiosInstance.defaults.headers.common.Authorization = 'Bearer token' //TODO: Replace
axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

axiosInstance.interceptors.request.use(
  (config) => {
    // Perform actions before the request is sent
    return config
  },
  (error: AxiosError) => {
    // Handle request error
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    if (error?.response?.status === 401) {
      //TODO
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
