import '../../styles/footer.css';
import { FaMapMarkerAlt, FaPhone, FaCopyright } from 'react-icons/fa';


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
                    <FaPhone />
                </div>
                <p>9212146024</p>
            </div>
            <div className="contact-info">
                <div className='icon'>
                    <FaCopyright/>
                </div>
                <p>Copyright 2023</p>
            </div>
        </div>
    );
}