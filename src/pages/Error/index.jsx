import { Link } from "react-router-dom";
import '../../styles/Error.scss'

function Error() {
    return (
        <div className="error">
            <h1>Oups...<br/>La page que vous cherchez n&apos;existe pas!</h1>
            <Link to='/'>Retourner à la page d&apos;accueil</Link>
        </div>
    )
};

export default Error;