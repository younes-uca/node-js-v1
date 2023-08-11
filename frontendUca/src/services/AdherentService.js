import Axios from "./axiosConfig";
import {accountService} from "./AccountService";
import Swal from "sweetalert2";

export const createAdherentWithUser = async (adherentData) => {
    try {
        const response = await Axios.post(`/adherent/`, adherentData);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            console.log(error.response.data);
        } else {
            console.log(error);
        }
        throw error;
    }
};


export const deleteAllAdherents = async () => {
    try {
        const response = await Axios.delete(`/adherent/`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAllAdherents = async () =>{
    try {
        const response = await Axios.get('/adherent/');
        return response.data;
    }catch (error){
        throw error;
    }
}

export const deleteAdherentByNumero = async (numero)  => {
    try {
        const response = await Axios.delete(`/adherent/deleteByNumero/${numero}`);
        return response.data;
    }catch (error){
        throw error;
    }
}
export const getAdherentByNumero = async (adherentInfo)  => {
    try {
        const tokenInfo = accountService.getTokenInfo();
        const numero = tokenInfo.numero;
        const response = await Axios.get(`/adherent/${numero}`,adherentInfo);
        return response.data;
    }catch (error){
        throw error;
    }
}
export const updateAdherent = async (adherentInfo) => {
    try{
        const tokenInfo = accountService.getTokenInfo();
        const numero = tokenInfo.numero;
        const response = await Axios.put(`/adherent/${numero}`,adherentInfo);
        return response.data;
    }catch (error){
        throw error.response.data;
    }
}

export const getReservationsByAdherent = async (reservations)  => {
    try {
        const tokenInfo = accountService.getTokenInfo();
        const numero = tokenInfo.numero;
        const response = await Axios.get(`/adherent/reservationsAdherent/${numero}`,reservations);
        return response.data;
    }catch (error){
        throw error;
    }
}
