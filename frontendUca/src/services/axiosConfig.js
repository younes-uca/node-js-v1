import axios from "axios";
import { accountService } from './AccountService'
const Axios = axios.create({
    baseURL: 'http://localhost:8032/api/v1'
})


// Intercepteur pour la mise en place du token dans la requête
Axios.interceptors.request.use(request => {

    if(accountService.isLogged()){
        request.headers.Authorization = 'Bearer '+accountService.getToken()
    }

    return request
})

// Intercepteur de réponse API pour vérification de la session
Axios.interceptors.response.use(response => {
    return response
}, error => {
    if(error.response.status === 401){
        accountService.logout()
        window.location = '/user/login'
    }else{
        return Promise.reject(error)
    }
})


export default Axios;
