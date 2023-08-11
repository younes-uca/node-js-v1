import './reset.css';
import { useState } from 'react';
import { resetPassword } from "../../../services/UserService";
import Swal from "sweetalert2";

function ResetPwd() {
    const [premierMdp, setPremierMdp] = useState('');
    const [nouveauMdp, setNouveauMdp] = useState('');
    const [confirmMdp, setConfirmMdp] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (nouveauMdp !== confirmMdp) {
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: 'Les mots de passe ne correspondent pas.'
            });
            return;
        }

        const userData = {
            premierMdp,
            nouveauMdp
        };
        try {
            const response = await resetPassword(userData);
            console.log('Le mot de passe a été modifié avec succès:', response);
            setPremierMdp('');
            setNouveauMdp('');
            setConfirmMdp('');
            Swal.fire({
                icon: 'success',
                title: 'Réinitialisation du mot de passe',
                text: 'Le mot de passe a été modifié avec succès.'
            });
        } catch (error) {
            console.error('Erreur lors de la réinitialisation du mot de passe:', error);
        }
    };

    return (
        <div className="reset">
            <div className="form-boxReset">
                <div className="form-value">
                    <form onSubmit={handleSubmit}>
                        <h2 className="resetTitle">Mot De Passe Oublié</h2>
                        <div className="inputboxReset">
                            <ion-icon name="lock-closed-outline" />
                            <input
                                type="password"
                                id="premierMdp"
                                value={premierMdp}
                                onChange={(e) => setPremierMdp(e.target.value)}
                                required
                            />
                            <label htmlFor="premierMdp">Premier Mot De Passe</label>
                        </div>
                        <div className="inputboxReset">
                            <ion-icon name="lock-closed-outline" />
                            <input
                                type="password"
                                id="nouveauMdp"
                                value={nouveauMdp}
                                onChange={(e) => setNouveauMdp(e.target.value)}
                                required
                            />
                            <label htmlFor="nouveauMdp">Nouveau Mot De Passe</label>
                        </div>
                        <div className="inputboxReset">
                            <ion-icon name="lock-closed-outline" />
                            <input
                                type="password"
                                id="confirmMdp"
                                value={confirmMdp}
                                onChange={(e) => setConfirmMdp(e.target.value)}
                                required
                            />
                            <label htmlFor="confirmMdp">Confirme Nouveau Mot De Passe</label>
                        </div>
                        <div className="forget">
                            <label>
                                <input type="checkbox" />
                                Remember Me
                            </label>
                        </div>
                        <button className="resetBouton" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResetPwd;
