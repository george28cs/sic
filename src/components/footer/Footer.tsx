import '../../styles/footer.css';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';


export default function Footer() {
    return (
        <div className='footer'>
            <div className="contact-info">
                <div className="icon">
                    <FaMapMarkerAlt />
                </div>
                <p>Coatzacoalcos, Veracruz, México</p>
            </div>
            <div className="contact-info">
                <div className="icon">
                    <FaEnvelope />
                </div>
                <p>correo@electronico.com</p>
            </div>
            <div className="contact-info">
                <p>© COPYRIGHT 2023</p>
            </div>
        </div>
    );
}