import './changePassword.css';
import React, {useState} from "react";
import Swal from "sweetalert2";
import { changePassword } from "../../../services/UserService";


function ChangePassword() {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmMdp, setConfirmMdp] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (newPassword !== confirmMdp) {
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: 'Les mots de passe ne correspondent pas.'
            });
            return;
        }

        const userData = {
            oldPassword,
            newPassword
        };
        try {
            const response = await changePassword(userData);
            console.log('Le mot de passe a été modifié avec succès:', response);
            setOldPassword('');
            setNewPassword('');
            setConfirmMdp('');
            Swal.fire({
                icon: 'success',
                title: 'Modification du mot de passe',
                text: 'Le mot de passe a été modifié avec succès.'
            });
        } catch (error) {
            console.error('Erreur lors de la modification du mot de passe:', error);
        }
    };
    return (
        <>
            <div className="changeEs">
                <div className="form-boxChangeEs">
                    <div className="form-value">
                        <form onSubmit={handleSubmit}>
                            <h2 className="changeTitleEs">Changer Le Mot De Passe</h2>
                            <div className="inputboxChangeEs">
                                <ion-icon name="lock-closed-outline" />
                                <input className="inputChngPdEs" type="password"
                                       value={oldPassword}
                                       onChange={(e) => setOldPassword(e.target.value)} required />
                                <label className="labelChngPswEs" >Ancien Mot De Passe</label>
                            </div>
                            <div className="inputboxChangeEs">
                                <ion-icon name="lock-closed-outline" />
                                <input className="inputChngPdEs" type="password" value={newPassword}
                                       onChange={(e) => setNewPassword(e.target.value)} required />
                                <label className="labelChngPswEs" >Nouveau Mot De Passe</label>
                            </div>
                            <div className="inputboxChangeEs">
                                <ion-icon name="lock-closed-outline" />
                                <input className="inputChngPdEs" type="password" value={confirmMdp}
                                       onChange={(e) => setConfirmMdp(e.target.value)} required />
                                <label className="labelChngPswEs" >Confirme Nouveau Mot De Passe</label>
                            </div>
                            <div className="forgetEs">
                                <label className="labelChngPswEs" htmlFor><input className="inputChngPdEs" type="checkbox" />Remember Me  </label>
                            </div>
                            <button className="changeBoutonEs">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};
export default ChangePassword;
