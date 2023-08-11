import { Navigate } from "react-router-dom";
import { accountService } from "../services/AccountService";

/**
 * Fonction de vérification de token
 * Et fermetur partie admin
 *
 * @param {Object} props{children}
 * @returns {ReactNode}
 */
const AuthGuardSite = ({children}) => {

    if(!accountService.isLogged()){
        return <Navigate to="/login"/>
    }


    return children
};

export default AuthGuardSite;
