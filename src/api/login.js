import { request } from '@/utils/wx-request.js';
const module = "";
export const loginSucessApi = () => {
    return request(`${module}/loginSuccess`);
};