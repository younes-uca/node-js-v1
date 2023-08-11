import './changePwd.css';

function  ChangePwd() {
    return (
        <div className="change">
            <div className="form-boxChange">
                <div className="form-value">
                    <form action>
                        <h2 className="changeTitle">Changer Le Mot De Passe</h2>
                        <div className="inputboxChange">
                            <ion-icon name="lock-closed-outline" />
                            <input type="password" required />
                            <label htmlFor>Ancien Mot De Passe</label>
                        </div>
                        <div className="inputboxChange">
                            <ion-icon name="lock-closed-outline" />
                            <input type="password" required />
                            <label htmlFor>Nouveau Mot De Passe</label>
                        </div>
                        <div className="inputboxChange">
                            <ion-icon name="lock-closed-outline" />
                            <input type="password" required />
                            <label htmlFor>Confirme Nouveau Mot De Passe</label>
                        </div>
                        <div className="forget">
                            <label htmlFor><input type="checkbox" />Remember Me  </label>
                        </div>
                        <button className="changeBouton">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ChangePwd;
