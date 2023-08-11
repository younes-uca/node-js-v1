import Axios from './axiosConfig';

export const getLogements = async () => {
    try {
        const response = await Axios.get('/logement/');
        return response.data;
    } catch (error) {
        throw error;
    }
};