import Axios from "./axiosConfig";

export const createActualite = async (actualiteData) => {
    try {
        const response = await Axios.post('/actualite/',actualiteData);
        return response.data
    }catch (error){
        throw error;
    }
}

export const getAllActualite = async () => {
    try{
       const response = await Axios.get('/actualite/');
       return response.data;
    }catch (error) {
        throw error;
    }
}
export const getActualiteById = async (id)=>{
    try{
        const response = await Axios.get(`/actualite/${id}`);
        return response.data;
    }catch(error){
        throw error;
    }
}
export const updateActualite = async (id,actualiteData)=>{
    try{
        const response = await Axios.put(`/actualite/id/${id}`,actualiteData);
        return response.data;
    }catch(error){
        throw error;
    }
}
export const deleteActualite = async (id)=>{
    try{
        const response = await Axios.delete(`/actualite/id/${id}`);
        return response.data;
    }catch(error){
        throw error;
    }
}