import Axios from "./axiosConfig";
import {accountService} from "./AccountService";

export const getAllUsers = async () => {
    try{
        const response = await Axios.get(`/user/`);
        return response.data;
    }catch (error){
        throw error;
    }
};
export const resetPassword = async ( userData) => {
    try {
        // Effectuer une requête POST vers votre backend pour réinitialiser le mot de passe
        const response = await Axios.post(`/user/resetPassword`,userData);
        return response.data; // Retourner la réponse du backend
    } catch (error) {
        // Gérer les erreurs de la requête si nécessaire
        throw error;
    }
};


export const changePassword = async ( userData) => {
    try {
        const tokenInfo = accountService.getTokenInfo();
        const userId = tokenInfo.id;

        const response = await Axios.put(`/user/${userId}`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}



