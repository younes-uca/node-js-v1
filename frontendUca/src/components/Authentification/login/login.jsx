import './login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {accountService} from '../../../services/AccountService';


function Login() {

        let navigate = useNavigate()

        // Attention ici mise en place de valeur par défaut pour travailler.
        // NE JAMAIS FAIRE CELA
        const [credentials, setCredentials] = useState({
            numero: '',
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
            accountService.login(credentials)
                .then(res => {
                    // Sauvegarde du token et envoi vers espace adherent
                    accountService.saveToken(res.data.access_token)
                    navigate('/', {replace: true})
                })
                .catch(error => console.log(error))
        }

  return (
    <div className="login">
                <div className="form-boxLogin">
                        <div className="form-value">
                                <form onSubmit={onSubmit} action>
                                        <h2 className="loginTitle">Login</h2>
                                    <div className="inputboxLogin">
                                        <ion-icon name="person-outline"></ion-icon>
                                        <input type="text" required name="numero" value={credentials.numero} onChange={onChange} />
                                        <label htmlFor>Numero d'Adherent</label>
                                    </div>
                                        <div className="inputboxLogin">
                                                <ion-icon name="lock-closed-outline" />
                                                <input type="password" required name="password" value={credentials.password} onChange={onChange} />
                                                <label htmlFor>Mot De Passe</label>
                                        </div>
                                        <div className="forget">
                                                <label htmlFor><input type="checkbox" />Remember Me  </label>
                                        </div>
                                        <button className="loginBouton">Log in</button>
                                    <div className="resset">
                                        <a  className="loginA" onClick={()=>{navigate("/resetPassword")}}>Mot de passe Oublié</a>
                                    </div>
                                </form>
                        </div>
                </div>
        </div>
  );
}

export default Login;
