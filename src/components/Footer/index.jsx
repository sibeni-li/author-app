import LOGO from '../../assets/LOGO.png'
import '../../styles/Footer.scss'

function Footer() {
    return (
    <footer>
        <div>
            <img src={LOGO} className='logo-footer' alt='Logo M.S-Ramety'/>
            <p>© 2024 M.S-Ramety</p>
            <p>Tous droits réservés</p>
        </div>
    </footer>
    )
};
export default Footer;