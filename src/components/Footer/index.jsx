import LOGO from '../../assets/images/LOGO.png'
import '../../styles/Footer.scss'

function Footer() {
    return (
    <footer>
        <img src={LOGO} className='logo-footer' alt='Logo M.S-Ramety'/>
        <p>© 2024 M.S-Ramety</p>
        <p>Tous droits réservés</p>
    </footer>
    )
};
export default Footer;