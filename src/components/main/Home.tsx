import AppContext from '../../context/AppContext';
import electricalImg from '../../assets/electrical.jpg';
import engineeringImg from '../../assets/image402.png';
import suministrosImg from '../../assets/suministrosImg.png';
import { useContext } from 'react';
import { SectionEnum } from '../../utils/enum/sectionEnum';
import { useInView } from 'react-intersection-observer';
import '../../styles/home.css';
import '../../styles/animation.css';
import Footer from '../footer/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useContext(AppContext);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.0001
  });
  const [refTwo, inViewTwo] = useInView({
    triggerOnce: false,
    threshold: 0.0001,
  });
  const [refThree, inViewThree] = useInView({
    triggerOnce: false,
    threshold: 0.0001,
  });

  const handleContactButton = () => setActiveSection(SectionEnum.CONTACT);
  return (
    <section className='section' id='home'>
      <h1>Somos una empresa joven <span className='is-blue'> con visión tecnológica.</span></h1>

      <p className='p-content'>
        <h2>
          En <strong style={{ color: 'white' }}> SIS&C</strong> ofrecemos soluciones, respaldados en nuestro personal calificado,
          garantizando siempre la satisfacción de nuestros clientes.
        </h2>
      </p>

      <div className='buttons is-grouped is-grouped-centered'>
        <button
          onClick={handleContactButton}
          className="contact-us-button">CONTÁCTANOS</button>
      </div>

      <div className='home-items-container'>
        <div ref={refTwo} className={inViewTwo ? 'home-items animate-element animate' : 'animate-element'}>
          <div className='home-items-img' style={{ backgroundImage: `url(${electricalImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <p className='home-items-header'>
            SERVICIOS
          </p>
          <div className='home-items-description'>
            <p>
              Ingeniería, control, instrumentación, electricidad, obra mecánica y mantenimientos.
            </p>
          </div>
        </div>

        <div ref={refThree} className={inViewThree ? 'home-items animate-element animate' : 'animate-element'}>
          <div className='home-items-img' style={{ backgroundImage: `url(${engineeringImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <p className='home-items-header'>
            PROYECTOS
          </p>
          <div className='home-items-description'>
            <p>
              En SIS&C nos especializamos en ofrecer soluciones completas, desde la conceptualización, diseño, ingeniería, implementación y mantenimiento. Trabajamos estrechamente con nuestros clientes desde la etapa inicial, hasta la entrega del proyecto.
            </p>
          </div>
        </div>

        <div ref={ref} className={inView ? 'home-items animate-element animate' : 'animate-element'}>
          <div className='home-items-img' style={{ backgroundImage: `url(${suministrosImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <p className='home-items-header'>
            SUMINISTROS
          </p>
          <div className='home-items-description'>
            <p>
              Suministro de equipos, materiales y accesorios asociados al proyecto o servicio en ejecución.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
