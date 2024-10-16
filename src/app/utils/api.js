import axios from 'axios';

const API_URL = process.env.API_URL;

// method request
export const METHOD_GET    = "GET";
export const METHOD_POST   = "POST";
export const METHOD_PUT    = "PUT";
export const METHOD_DELETE = "DELETE";
export const METHOD_PATCH  = "PATCH";

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
});

export async function request(method, endpoint) {
    try {
        let res = null;
        switch (method) {
            case METHOD_POST:
                res = await apiClient.post(endpoint)
                break;
            case METHOD_PUT:
                res = await apiClient.put(endpoint)
                break;
            case METHOD_DELETE:
                res = await apiClient.delete(endpoint)
                break;
            case METHOD_PATCH:
                res = await apiClient.patch(endpoint)
                break;
            default:
                res = await apiClient.get(endpoint)
                break;
        }
        return res.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : `Error ${method} data`);
    }
}