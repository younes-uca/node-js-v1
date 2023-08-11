import Axios from './axiosConfig';

export const createResponse = async (contactId, content) => {
    try {
        const response = await Axios.post(`/response/`, {
            contactId,
            content,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}