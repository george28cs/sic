import { FiUserCheck } from 'react-icons/fi';

export default function About(){
    return(
        <section className='section' id='home'>
          <h1>Somos una empresa joven <span className='is-blue'> con visión tecnológica.</span></h1>
          <article>
            <ul>
              <li>
                <p>
                  <div className='icon-styled'>
                    <i className="ico ico-extraction" />
                  </div>
                  Enfocados en la industria del petróleo y gas, energías renovables y petroquímicos.
                </p>
              </li>
              <li>
                <p>
                <div className='icon-styled'>
                    <i className="ico ico-refinery" />
                  </div>
                   Damos soporte a las áreas de exploración y producción, refinación, petroquímica, distribución y almacenamiento.
                </p>
              </li>
              <li>
                <p>
                <div className='icon-styled'>
                    <i className="ico ico-electric-factory" />
                  </div>
                   Ofrecemos diseño y conceptualización de soluciones, ingeniería, implementación, soporte y servicios competitivos e innovadores.
                </p>
              </li>
              <li>
                <p>
                <div className='icon-styled'>
                <FiUserCheck/>
                  </div>
                   Contamos con personal calificado y comprometido.
                </p>
              </li>
            </ul>
          </article>
          <div className='buttons is-grouped is-grouped-centered'>
            <button className="contact-us-button">CONTÁCTANOS</button>
          </div>
        </section>
    )
}