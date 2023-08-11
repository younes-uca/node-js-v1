import Axios from "./axiosConfig";
import jwt_decode from 'jwt-decode'

/**
 * Connexion vers l'API
 * @param {object} credentials
 * @returns {Promise}
 */
/**
 * Vérifie si l'utilisateur connecté a le rôle d'adhérent
 * @returns {boolean}
 */
let isAdherent = () => {
    let tokenInfo = getTokenInfo();
    return tokenInfo.role === 'adherent';
};


// Frontend method for resetting password





/**
 * Vérifie si l'utilisateur connecté a le rôle d'administrateur
 * @returns {boolean}
 */
let isAdmin = () => {
    let tokenInfo = getTokenInfo();
    return tokenInfo.role === 'admin';
};

let loginDash = (credentials) => {
    return Axios.post('/user/loginDash', credentials)
}
let login = (credentials) => {
    return Axios.post('/user/login', credentials)
}

/**
 * Sauvegarde du token dans le localStorage
 * @param {string} token
 */
let saveToken = (token) => {
    localStorage.setItem('token', token)
}

/**
 * Suppression du token du localStorage
 */
let logout = () => {
    localStorage.removeItem('token')
}

/**
 * Etat de la présence d'un token en localStorage
 * @returns {boolean}
 */
let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}

/**
 * Récupération brut du token en localStorage
 * @returns {string}
 */
export let getToken = () => {
    return localStorage.getItem('token')
}

/**
 * Récupération du payload du tkoen
 * @returns {object}
 */
let getTokenInfo = () => {
    const token = getToken();
    if (token) {
        const decodedToken = jwt_decode(token);
        return {
            id: decodedToken.id,
            numero: decodedToken.numero,
            nom: decodedToken.nom,
            prenom: decodedToken.prenom,
            teleA: decodedToken.teleA,
            teleB: decodedToken.teleB,
            email: decodedToken.email,
            dateNaissance: decodedToken.dateNaissance,
            dateAbonnement: decodedToken.dateAbonnement,
            dateCotisation: decodedToken.dateCotisation,
            conjoint: decodedToken.conjoint,
            etablissement: decodedToken.etablissement,
            etatMatrimonial: decodedToken.etatMatrimonial,
            profession: decodedToken.profession,
            cin: decodedToken.cin,
            nbrEnfants: decodedToken.nbrEnfants,
            teleFixe: decodedToken.teleFixe,
            genre: decodedToken.genre,
            adresse: decodedToken.adresse,
            roleNom: decodedToken.roleNom,
        };
    }
    return null;
};


// Déclaration des serivces pour import
export const accountService = {
    loginDash, saveToken, logout, isLogged, getToken, getTokenInfo, login, isAdherent, isAdmin,
}
