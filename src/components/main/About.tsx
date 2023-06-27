import '../../styles/about.css';
import aboutImg from '../../assets/aboutImg.jpg';
import about1Img from '../../assets/about1.png';
import about2Img from '../../assets/about2.png';
import about3Img from '../../assets/about3.png';
import aboutVideo1 from '../../assets/About2.mp4';

export default function About() {

  return (
    <section className='section' id='about'>
      <div className='about-main'>
        <div className='about-img' style={{
          backgroundImage: `url(${aboutImg})`
        }} />
        <div className='about-slogan'>
          <h1 className='subtitle-h1'>¿Quienes  somos?</h1>

          <div className='description-cover'>
            <p style={{
              fontSize: '1.7rem',
            }}>
              Ubicados en Coatzacoalcos, Veracruz,  en <strong style={{ color: 'white' }}> SIS&C S de RL de CV </strong> proveemos atención a clientes de toda la República Mexicana.
            </p>
            <p style={{ textAlign: 'center', paddingTop: '2rem', fontSize: '2.5rem', fontWeight: 'bold' }}>Misión</p>
            <p style={{ fontSize: '1.7rem', paddingTop: '2rem', textAlign: 'center' }}>Brindar a nuestros clientes productos, proyectos y soluciones confiables y de calidad.</p>

            <p style={{ textAlign: 'center', paddingTop: '2rem', fontSize: '2.5rem', fontWeight: 'bold' }}>Visión</p>
            <p style={{ fontSize: '1.7rem', paddingTop: '2rem', textAlign: 'center' }}>Posicionarnos dentro de las primeras opciones de solución con cada uno de nuestros clientes, focalizados siempre en la atención oportuna y confiable.</p>

          </div>

        </div>

      </div >

      <div className='home-items-wrapper'>
        <div className={'home-items animate-element animate about-items'}>
          <div style={{ margin: '2rem 0' }} className='home-items-description'>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bolder', color: 'white' }}>
              Contamos con personal calificado y comprometido.
            </p>
          </div>
          <div className='about-item-img-container'>
            <video autoPlay muted loop>
              <source src={aboutVideo1} type='video/mp4' />
            </video>
          </div>
        </div>


        <div className={'home-items animate-element animate about-items'}>
          <div style={{ margin: '2rem 0' }} className='home-items-description'>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bolder', color: 'white' }}>
              Enfocados en la industria del petróleo y gas, energías renovables y petroquímicos, en el sur-sureste del país.
            </p>
          </div>
          <div style={{}} className='about-item-img-container'>
            <img style={{ height: '20rem', borderRadius: '40px' }} src={about1Img} alt="" />
          </div>
        </div>

        <div className={'home-items animate-element animate about-items'}>
          <div style={{ margin: '2rem 0' }} className='home-items-description'>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bolder', color: 'white' }}>
              Damos soporte a las áreas de exploración y producción, refinación, petroquímica, distribución y almacenamiento.
            </p>
          </div>
          <div className='about-item-img-container'>
            <img style={{ height: '20rem' }} src={about2Img} alt="" />
          </div>
        </div>

        <div className={'home-items animate-element animate about-items'}>
          <div style={{ margin: '2rem 0' }} className='home-items-description'>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bolder', color: 'white' }}>
              Ofrecemos diseño y conceptualización de soluciones, ingeniería, implementación, soporte y servicios competitivos e innovadores.
            </p>
          </div>
          <div className='about-item-img-container'>
            <img style={{ height: '20rem' }} src={about3Img} alt="" />
          </div>
        </div>
      </div>

      <div className='valores-container'>
        <h1 style={{ fontFamily: 'Poppins, sans-serif', paddingBottom: '2rem', fontSize: '2rem', fontWeight: 'bold' }}>
          Nuestros valores
        </h1>
        <ul className='valores-items'>
          <li>Responsabilidad</li>
          <li>Honestidad</li>
          <li>Objetividad</li>
          <li>Adaptabilidad</li>
          <li>Confianza</li>
          <li>Pasión</li>
        </ul>
      </div>
    </section>
  );
}