import Axios from "./axiosConfig";
import {accountService} from "./AccountService";

export const createReservation = async (reservationData) =>{
    try{
        const response = await Axios.post('/reservation/',reservationData);
        return response.data;
    }catch (error){
        if (error.response && error.response.data) {
            console.log(error.response.data);
        } else {
            console.log(error);
        }
        throw error;
    }
}
export const createReservationAdherent = async (reservationData) => {
    try {
        const tokenInfo = accountService.getTokenInfo();
        const numero = tokenInfo.numero;
        const roleNom = tokenInfo.roleNom;

        if (roleNom === 'adherent') {
            reservationData.numeroAdherent = numero;
        }

        const response = await Axios.post('/reservation/create', reservationData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAllReservations = async () =>{
    try {
        const response = await Axios.get('/reservation/');
        return response.data;
    }catch (error){
        throw error;
    }
}

export const deleteReservation = async (id)  => {
    try {
        const response = await Axios.delete(`/reservation/id/${id}`);
        return response.data;
    }catch (error){
        throw error;
    }
}
export const getReservationById = async (id)  => {
    try {
        const response = await Axios.get(`/reservation/${id}`);
        return response.data;
    }catch (error){
        throw error;
    }
}
export const updateReservation = async (id, reservationData) => {
    try{
        const response = await Axios.put(`/reservation/id/${id}`, reservationData);
        return response.data;
    }catch (error){
        throw error;
    }
}
export const getDatesLogementsRemplis = async (logementId) => {
    try {
        const response = await Axios.get(`/reservation/logement-reserve/${logementId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
