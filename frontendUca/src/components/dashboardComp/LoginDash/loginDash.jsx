import './loginDash.css';
import React, {useState} from "react";
import {useNavigate} from "react-router";
import {accountService} from "../../../services/AccountService";


function LoginDash() {
    let navigate = useNavigate()

    // Attention ici mise en place de valeur par défaut pour travailler.
    // NE JAMAIS FAIRE CELA
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    // Gestion de la modification des champs du formulaire
    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    // Soumission du formulaire
    const onSubmit = (e) => {
        e.preventDefault()
        accountService.loginDash(credentials)
            .then(res => {
                // Sauvegarde du token et envoi vers admin
                accountService.saveToken(res.data.access_token)
                navigate('/admin', {replace: true})
            })
            .catch(error => console.log(error))
    }
    return (
        <body className="bodyLogDash">
            <div className="background">
                <div className="shape" />
                <div className="shape" />
            </div>
            <form onSubmit={onSubmit} className="formLogDash">
                <h3>Admin Login</h3>
                <label className="labelLogDash" htmlFor="username">Nom d'Utilisateur</label>
                <input className="inputLogDash" type="text" placeholder="Nom d'Utilisateur"  name="username" value={credentials.username} onChange={onChange} id="username" />
                <label className="labelLogDash" htmlFor="password">Mot de Passe</label>
                <input className="inputLogDash" type="password" placeholder="Mot de Passe" name="password" value={credentials.password} onChange={onChange} id="password" />
                <button className="btnLogDash">Log In</button>
            </form>
        </body>
    )
};
export default LoginDash;
