import Axios from './axiosConfig';

export const createContact = async (contactData) => {
    try {
        const response = await Axios.post(`/contact/`, contactData);
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const getAllContact = async () =>{
    try {
        const response = await Axios.get('/contact/');
        return response.data;
    }catch (error){
        throw error;
    }
}
export const getContactById = async (id) => {
    try {
        const response = await Axios.get(`/contact/${id}`);
        return response.data;
    }catch (error){
        throw error;
    }
}